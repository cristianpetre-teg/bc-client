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
import type { Criterium } from './Criterium.js';
import {
    CriteriumFromJSON,
    CriteriumFromJSONTyped,
    CriteriumToJSON,
} from './Criterium.js';
import type { Event } from './Event.js';
import {
    EventFromJSON,
    EventFromJSONTyped,
    EventToJSON,
} from './Event.js';
import type { ProfileProperty } from './ProfileProperty.js';
import {
    ProfilePropertyFromJSON,
    ProfilePropertyFromJSONTyped,
    ProfilePropertyToJSON,
} from './ProfileProperty.js';
import type { Restriction } from './Restriction.js';
import {
    RestrictionFromJSON,
    RestrictionFromJSONTyped,
    RestrictionToJSON,
} from './Restriction.js';

/**
 * 
 * @export
 * @interface BulkInputEntryV2
 */
export interface BulkInputEntryV2 {
    /**
     * Specifies the domain group in which a profile is created. Used for matching and creating profiles.
     * @type {string}
     * @memberof BulkInputEntryV2
     */
    domainGroup?: string;
    /**
     * An (external) identifier which can be passed along with an operation and is returned in the response.
     * @type {string}
     * @memberof BulkInputEntryV2
     */
    identifier?: string;
    /**
     * The profile properties to match (only use "Unique Identifier" properties). This is an array of arrays; the items in the outer array have an "OR" relation, the items in the inner array have an "AND" relation.
     * @type {Array<Array<Criterium>>}
     * @memberof BulkInputEntryV2
     */
    matching?: Array<Array<Criterium>>;
    /**
     * Specifies the permission level when creating a profile. Not used for matching.
     * @type {string}
     * @memberof BulkInputEntryV2
     */
    permissionLevel?: BulkInputEntryV2PermissionLevelEnum;
    /**
     * Specifies the privacy legislation when creating a profile. Not used for matching.
     * @type {string}
     * @memberof BulkInputEntryV2
     */
    privacyLegislation?: BulkInputEntryV2PrivacyLegislationEnum;
    /**
     * The BlueConic profile ID to search for. When specified, it overrides possible matching criteria.
     * @type {string}
     * @memberof BulkInputEntryV2
     */
    profileId?: string;
    /**
     * The rules that will be executed on this profile.</br>The following properties have a special meaning:</br> `privacy_legislation`: the value passed in this property should be one of the [privacy legislation zone values](https://support.blueconic.com/hc/en-us/articles/202528082-BlueConic-REST-API#privacy_legislation), and is used to determine if a profile should be matched against the passed `objectiveIds` in the querystring. </br>`consented_objectives`: the value(s) passed in this property are used to match against the passed `objectiveIds` in the querystring. At least one must match in order for the profile to be created/updated, otherwise `CONSENT_MISMATCH` is returned. </br>`refused_objectives`: the value(s) passed in this property are used to set the explicitly refused objectives.
     * @type {Array<ProfileProperty>}
     * @memberof BulkInputEntryV2
     */
    properties?: Array<ProfileProperty>;
    /**
     * 
     * @type {Restriction}
     * @memberof BulkInputEntryV2
     */
    restriction?: Restriction;
    /**
     * The strategy to apply to the given entry. Can be used to create, update or delete profiles.
     * @type {string}
     * @memberof BulkInputEntryV2
     */
    strategy?: BulkInputEntryV2StrategyEnum;
    /**
     * The timeline event entries that will be applied to the timeline for this profile.
     * @type {Array<Event>}
     * @memberof BulkInputEntryV2
     */
    timeline?: Array<Event>;
}


/**
 * @export
 */
export const BulkInputEntryV2PermissionLevelEnum = {
    DoNotTrack: 'DO_NOT_TRACK',
    Anonymous: 'ANONYMOUS',
    Personal: 'PERSONAL'
} as const;
export type BulkInputEntryV2PermissionLevelEnum = typeof BulkInputEntryV2PermissionLevelEnum[keyof typeof BulkInputEntryV2PermissionLevelEnum];

