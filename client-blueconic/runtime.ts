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


export const BASE_PATH = "https://tenantname/rest/v2".replace(/\/+$/, "");

export interface ConfigurationParameters {
    basePath?: string; // override base path
    fetchApi?: FetchAPI; // override for fetch implementation
    middleware?: Middleware[]; // middleware to apply before/after fetch requests
    queryParamsStringify?: (params: HTTPQuery) => string; // stringify function for query strings
    username?: string; // parameter for basic security
    password?: string; // parameter for basic security
    apiKey?: string | Promise<string> | ((name: string) => string | Promise<string>); // parameter for apiKey security
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>); // parameter for oauth2 security
    headers?: HTTPHeaders; //header params we want to use on every request
    credentials?: RequestCredentials; //value for the credentials param we want to use on each request
}

export class Configuration {
    constructor(private configuration: ConfigurationParameters = {}) {}

    set config(configuration: Configuration) {
        this.configuration = configuration;
    }

    get basePath(): string {
        return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
    }

    get fetchApi(): FetchAPI | undefined {
        return this.configuration.fetchApi;
    }

    get middleware(): Middleware[] {
        return this.configuration.middleware || [];
    }

    get queryParamsStringify(): (params: HTTPQuery) => string {
        return this.configuration.queryParamsStringify || querystring;
    }

    get username(): string | undefined {
        return this.configuration.username;
    }

    get password(): string | undefined {
        return this.configuration.password;
    }

    get apiKey(): ((name: string) => string | Promise<string>) | undefined {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }

    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : async () => accessToken;
        }
        return undefined;
    }

    get headers(): HTTPHeaders | undefined {
        return this.configuration.headers;
    }

    get credentials(): RequestCredentials | undefined {
        return this.configuration.credentials;
    }
}

export const DefaultConfig = new Configuration();

/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {

    private static readonly jsonRegex = new RegExp('^(:?application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$', 'i');
    private middleware: Middleware[];

    constructor(protected configuration = DefaultConfig) {
        this.middleware = configuration.middleware;
    }

    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
        const next = this.clone<T>();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }

    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware<T>(...middlewares);
    }

    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware<T>(...middlewares);
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    protected isJsonMime(mime: string | null | undefined): boolean {
        if (!mime) {
            return false;
        }
        return BaseAPI.jsonRegex.test(mime);
    }

    protected async request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response> {
        const { url, init } = await this.createFetchParams(context, initOverrides);
        const response = await this.fetchApi(url, init);
        if (response && (response.status >= 200 && response.status < 300)) {
            return response;
        }
        throw new ResponseError(response, 'Response returned an error code');
    }

    private async createFetchParams(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }

        const headers = Object.assign({}, this.configuration.headers, context.headers);
        Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});

        const initOverrideFn =
            typeof initOverrides === "function"
                ? initOverrides
                : async () => initOverrides;

        const initParams = {
            method: context.method,
            headers,
            body: context.body,
            credentials: this.configuration.credentials,
        };

        const overriddenInit: RequestInit = {
            ...initParams,
            ...(await initOverrideFn({
                init: initParams,
                context,
            }))
        };

        let body: any;
        if (isFormData(overriddenInit.body)
            || (overriddenInit.body instanceof URLSearchParams)
            || isBlob(overriddenInit.body)) {
          body = overriddenInit.body;
        } else if (this.isJsonMime(headers['Content-Type'])) {
          body = JSON.stringify(overriddenInit.body);
        } else {
          body = overriddenInit.body;
        }

        const init: RequestInit = {
            ...overriddenInit,
            body
        };

        return { url, init };
    }

    private fetchApi = async (url: string, init: RequestInit) => {
        let fetchParams = { url, init };
        for (const middleware of this.middleware) {
            if (middleware.pre) {
                fetchParams = await middleware.pre({
                    fetch: this.fetchApi,
                    ...fetchParams,
                }) || fetchParams;
            }
        }
        let response: Response | undefined = undefined;
        try {
            response = await (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
        } catch (e) {
            for (const middleware of this.middleware) {
                if (middleware.onError) {
                    response = await middleware.onError({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        error: e,
                        response: response ? response.clone() : undefined,
                    }) || response;
                }
            }
            if (response === undefined) {
              if (e instanceof Error) {
                throw new FetchError(e, 'The request failed and the interceptors did not return an alternative response');
              } else {
                throw e;
              }
            }
        }
        for (const middleware of this.middleware) {
            if (middleware.post) {
                response = await middleware.post({
                    fetch: this.fetchApi,
                    url: fetchParams.url,
                    init: fetchParams.init,
                    response: response.clone(),
                }) || response;
            }
        }
        return response;
    }

    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone<T extends BaseAPI>(this: T): T {
        const constructor = this.constructor as any;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
};

function isBlob(value: any): value is Blob {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}

function isFormData(value: any): value is FormData {
    return typeof FormData !== "undefined" && value instanceof FormData;
}

export class ResponseError extends Error {
    override name: "ResponseError" = "ResponseError";
    constructor(public response: Response, msg?: string) {
        super(msg);
    }
}

export class FetchError extends Error {
    override name: "FetchError" = "FetchError";
    constructor(public cause: Error, msg?: string) {
        super(msg);
    }
}

export class RequiredError extends Error {
    override name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery };
export type HTTPBody = Json | FormData | URLSearchParams;
export type HTTPRequestInit = { headers?: HTTPHeaders; method: HTTPMethod; credentials?: RequestCredentials; body?: HTTPBody };
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

export type InitOverrideFunction = (requestContext: { init: HTTPRequestInit, context: RequestOpts }) => Promise<RequestInit>

export interface FetchParams {
    url: string;
    init: RequestInit;
}

export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}

export function querystring(params: HTTPQuery, prefix: string = ''): string {
    return Object.keys(params)
        .map(key => querystringSingleKey(key, params[key], prefix))
        .filter(part => part.length > 0)
        .join('&');
}

function querystringSingleKey(key: string, value: string | number | null | undefined | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery, keyPrefix: string = ''): string {
    const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
    if (value instanceof Array) {
        const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
            .join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }
    if (value instanceof Set) {
        const valueAsArray = Array.from(value);
        return querystringSingleKey(key, valueAsArray, keyPrefix);
    }
    if (value instanceof Date) {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
    }
    if (value instanceof Object) {
        return querystring(value as HTTPQuery, fullKey);
    }
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}

export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}

export function canConsumeForm(consumes: Consume[]): boolean {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}

export interface Consume {
    contentType: string;
}

export interface RequestContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
}

export interface ResponseContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    response: Response;
}

export interface ErrorContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    error: unknown;
    response?: Response;
}

export interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams | void>;
    post?(context: ResponseContext): Promise<Response | void>;
    onError?(context: ErrorContext): Promise<Response | void>;
}

export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}

export interface ResponseTransformer<T> {
    (json: any): T;
}

export class JSONApiResponse<T> {
    constructor(public raw: Response, private transformer: ResponseTransformer<T> = (jsonValue: any) => jsonValue) {}

    async value(): Promise<T> {
        return this.transformer(await this.raw.json());
    }
}

export class VoidApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<void> {
        return undefined;
    }
}

export class BlobApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<Blob> {
        return await this.raw.blob();
    };
}

export class TextApiResponse {
    constructor(public raw: Response) {}

    async value(): Promise<string> {
        return await this.raw.text();
    };
}
