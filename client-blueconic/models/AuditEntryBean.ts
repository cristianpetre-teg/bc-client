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

import { mapValues } from '../runtime.js';
import type { AuditEntryObjectBean } from './AuditEntryObjectBean.js';
import {
    AuditEntryObjectBeanFromJSON,
    AuditEntryObjectBeanFromJSONTyped,
    AuditEntryObjectBeanToJSON,
} from './AuditEntryObjectBean.js';

/**
 * 
 * @export
 * @interface AuditEntryBean
 */
export interface AuditEntryBean {
    /**
     * 
     * @type {string}
     * @memberof AuditEntryBean
     */
    application?: string;
    /**
     * Datetime in UTC when the event occurred. The date is in the https://www.ietf.org/rfc/rfc3339.txt format, example = "2023-01-22T11:21:33.872Z".
     * @type {Date}
     * @memberof AuditEntryBean
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof AuditEntryBean
     */
    ipAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditEntryBean
     */
    objectType: AuditEntryBeanObjectTypeEnum;
    /**
     * 
     * @type {Array<AuditEntryObjectBean>}
     * @memberof AuditEntryBean
     */
    objects?: Array<AuditEntryObjectBean>;
    /**
     * 
     * @type {string}
     * @memberof AuditEntryBean
     */
    operation: AuditEntryBeanOperationEnum;
    /**
     * 
     * @type {string}
     * @memberof AuditEntryBean
     */
    username?: string;
}


/**
 * @export
 */
export const AuditEntryBeanObjectTypeEnum = {
    Dialogue: 'DIALOGUE',
    Listener: 'LISTENER',
    Connection: 'CONNECTION',
    Variant: 'VARIANT',
    Segment: 'SEGMENT',
    ProfileProperty: 'PROFILE_PROPERTY',
    GroupProperty: 'GROUP_PROPERTY',
    Tracker: 'TRACKER',
    Dashboard: 'DASHBOARD',
    Lifecycle: 'LIFECYCLE',
    Plugin: 'PLUGIN',
    User: 'USER',
    Role: 'ROLE',
    Channel: 'CHANNEL',
    BlueconicHostname: 'BLUECONIC_HOSTNAME',
    Language: 'LANGUAGE',
    Contentstore: 'CONTENTSTORE',
    Statistics: 'STATISTICS',
    Favorite: 'FAVORITE',
    Template: 'TEMPLATE',
    Notebook: 'NOTEBOOK',
    Priority: 'PRIORITY',
    GroupType: 'GROUP_TYPE',
    CleanupRule: 'CLEANUP_RULE',
    MergeRule: 'MERGE_RULE',
    CompositionRule: 'COMPOSITION_RULE',
    Objective: 'OBJECTIVE',
    TimelineEventType: 'TIMELINE_EVENT_TYPE',
    Profile: 'PROFILE',
    IpRange: 'IP_RANGE',
    Group: 'GROUP',
    SupportedLegislationZone: 'SUPPORTED_LEGISLATION_ZONE',
    DomainGroup: 'DOMAIN_GROUP',
    Domain: 'DOMAIN',
    PrivacySetting: 'PRIVACY_SETTING',
    SingleSignOnSetting: 'SINGLE_SIGN_ON_SETTING',
    BlueconicSupportAccessSetting: 'BLUECONIC_SUPPORT_ACCESS_SETTING',
    OauthApplication: 'OAUTH_APPLICATION',
    OauthToken: 'OAUTH_TOKEN',
    TimelineEventRollup: 'TIMELINE_EVENT_ROLLUP',
    InactivityTimeoutSetting: 'INACTIVITY_TIMEOUT_SETTING'
} as const;
export type AuditEntryBeanObjectTypeEnum = typeof AuditEntryBeanObjectTypeEnum[keyof typeof AuditEntryBeanObjectTypeEnum];

/**
 * @export
 */
export const AuditEntryBeanOperationEnum = {
    Create: 'CREATE',
    Update: 'UPDATE',
    Delete: 'DELETE',
    Read: 'READ',
    Login: 'LOGIN',
    Logout: 'LOGOUT',
    LoginFailed: 'LOGIN_FAILED',
    ProfileMergeTriggeredByUser: 'PROFILE_MERGE_TRIGGERED_BY_USER',
    PasswordResetRequested: 'PASSWORD_RESET_REQUESTED',
    PasswordChange: 'PASSWORD_CHANGE',
    ManualRun: 'MANUAL_RUN',
    ScheduledRun: 'SCHEDULED_RUN',
    EditorRun: 'EDITOR_RUN'
} as const;
export type AuditEntryBeanOperationEnum = typeof AuditEntryBeanOperationEnum[keyof typeof AuditEntryBeanOperationEnum];


/**
 * Check if a given object implements the AuditEntryBean interface.
 */
export function instanceOfAuditEntryBean(value: object): boolean {
    if (!('date' in value)) return false;
    if (!('objectType' in value)) return false;
    if (!('operation' in value)) return false;
    return true;
}

export function AuditEntryBeanFromJSON(json: any): AuditEntryBean {
    return AuditEntryBeanFromJSONTyped(json, false);
}

export function AuditEntryBeanFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditEntryBean {
    if (json == null) {
        return json;
    }
    return {
        
        'application': json['application'] == null ? undefined : json['application'],
        'date': (new Date(json['date'])),
        'ipAddress': json['ipAddress'] == null ? undefined : json['ipAddress'],
        'objectType': json['objectType'],
        'objects': json['objects'] == null ? undefined : ((json['objects'] as Array<any>).map(AuditEntryObjectBeanFromJSON)),
        'operation': json['operation'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function AuditEntryBeanToJSON(value?: AuditEntryBean | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'application': value['application'],
        'date': ((value['date']).toISOString()),
        'ipAddress': value['ipAddress'],
        'objectType': value['objectType'],
        'objects': value['objects'] == null ? undefined : ((value['objects'] as Array<any>).map(AuditEntryObjectBeanToJSON)),
        'operation': value['operation'],
        'username': value['username'],
    };
}