/**
 * @export
 */
export const BulkInputEntryV2PrivacyLegislationEnum = {
    None: 'NONE',
    Gdpr: 'GDPR',
    Pipeda: 'PIPEDA',
    Ccpa: 'CCPA',
    Sb220: 'SB220',
    Nypa: 'NYPA',
    PeruDpl: 'PERU_DPL',
    ArgentinaDpl: 'ARGENTINA_DPL',
    Sb1392: 'SB1392',
    Sb190: 'SB190',
    BrazilLgpd: 'BRAZIL_LGPD',
    IsraelPpl: 'ISRAEL_PPL',
    JapanAppi: 'JAPAN_APPI',
    NewZealandPrivacyAct: 'NEW_ZEALAND_PRIVACY_ACT',
    SwitzerlandDpa: 'SWITZERLAND_DPA',
    UkGdpr: 'UK_GDPR',
    ChinaPipl: 'CHINA_PIPL',
    AustraliaPrivacyAct: 'AUSTRALIA_PRIVACY_ACT',
    CdpaCtcpda: 'CDPA_CTCPDA',
    MexicoLfpdppp: 'MEXICO_LFPDPPP',
    Ucpa: 'UCPA',
    Tdpsa: 'TDPSA',
    Mtcdpa: 'MTCDPA',
    Fdbr: 'FDBR',
    Ocpa: 'OCPA'
} as const;
export type BulkInputEntryV2PrivacyLegislationEnum = typeof BulkInputEntryV2PrivacyLegislationEnum[keyof typeof BulkInputEntryV2PrivacyLegislationEnum];

/**
 * @export
 */
export const BulkInputEntryV2StrategyEnum = {
    Upsert: 'UPSERT',
    Update: 'UPDATE',
    Delete: 'DELETE'
} as const;
export type BulkInputEntryV2StrategyEnum = typeof BulkInputEntryV2StrategyEnum[keyof typeof BulkInputEntryV2StrategyEnum];


/**
 * Check if a given object implements the BulkInputEntryV2 interface.
 */
export function instanceOfBulkInputEntryV2(value: object): boolean {
    return true;
}

export function BulkInputEntryV2FromJSON(json: any): BulkInputEntryV2 {
    return BulkInputEntryV2FromJSONTyped(json, false);
}

export function BulkInputEntryV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkInputEntryV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'domainGroup': json['domainGroup'] == null ? undefined : json['domainGroup'],
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'matching': json['matching'] == null ? undefined : json['matching'],
        'permissionLevel': json['permissionLevel'] == null ? undefined : json['permissionLevel'],
        'privacyLegislation': json['privacyLegislation'] == null ? undefined : json['privacyLegislation'],
        'profileId': json['profileId'] == null ? undefined : json['profileId'],
        'properties': json['properties'] == null ? undefined : ((json['properties'] as Array<any>).map(ProfilePropertyFromJSON)),
        'restriction': json['restriction'] == null ? undefined : RestrictionFromJSON(json['restriction']),
        'strategy': json['strategy'] == null ? undefined : json['strategy'],
        'timeline': json['timeline'] == null ? undefined : ((json['timeline'] as Array<any>).map(EventFromJSON)),
    };
}

export function BulkInputEntryV2ToJSON(value?: BulkInputEntryV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'domainGroup': value['domainGroup'],
        'identifier': value['identifier'],
        'matching': value['matching'],
        'permissionLevel': value['permissionLevel'],
        'privacyLegislation': value['privacyLegislation'],
        'profileId': value['profileId'],
        'properties': value['properties'] == null ? undefined : ((value['properties'] as Array<any>).map(ProfilePropertyToJSON)),
        'restriction': RestrictionToJSON(value['restriction']),
        'strategy': value['strategy'],
        'timeline': value['timeline'] == null ? undefined : ((value['timeline'] as Array<any>).map(EventToJSON)),
    };
}

