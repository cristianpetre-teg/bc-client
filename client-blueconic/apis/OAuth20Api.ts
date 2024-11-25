/* tslint:disable */
/* eslint-disable */
/**
 * BlueConic REST API v2
 * Welcome to the [BlueConic](https://www.blueconic.com) REST API v2. Our recently updated APIs offer access to a wealth of resources to interact with BlueConic visitor profiles, segments, interactions, and audit events via OpenAPI and OAuth 2.0 authorization flows making the interconnection between various services more secure, intuitive, and reliable than ever before.  This page describes how developers can use OAuth 2.0, the industry-standard protocol for authorization, to authorize apps in BlueConic and get started using the BlueConic REST API v2.  Learn more about [how to use the BlueConic REST API v2](https://support.blueconic.com/hc/en-us/articles/200453891-Using-the-BlueConic-REST-API).  # Authorizing an application to use the BlueConic REST API via OAuth 2.0  If you have an external software application that needs to communicate with BlueConic, you need to allow access to the BlueConic REST API. The authorization process in BlueConic for this access is built to OAuth 2.0 specifications. You can use either of two authorization flows: the authorization code flow and the client credentials flow. The most secure flow is the authorization code flow, intended for use with a user who can log in to BlueConic and authenticate the application to use the BlueConic API. The client credentials flow is easier to implement but lacks security features present in the authorization code flow. The client credentials flow is intended for machine-to-machine applications.   ## Using the Authorization code flow  To use the BlueConic REST API with OAuth 2.0 according to the authorization code flow you need to complete the following steps:  1.  Configure BlueConic so your external OAuth 2.0 application can authenticate and use the REST API. This means that you have to:     - Have a BlueConic user with the \"Applications\" permission. This user can configure the details of the external application in BlueConic.     - Have a BlueConic user with the \"Authorize Applications\" permission. This user can authorize the external application via the redirect page served by the authorization server.     - Configure the external application on the BlueConic Access management > Applications tab, so BlueConic can store public client ID and the client secret. The external app uses these properties to perform the initial request for an authorization code.   2. Develop an application that can execute OAuth 2.0 REST API requests. Specifically, that means an application that is able to:     - Generate a code verifier and code challenge.     - Store the public client ID and client secret as configured in BlueConic (see step 1).      - Request an authorization code from the BlueConic authorization server. Include the code challenge in the request.      - Show the user the redirect page served by the BlueConic authorization server, so the user can authenticate with credentials and consent to giving the application BlueConic REST API access.     - Receive the authorization code from the BlueConic authorization server.     - Use the authorization code to request an access token (and refresh token) from the BlueConic authorization server. Include the code verifier in the request. You must also provide the client ID and client secret for client authentication. You can do so by sending the client credentials in the body of your POST request.     - Use the access token to perform REST API requests.      - Revoke access if the user of the app so chooses (meaning that after this revocation, a new authorization grant is required to use the BlueConic REST API).     - Handle refresh token rotation. This means that whenever a new access token is requested using the refresh token, a new refresh token is also supplied along with the new access token.     - Handle all possible responses from the BlueConic REST API appropriately.  [Read more about the Authorization Code Flow](https://support.blueconic.com/hc/en-us/articles/14912561861403)  ## Using the Client credentials flow  To make use of the BlueConic REST API with OAuth 2.0 following the client credentials flow, you need to complete the following steps:  1. Configure BlueConic so your external OAuth 2.0 application can use the REST API. This means that you have to:     - Have a user with the \"Applications\" permission. This user can configure the details of the external application in BlueConic.     - Have a user with the \"Authorize Applications\" permission, who also has all permissions needed to use the REST API endpoint that you intend to use.     - Configure the external application on the Access management > Applications tab, so BlueConic can generate and store the public client ID and client secret for client authentication. Also select at least one scope so the app has access to that part of the REST API.     2. Develop an application that can execute OAuth 2.0 REST API requests. Specifically that means an application that is able to:     - Store the public client ID and client secret as configured in BlueConic (see above).     - Use the client ID and client secret to request an access token from the BlueConic authorization server. You can do so by sending the client credentials in the body of your POST request.     - Use the access token to perform REST API requests.     - Handle all possible responses from the BlueConic REST API appropriately.  [Read more about the Client Credentials Flow](https://support.blueconic.com/hc/en-us/articles/14912655111963)  # Using the try-out feature The “Try” feature allows you to directly make REST calls to the API server, where you can make requests and see the responses, allowing you to experiment with the BlueConic API and understand how it works.  You can enter your BlueConic URL in the “API Servers” section. After that, you can try out the calls that don’t require authentication, such as “Get interactions”. You can enter the request parameters and click “Try”.  ## OAuth 2.0 authentication  Most calls require OAuth 2.0 authentication, such as “Get audit events”. This can be seen at the right top and under the Request heading of each API method. To use the “Try” feature, you need to authenticate via OAuth 2.0. First create an Application in your BlueConic tenant (see above). When using the Authorization code flow, make sure to set the redirect URL to this tool as specified under the OAuth 2.0 authentication section. After you create the Application, authenticate this tool in the “Authentication” section. Enter the client ID and client secret in the correct OAuth 2.0 flow for which you created the application and press “GET TOKEN”. If the tool got a token successfully, you will see the text “API key applied” just under the “Authentication” heading. In calls that require Authentication, it will say “OAuth (OAuth 2.0) in header”. Now you can use the “Try” feature for calls that require OAuth 2.0. If you hover over the authentication scheme at the top right of an API method, you will see the required scopes (e.g. “Get audit events” has the scope read:audit-events). Make sure you set these scopes for the Application in BlueConic.  # General functionality for all endpoints  1. By using `prettyPrint`, the JSON data is formatted in a way that makes it easier to read and work with. This can be especially useful when working with large or complex JSON datasets. Add the following to the query string of a request to pretty print JSON: `&prettyPrint=true`. 2. Gzip encoding is a method of compressing data and is commonly used to reduce the size of files sent over the Internet. BlueConic supports this so a client can set the request header `Accept-Encoding: gzip`. BlueConic will then compress the data in its response and send it back to the client with the `Content-Encoding: gzip` header.   
 *
 * The version of the OpenAPI document: 94.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime.js';
import type {
  TokenErrorResponse,
  TokenSuccessResponse,
} from '../models/index.js';
import {
    TokenErrorResponseFromJSON,
    TokenErrorResponseToJSON,
    TokenSuccessResponseFromJSON,
    TokenSuccessResponseToJSON,
} from '../models/index.js';

export interface AuthorizeRequest {
    responseType: AuthorizeResponseTypeEnum;
    clientId: string;
    redirectUri: string;
    codeChallenge: string;
    codeChallengeMethod?: AuthorizeCodeChallengeMethodEnum;
    state?: string;
}

export interface RevokeRequest {
    token: string;
    clientId: string;
    clientSecret: string;
    tokenTypeHint?: RevokeTokenTypeHintEnum;
}

export interface TokenRequest {
    grantType: TokenGrantTypeEnum;
    clientId: string;
    clientSecret: string;
    code?: string;
    redirectUri?: string;
    codeVerifier?: string;
    refreshToken?: string;
}

/**
 * 
 */
