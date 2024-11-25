import { mixModuleApis } from "oasin";
import * as BlueConicAPI from "../client-blueconic/index.js";
import { Measure } from "./perf.js";

@Measure(["token", "getProfileAsync"] as any)
class Client extends mixModuleApis(BlueConicAPI, BlueConicAPI.BaseAPI) {
  static async getAccessToken() {
    const data = {} as BlueConicAPI.TokenSuccessResponse & { expiry?: number };

    return async () => {
      if (!data.accessToken || (data.expiry && Date.now() >= data.expiry)) {
        const res = await new this(
          new BlueConicAPI.Configuration({
            basePath: process.env["BLUECONIC_API_URL"]!,
          })
        ).token({
          clientId: process.env["BLUECONIC_API_CLIENT_ID"]!,
          clientSecret: process.env["BLUECONIC_API_CLIENT_SECRET"]!,
          grantType: "client_credentials",
        });

        Object.assign(data, res, {
          expiry: Date.now() + (res.expiresIn ?? 0) * 1_000,
        });
      }

      return `Bearer ${data.accessToken}`;
    };
  }

  async getUserSegments(profileId: string) {
    const { segments, consentedObjectives } = await this.getProfileAsync({
      profileId,
      properties: "",
      profileProperty: ["segments"],
      expand: ["profile.segments"],
    });

    if (consentedObjectives?.includes("blueconic_consent"))
      return segments?.map((segment) => segment.name);
  }
}

export const api = new Client(
  new BlueConicAPI.Configuration({
    basePath: process.env["BLUECONIC_API_URL"]!,
    accessToken: await Client.getAccessToken(),
  })
);