export class OAuth20Api extends runtime.BaseAPI {

    /**
     * Starts the Authorization Code Flow. The user will be redirected to the authorization server where the user can grant or deny the external application access. The Proof Key for Code Exchange ([PKCE](https://www.rfc-editor.org/rfc/rfc7636)) extension is enforced for the Authorization Code Flow.
     * Start Authorization Code Flow
     */
    async authorizeRaw(requestParameters: AuthorizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['responseType'] == null) {
            throw new runtime.RequiredError(
                'responseType',
                'Required parameter "responseType" was null or undefined when calling authorize().'
            );
        }

        if (requestParameters['clientId'] == null) {
            throw new runtime.RequiredError(
                'clientId',
                'Required parameter "clientId" was null or undefined when calling authorize().'
            );
        }

        if (requestParameters['redirectUri'] == null) {
            throw new runtime.RequiredError(
                'redirectUri',
                'Required parameter "redirectUri" was null or undefined when calling authorize().'
            );
        }

        if (requestParameters['codeChallenge'] == null) {
            throw new runtime.RequiredError(
                'codeChallenge',
                'Required parameter "codeChallenge" was null or undefined when calling authorize().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['responseType'] != null) {
            queryParameters['response_type'] = requestParameters['responseType'];
        }

        if (requestParameters['clientId'] != null) {
            queryParameters['client_id'] = requestParameters['clientId'];
        }

        if (requestParameters['redirectUri'] != null) {
            queryParameters['redirect_uri'] = requestParameters['redirectUri'];
        }

        if (requestParameters['codeChallenge'] != null) {
            queryParameters['code_challenge'] = requestParameters['codeChallenge'];
        }

        if (requestParameters['codeChallengeMethod'] != null) {
            queryParameters['code_challenge_method'] = requestParameters['codeChallengeMethod'];
        }

        if (requestParameters['state'] != null) {
            queryParameters['state'] = requestParameters['state'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/oauth/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Starts the Authorization Code Flow. The user will be redirected to the authorization server where the user can grant or deny the external application access. The Proof Key for Code Exchange ([PKCE](https://www.rfc-editor.org/rfc/rfc7636)) extension is enforced for the Authorization Code Flow.
     * Start Authorization Code Flow
     */
    async authorize(requestParameters: AuthorizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authorizeRaw(requestParameters, initOverrides);
    }

    /**
     * Revokes access and/or refresh tokens.
     * Revoke token
     */
    async revokeRaw(requestParameters: RevokeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling revoke().'
            );
        }

        if (requestParameters['clientId'] == null) {
            throw new runtime.RequiredError(
                'clientId',
                'Required parameter "clientId" was null or undefined when calling revoke().'
            );
        }

        if (requestParameters['clientSecret'] == null) {
            throw new runtime.RequiredError(
                'clientSecret',
                'Required parameter "clientSecret" was null or undefined when calling revoke().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['token'] != null) {
            formParams.append('token', requestParameters['token'] as any);
        }

        if (requestParameters['clientId'] != null) {
            formParams.append('client_id', requestParameters['clientId'] as any);
        }

        if (requestParameters['clientSecret'] != null) {
            formParams.append('client_secret', requestParameters['clientSecret'] as any);
        }

        if (requestParameters['tokenTypeHint'] != null) {
            formParams.append('token_type_hint', requestParameters['tokenTypeHint'] as any);
        }

        const response = await this.request({
            path: `/oauth/revoke`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Revokes access and/or refresh tokens.
     * Revoke token
     */
    async revoke(requestParameters: RevokeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.revokeRaw(requestParameters, initOverrides);
    }

    /**
     * Obtains an access token and optional refresh token by presenting an authorization grant or refresh token. [Refresh Token Rotation](https://www.rfc-editor.org/rfc/rfc6819#section-5.2.2.3) is supported by default for the Authorization Code Flow.
     * Get token
     */
    async tokenRaw(requestParameters: TokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenSuccessResponse>> {
        if (requestParameters['grantType'] == null) {
            throw new runtime.RequiredError(
                'grantType',
                'Required parameter "grantType" was null or undefined when calling token().'
            );
        }

        if (requestParameters['clientId'] == null) {
            throw new runtime.RequiredError(
                'clientId',
                'Required parameter "clientId" was null or undefined when calling token().'
            );
        }

        if (requestParameters['clientSecret'] == null) {
            throw new runtime.RequiredError(
                'clientSecret',
                'Required parameter "clientSecret" was null or undefined when calling token().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['grantType'] != null) {
            formParams.append('grant_type', requestParameters['grantType'] as any);
        }

        if (requestParameters['clientId'] != null) {
            formParams.append('client_id', requestParameters['clientId'] as any);
        }

        if (requestParameters['clientSecret'] != null) {
            formParams.append('client_secret', requestParameters['clientSecret'] as any);
        }

        if (requestParameters['code'] != null) {
            formParams.append('code', requestParameters['code'] as any);
        }

        if (requestParameters['redirectUri'] != null) {
            formParams.append('redirect_uri', requestParameters['redirectUri'] as any);
        }

        if (requestParameters['codeVerifier'] != null) {
            formParams.append('code_verifier', requestParameters['codeVerifier'] as any);
        }

        if (requestParameters['refreshToken'] != null) {
            formParams.append('refresh_token', requestParameters['refreshToken'] as any);
        }

        const response = await this.request({
            path: `/oauth/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenSuccessResponseFromJSON(jsonValue));
    }

    /**
     * Obtains an access token and optional refresh token by presenting an authorization grant or refresh token. [Refresh Token Rotation](https://www.rfc-editor.org/rfc/rfc6819#section-5.2.2.3) is supported by default for the Authorization Code Flow.
     * Get token
     */
    async token(requestParameters: TokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenSuccessResponse> {
        const response = await this.tokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AuthorizeResponseTypeEnum = {
    Code: 'code'
} as const;
export type AuthorizeResponseTypeEnum = typeof AuthorizeResponseTypeEnum[keyof typeof AuthorizeResponseTypeEnum];
/**
 * @export
 */
export const AuthorizeCodeChallengeMethodEnum = {
    Plain: 'PLAIN',
    S256: 'S256'
} as const;
export type AuthorizeCodeChallengeMethodEnum = typeof AuthorizeCodeChallengeMethodEnum[keyof typeof AuthorizeCodeChallengeMethodEnum];
/**
 * @export
 */
export const RevokeTokenTypeHintEnum = {
    AccessToken: 'access_token',
    RefreshToken: 'refresh_token'
} as const;
export type RevokeTokenTypeHintEnum = typeof RevokeTokenTypeHintEnum[keyof typeof RevokeTokenTypeHintEnum];
/**
 * @export
 */
export const TokenGrantTypeEnum = {
    AuthorizationCode: 'authorization_code',
    ClientCredentials: 'client_credentials',
    RefreshToken: 'refresh_token'
} as const;
export type TokenGrantTypeEnum = typeof TokenGrantTypeEnum[keyof typeof TokenGrantTypeEnum];
