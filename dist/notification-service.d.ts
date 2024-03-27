import { MessageActionSubtype } from "@kant2002-diia-inhouse/types";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
export interface NotificationMessage {
    icon: string;
    title: string;
    shortText: string;
    action: MessageAction | undefined;
}
export interface Notification {
    notificationId: string;
    creationDate: string;
    isRead: boolean;
    message: NotificationMessage | undefined;
}
export interface NotificationCampaignId {
    campaignId: string;
}
export interface NotificationCampaignOperationResult {
    success: boolean;
}
export interface PageRequest {
    skip: number;
    limit: number;
}
export interface SendPushNotificationCampaignMessageRequest {
    campaignId: string;
    messageId: string;
}
export interface CreatePushNotificationCampaignRequest {
    name: string;
    channel: string;
    topicsBatch?: number | undefined;
    sendInterval?: number | undefined;
    appVersions?: NotificationCampaignAppVersions | undefined;
    target?: NotificationCampaignTarget | undefined;
    subscribeOnCreate?: boolean | undefined;
}
export interface GetPushNotificationCampaignResponse {
    name: string;
    channel: string;
    topicsBatch?: number | undefined;
    sendInterval?: number | undefined;
    appVersions?: NotificationCampaignAppVersions | undefined;
    target?: NotificationCampaignTarget | undefined;
    campaignId: string;
    topics: {
        [key: string]: number;
    };
}
export interface GetPushNotificationCampaignResponseTopicsEntry {
    key: string;
    value: number;
}
export interface CampaignsResponse {
    campaigns: GetPushNotificationCampaignResponse[];
    total: number;
}
export interface NotificationCampaignAppVersions {
    Android?: NotificationCampaignAppVersionsNotificationCampaignAppVersionRule | undefined;
    Huawei?: NotificationCampaignAppVersionsNotificationCampaignAppVersionRule | undefined;
    iOS?: NotificationCampaignAppVersionsNotificationCampaignAppVersionRule | undefined;
}
export interface NotificationCampaignAppVersionsNotificationCampaignAppVersionRule {
    minVersion?: string | undefined;
    maxVersion?: string | undefined;
    versions: string[];
}
export interface NotificationCampaignTarget {
    gender?: NotificationCampaignTargetGender | undefined;
    childrenAmount?: number | undefined;
    age?: NotificationCampaignTargetNotificationCampaignAgeRange | undefined;
    address?: NotificationCampaignTargetNotificationCampaignAddress | undefined;
    documents: string[];
    organizationId?: string | undefined;
}
export declare enum NotificationCampaignTargetGender {
    male = "male",
    female = "female"
}
export declare function notificationCampaignTargetGenderFromJSON(object: any): NotificationCampaignTargetGender;
export declare function notificationCampaignTargetGenderToJSON(object: NotificationCampaignTargetGender): string;
export declare function notificationCampaignTargetGenderToNumber(object: NotificationCampaignTargetGender): number;
export interface NotificationCampaignTargetNotificationCampaignAgeRange {
    from?: number | undefined;
    to?: number | undefined;
}
export interface NotificationCampaignTargetNotificationCampaignAddress {
    regionId: string;
    atuId?: string | undefined;
}
export interface JoinUsersToPushNotificationCampaignRequest {
    campaignId: string;
    userIdentifiers: string[];
}
export interface CreateMessageRequest {
    templateId?: string | undefined;
    templateCode?: string | undefined;
    title: string;
    header?: string | undefined;
    shortText: string;
    fullText: string;
    icon: string;
    resourceId: string;
}
export interface CreateMessageResponse {
    messageId: string;
}
export interface CreateNotificationsAndSendPushesRequest {
    userIdentifiers: string[];
    itns: string[];
    messageId: string;
}
export interface MessageAction {
    type: string;
    subtype?: MessageActionSubtype | undefined;
    resourceId?: string | undefined;
}
export interface CreateNotificationWithPushesRequest {
    userIdentifier?: string | undefined;
    itn?: string | undefined;
    templateCode: string;
    resourceId?: string | undefined;
    excludedMobileUids: string[];
    templateParams: {
        [key: string]: string;
    };
    appVersions?: NotificationCampaignAppVersions | undefined;
    action?: MessageAction | undefined;
}
export interface CreateNotificationWithPushesRequestTemplateParamsEntry {
    key: string;
    value: string;
}
export interface CreateNotificationWithPushesByMobileUidRequest {
    templateCode: string;
    userIdentifier: string;
    mobileUid: string;
    resourceId?: string | undefined;
    templateParams: {
        [key: string]: string;
    };
}
export interface CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry {
    key: string;
    value: string;
}
export interface CreateNotificationWithPushesResponse {
    notificationId?: string | undefined;
}
export interface CreateNotificationWithPushesByMobileUidResponse {
    notificationId?: string | undefined;
}
export interface GetNotificationsReq {
    skip?: number | undefined;
    limit?: number | undefined;
    isRead?: boolean | undefined;
}
export interface GetNotificationsRes {
    total: number;
    unread: number;
    notifications: Notification[];
}
export interface GetNotificationsListReq {
    userIdentifier: string;
    mobileUid?: string | undefined;
    skip?: number | undefined;
    limit?: number | undefined;
    isRead?: boolean | undefined;
}
export interface GetNotificationsListRes {
    notifications: Notification[];
}
export declare const NotificationMessage: {
    encode(message: NotificationMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationMessage;
    fromJSON(object: any): NotificationMessage;
    toJSON(message: NotificationMessage): unknown;
    create(base?: DeepPartial<NotificationMessage>): NotificationMessage;
    fromPartial(object: DeepPartial<NotificationMessage>): NotificationMessage;
};
export declare const Notification: {
    encode(message: Notification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Notification;
    fromJSON(object: any): Notification;
    toJSON(message: Notification): unknown;
    create(base?: DeepPartial<Notification>): Notification;
    fromPartial(object: DeepPartial<Notification>): Notification;
};
export declare const NotificationCampaignId: {
    encode(message: NotificationCampaignId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignId;
    fromJSON(object: any): NotificationCampaignId;
    toJSON(message: NotificationCampaignId): unknown;
    create(base?: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
    fromPartial(object: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
};
export declare const NotificationCampaignOperationResult: {
    encode(message: NotificationCampaignOperationResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignOperationResult;
    fromJSON(object: any): NotificationCampaignOperationResult;
    toJSON(message: NotificationCampaignOperationResult): unknown;
    create(base?: DeepPartial<NotificationCampaignOperationResult>): NotificationCampaignOperationResult;
    fromPartial(object: DeepPartial<NotificationCampaignOperationResult>): NotificationCampaignOperationResult;
};
export declare const PageRequest: {
    encode(message: PageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest;
    fromJSON(object: any): PageRequest;
    toJSON(message: PageRequest): unknown;
    create(base?: DeepPartial<PageRequest>): PageRequest;
    fromPartial(object: DeepPartial<PageRequest>): PageRequest;
};
export declare const SendPushNotificationCampaignMessageRequest: {
    encode(message: SendPushNotificationCampaignMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendPushNotificationCampaignMessageRequest;
    fromJSON(object: any): SendPushNotificationCampaignMessageRequest;
    toJSON(message: SendPushNotificationCampaignMessageRequest): unknown;
    create(base?: DeepPartial<SendPushNotificationCampaignMessageRequest>): SendPushNotificationCampaignMessageRequest;
    fromPartial(object: DeepPartial<SendPushNotificationCampaignMessageRequest>): SendPushNotificationCampaignMessageRequest;
};
export declare const CreatePushNotificationCampaignRequest: {
    encode(message: CreatePushNotificationCampaignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePushNotificationCampaignRequest;
    fromJSON(object: any): CreatePushNotificationCampaignRequest;
    toJSON(message: CreatePushNotificationCampaignRequest): unknown;
    create(base?: DeepPartial<CreatePushNotificationCampaignRequest>): CreatePushNotificationCampaignRequest;
    fromPartial(object: DeepPartial<CreatePushNotificationCampaignRequest>): CreatePushNotificationCampaignRequest;
};
export declare const GetPushNotificationCampaignResponse: {
    encode(message: GetPushNotificationCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPushNotificationCampaignResponse;
    fromJSON(object: any): GetPushNotificationCampaignResponse;
    toJSON(message: GetPushNotificationCampaignResponse): unknown;
    create(base?: DeepPartial<GetPushNotificationCampaignResponse>): GetPushNotificationCampaignResponse;
    fromPartial(object: DeepPartial<GetPushNotificationCampaignResponse>): GetPushNotificationCampaignResponse;
};
export declare const GetPushNotificationCampaignResponseTopicsEntry: {
    encode(message: GetPushNotificationCampaignResponseTopicsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPushNotificationCampaignResponseTopicsEntry;
    fromJSON(object: any): GetPushNotificationCampaignResponseTopicsEntry;
    toJSON(message: GetPushNotificationCampaignResponseTopicsEntry): unknown;
    create(base?: DeepPartial<GetPushNotificationCampaignResponseTopicsEntry>): GetPushNotificationCampaignResponseTopicsEntry;
    fromPartial(object: DeepPartial<GetPushNotificationCampaignResponseTopicsEntry>): GetPushNotificationCampaignResponseTopicsEntry;
};
export declare const CampaignsResponse: {
    encode(message: CampaignsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CampaignsResponse;
    fromJSON(object: any): CampaignsResponse;
    toJSON(message: CampaignsResponse): unknown;
    create(base?: DeepPartial<CampaignsResponse>): CampaignsResponse;
    fromPartial(object: DeepPartial<CampaignsResponse>): CampaignsResponse;
};
export declare const NotificationCampaignAppVersions: {
    encode(message: NotificationCampaignAppVersions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignAppVersions;
    fromJSON(object: any): NotificationCampaignAppVersions;
    toJSON(message: NotificationCampaignAppVersions): unknown;
    create(base?: DeepPartial<NotificationCampaignAppVersions>): NotificationCampaignAppVersions;
    fromPartial(object: DeepPartial<NotificationCampaignAppVersions>): NotificationCampaignAppVersions;
};
export declare const NotificationCampaignAppVersionsNotificationCampaignAppVersionRule: {
    encode(message: NotificationCampaignAppVersionsNotificationCampaignAppVersionRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignAppVersionsNotificationCampaignAppVersionRule;
    fromJSON(object: any): NotificationCampaignAppVersionsNotificationCampaignAppVersionRule;
    toJSON(message: NotificationCampaignAppVersionsNotificationCampaignAppVersionRule): unknown;
    create(base?: DeepPartial<NotificationCampaignAppVersionsNotificationCampaignAppVersionRule>): NotificationCampaignAppVersionsNotificationCampaignAppVersionRule;
    fromPartial(object: DeepPartial<NotificationCampaignAppVersionsNotificationCampaignAppVersionRule>): NotificationCampaignAppVersionsNotificationCampaignAppVersionRule;
};
export declare const NotificationCampaignTarget: {
    encode(message: NotificationCampaignTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignTarget;
    fromJSON(object: any): NotificationCampaignTarget;
    toJSON(message: NotificationCampaignTarget): unknown;
    create(base?: DeepPartial<NotificationCampaignTarget>): NotificationCampaignTarget;
    fromPartial(object: DeepPartial<NotificationCampaignTarget>): NotificationCampaignTarget;
};
export declare const NotificationCampaignTargetNotificationCampaignAgeRange: {
    encode(message: NotificationCampaignTargetNotificationCampaignAgeRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignTargetNotificationCampaignAgeRange;
    fromJSON(object: any): NotificationCampaignTargetNotificationCampaignAgeRange;
    toJSON(message: NotificationCampaignTargetNotificationCampaignAgeRange): unknown;
    create(base?: DeepPartial<NotificationCampaignTargetNotificationCampaignAgeRange>): NotificationCampaignTargetNotificationCampaignAgeRange;
    fromPartial(object: DeepPartial<NotificationCampaignTargetNotificationCampaignAgeRange>): NotificationCampaignTargetNotificationCampaignAgeRange;
};
export declare const NotificationCampaignTargetNotificationCampaignAddress: {
    encode(message: NotificationCampaignTargetNotificationCampaignAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignTargetNotificationCampaignAddress;
    fromJSON(object: any): NotificationCampaignTargetNotificationCampaignAddress;
    toJSON(message: NotificationCampaignTargetNotificationCampaignAddress): unknown;
    create(base?: DeepPartial<NotificationCampaignTargetNotificationCampaignAddress>): NotificationCampaignTargetNotificationCampaignAddress;
    fromPartial(object: DeepPartial<NotificationCampaignTargetNotificationCampaignAddress>): NotificationCampaignTargetNotificationCampaignAddress;
};
export declare const JoinUsersToPushNotificationCampaignRequest: {
    encode(message: JoinUsersToPushNotificationCampaignRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JoinUsersToPushNotificationCampaignRequest;
    fromJSON(object: any): JoinUsersToPushNotificationCampaignRequest;
    toJSON(message: JoinUsersToPushNotificationCampaignRequest): unknown;
    create(base?: DeepPartial<JoinUsersToPushNotificationCampaignRequest>): JoinUsersToPushNotificationCampaignRequest;
    fromPartial(object: DeepPartial<JoinUsersToPushNotificationCampaignRequest>): JoinUsersToPushNotificationCampaignRequest;
};
export declare const CreateMessageRequest: {
    encode(message: CreateMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageRequest;
    fromJSON(object: any): CreateMessageRequest;
    toJSON(message: CreateMessageRequest): unknown;
    create(base?: DeepPartial<CreateMessageRequest>): CreateMessageRequest;
    fromPartial(object: DeepPartial<CreateMessageRequest>): CreateMessageRequest;
};
export declare const CreateMessageResponse: {
    encode(message: CreateMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageResponse;
    fromJSON(object: any): CreateMessageResponse;
    toJSON(message: CreateMessageResponse): unknown;
    create(base?: DeepPartial<CreateMessageResponse>): CreateMessageResponse;
    fromPartial(object: DeepPartial<CreateMessageResponse>): CreateMessageResponse;
};
export declare const CreateNotificationsAndSendPushesRequest: {
    encode(message: CreateNotificationsAndSendPushesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationsAndSendPushesRequest;
    fromJSON(object: any): CreateNotificationsAndSendPushesRequest;
    toJSON(message: CreateNotificationsAndSendPushesRequest): unknown;
    create(base?: DeepPartial<CreateNotificationsAndSendPushesRequest>): CreateNotificationsAndSendPushesRequest;
    fromPartial(object: DeepPartial<CreateNotificationsAndSendPushesRequest>): CreateNotificationsAndSendPushesRequest;
};
export declare const MessageAction: {
    encode(message: MessageAction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageAction;
    fromJSON(object: any): MessageAction;
    toJSON(message: MessageAction): unknown;
    create(base?: DeepPartial<MessageAction>): MessageAction;
    fromPartial(object: DeepPartial<MessageAction>): MessageAction;
};
export declare const CreateNotificationWithPushesRequest: {
    encode(message: CreateNotificationWithPushesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesRequest;
    fromJSON(object: any): CreateNotificationWithPushesRequest;
    toJSON(message: CreateNotificationWithPushesRequest): unknown;
    create(base?: DeepPartial<CreateNotificationWithPushesRequest>): CreateNotificationWithPushesRequest;
    fromPartial(object: DeepPartial<CreateNotificationWithPushesRequest>): CreateNotificationWithPushesRequest;
};
export declare const CreateNotificationWithPushesRequestTemplateParamsEntry: {
    encode(message: CreateNotificationWithPushesRequestTemplateParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesRequestTemplateParamsEntry;
    fromJSON(object: any): CreateNotificationWithPushesRequestTemplateParamsEntry;
    toJSON(message: CreateNotificationWithPushesRequestTemplateParamsEntry): unknown;
    create(base?: DeepPartial<CreateNotificationWithPushesRequestTemplateParamsEntry>): CreateNotificationWithPushesRequestTemplateParamsEntry;
    fromPartial(object: DeepPartial<CreateNotificationWithPushesRequestTemplateParamsEntry>): CreateNotificationWithPushesRequestTemplateParamsEntry;
};
export declare const CreateNotificationWithPushesByMobileUidRequest: {
    encode(message: CreateNotificationWithPushesByMobileUidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesByMobileUidRequest;
    fromJSON(object: any): CreateNotificationWithPushesByMobileUidRequest;
    toJSON(message: CreateNotificationWithPushesByMobileUidRequest): unknown;
    create(base?: DeepPartial<CreateNotificationWithPushesByMobileUidRequest>): CreateNotificationWithPushesByMobileUidRequest;
    fromPartial(object: DeepPartial<CreateNotificationWithPushesByMobileUidRequest>): CreateNotificationWithPushesByMobileUidRequest;
};
export declare const CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry: {
    encode(message: CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry;
    fromJSON(object: any): CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry;
    toJSON(message: CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry): unknown;
    create(base?: DeepPartial<CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry>): CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry;
    fromPartial(object: DeepPartial<CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry>): CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry;
};
export declare const CreateNotificationWithPushesResponse: {
    encode(message: CreateNotificationWithPushesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesResponse;
    fromJSON(object: any): CreateNotificationWithPushesResponse;
    toJSON(message: CreateNotificationWithPushesResponse): unknown;
    create(base?: DeepPartial<CreateNotificationWithPushesResponse>): CreateNotificationWithPushesResponse;
    fromPartial(object: DeepPartial<CreateNotificationWithPushesResponse>): CreateNotificationWithPushesResponse;
};
export declare const CreateNotificationWithPushesByMobileUidResponse: {
    encode(message: CreateNotificationWithPushesByMobileUidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesByMobileUidResponse;
    fromJSON(object: any): CreateNotificationWithPushesByMobileUidResponse;
    toJSON(message: CreateNotificationWithPushesByMobileUidResponse): unknown;
    create(base?: DeepPartial<CreateNotificationWithPushesByMobileUidResponse>): CreateNotificationWithPushesByMobileUidResponse;
    fromPartial(object: DeepPartial<CreateNotificationWithPushesByMobileUidResponse>): CreateNotificationWithPushesByMobileUidResponse;
};
export declare const GetNotificationsReq: {
    encode(message: GetNotificationsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsReq;
    fromJSON(object: any): GetNotificationsReq;
    toJSON(message: GetNotificationsReq): unknown;
    create(base?: DeepPartial<GetNotificationsReq>): GetNotificationsReq;
    fromPartial(object: DeepPartial<GetNotificationsReq>): GetNotificationsReq;
};
export declare const GetNotificationsRes: {
    encode(message: GetNotificationsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsRes;
    fromJSON(object: any): GetNotificationsRes;
    toJSON(message: GetNotificationsRes): unknown;
    create(base?: DeepPartial<GetNotificationsRes>): GetNotificationsRes;
    fromPartial(object: DeepPartial<GetNotificationsRes>): GetNotificationsRes;
};
export declare const GetNotificationsListReq: {
    encode(message: GetNotificationsListReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsListReq;
    fromJSON(object: any): GetNotificationsListReq;
    toJSON(message: GetNotificationsListReq): unknown;
    create(base?: DeepPartial<GetNotificationsListReq>): GetNotificationsListReq;
    fromPartial(object: DeepPartial<GetNotificationsListReq>): GetNotificationsListReq;
};
export declare const GetNotificationsListRes: {
    encode(message: GetNotificationsListRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsListRes;
    fromJSON(object: any): GetNotificationsListRes;
    toJSON(message: GetNotificationsListRes): unknown;
    create(base?: DeepPartial<GetNotificationsListRes>): GetNotificationsListRes;
    fromPartial(object: DeepPartial<GetNotificationsListRes>): GetNotificationsListRes;
};
export type NotificationServiceDefinition = typeof NotificationServiceDefinition;
export declare const NotificationServiceDefinition: {
    readonly name: "NotificationService";
    readonly fullName: "NotificationService";
    readonly methods: {
        readonly createMessage: {
            readonly name: "CreateMessage";
            readonly requestType: {
                encode(message: CreateMessageRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageRequest;
                fromJSON(object: any): CreateMessageRequest;
                toJSON(message: CreateMessageRequest): unknown;
                create(base?: DeepPartial<CreateMessageRequest>): CreateMessageRequest;
                fromPartial(object: DeepPartial<CreateMessageRequest>): CreateMessageRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateMessageResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageResponse;
                fromJSON(object: any): CreateMessageResponse;
                toJSON(message: CreateMessageResponse): unknown;
                create(base?: DeepPartial<CreateMessageResponse>): CreateMessageResponse;
                fromPartial(object: DeepPartial<CreateMessageResponse>): CreateMessageResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly createNotificationsAndSendPushes: {
            readonly name: "CreateNotificationsAndSendPushes";
            readonly requestType: {
                encode(message: CreateNotificationsAndSendPushesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationsAndSendPushesRequest;
                fromJSON(object: any): CreateNotificationsAndSendPushesRequest;
                toJSON(message: CreateNotificationsAndSendPushesRequest): unknown;
                create(base?: DeepPartial<CreateNotificationsAndSendPushesRequest>): CreateNotificationsAndSendPushesRequest;
                fromPartial(object: DeepPartial<CreateNotificationsAndSendPushesRequest>): CreateNotificationsAndSendPushesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly createNotificationWithPushes: {
            readonly name: "CreateNotificationWithPushes";
            readonly requestType: {
                encode(message: CreateNotificationWithPushesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesRequest;
                fromJSON(object: any): CreateNotificationWithPushesRequest;
                toJSON(message: CreateNotificationWithPushesRequest): unknown;
                create(base?: DeepPartial<CreateNotificationWithPushesRequest>): CreateNotificationWithPushesRequest;
                fromPartial(object: DeepPartial<CreateNotificationWithPushesRequest>): CreateNotificationWithPushesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateNotificationWithPushesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesResponse;
                fromJSON(object: any): CreateNotificationWithPushesResponse;
                toJSON(message: CreateNotificationWithPushesResponse): unknown;
                create(base?: DeepPartial<CreateNotificationWithPushesResponse>): CreateNotificationWithPushesResponse;
                fromPartial(object: DeepPartial<CreateNotificationWithPushesResponse>): CreateNotificationWithPushesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly createNotificationWithPushesByMobileUid: {
            readonly name: "CreateNotificationWithPushesByMobileUid";
            readonly requestType: {
                encode(message: CreateNotificationWithPushesByMobileUidRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesByMobileUidRequest;
                fromJSON(object: any): CreateNotificationWithPushesByMobileUidRequest;
                toJSON(message: CreateNotificationWithPushesByMobileUidRequest): unknown;
                create(base?: DeepPartial<CreateNotificationWithPushesByMobileUidRequest>): CreateNotificationWithPushesByMobileUidRequest;
                fromPartial(object: DeepPartial<CreateNotificationWithPushesByMobileUidRequest>): CreateNotificationWithPushesByMobileUidRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CreateNotificationWithPushesByMobileUidResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreateNotificationWithPushesByMobileUidResponse;
                fromJSON(object: any): CreateNotificationWithPushesByMobileUidResponse;
                toJSON(message: CreateNotificationWithPushesByMobileUidResponse): unknown;
                create(base?: DeepPartial<CreateNotificationWithPushesByMobileUidResponse>): CreateNotificationWithPushesByMobileUidResponse;
                fromPartial(object: DeepPartial<CreateNotificationWithPushesByMobileUidResponse>): CreateNotificationWithPushesByMobileUidResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNotificationsList: {
            readonly name: "GetNotificationsList";
            readonly requestType: {
                encode(message: GetNotificationsListReq, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsListReq;
                fromJSON(object: any): GetNotificationsListReq;
                toJSON(message: GetNotificationsListReq): unknown;
                create(base?: DeepPartial<GetNotificationsListReq>): GetNotificationsListReq;
                fromPartial(object: DeepPartial<GetNotificationsListReq>): GetNotificationsListReq;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotificationsListRes, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsListRes;
                fromJSON(object: any): GetNotificationsListRes;
                toJSON(message: GetNotificationsListRes): unknown;
                create(base?: DeepPartial<GetNotificationsListRes>): GetNotificationsListRes;
                fromPartial(object: DeepPartial<GetNotificationsListRes>): GetNotificationsListRes;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNotifications: {
            readonly name: "GetNotifications";
            readonly requestType: {
                encode(message: GetNotificationsReq, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsReq;
                fromJSON(object: any): GetNotificationsReq;
                toJSON(message: GetNotificationsReq): unknown;
                create(base?: DeepPartial<GetNotificationsReq>): GetNotificationsReq;
                fromPartial(object: DeepPartial<GetNotificationsReq>): GetNotificationsReq;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetNotificationsRes, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetNotificationsRes;
                fromJSON(object: any): GetNotificationsRes;
                toJSON(message: GetNotificationsRes): unknown;
                create(base?: DeepPartial<GetNotificationsRes>): GetNotificationsRes;
                fromPartial(object: DeepPartial<GetNotificationsRes>): GetNotificationsRes;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface NotificationServiceImplementation<CallContextExt = {}> {
    createMessage(request: CreateMessageRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateMessageResponse>>;
    createNotificationsAndSendPushes(request: CreateNotificationsAndSendPushesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    createNotificationWithPushes(request: CreateNotificationWithPushesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateNotificationWithPushesResponse>>;
    createNotificationWithPushesByMobileUid(request: CreateNotificationWithPushesByMobileUidRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateNotificationWithPushesByMobileUidResponse>>;
    getNotificationsList(request: GetNotificationsListReq, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotificationsListRes>>;
    getNotifications(request: GetNotificationsReq, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotificationsRes>>;
}
export interface NotificationServiceClient<CallOptionsExt = {}> {
    createMessage(request: DeepPartial<CreateMessageRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateMessageResponse>;
    createNotificationsAndSendPushes(request: DeepPartial<CreateNotificationsAndSendPushesRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    createNotificationWithPushes(request: DeepPartial<CreateNotificationWithPushesRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateNotificationWithPushesResponse>;
    createNotificationWithPushesByMobileUid(request: DeepPartial<CreateNotificationWithPushesByMobileUidRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateNotificationWithPushesByMobileUidResponse>;
    getNotificationsList(request: DeepPartial<GetNotificationsListReq>, options?: CallOptions & CallOptionsExt): Promise<GetNotificationsListRes>;
    getNotifications(request: DeepPartial<GetNotificationsReq>, options?: CallOptions & CallOptionsExt): Promise<GetNotificationsRes>;
}
export type NotificationCampaignServiceDefinition = typeof NotificationCampaignServiceDefinition;
export declare const NotificationCampaignServiceDefinition: {
    readonly name: "NotificationCampaignService";
    readonly fullName: "NotificationCampaignService";
    readonly methods: {
        readonly getPushNotificationCampaign: {
            readonly name: "GetPushNotificationCampaign";
            readonly requestType: {
                encode(message: NotificationCampaignId, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignId;
                fromJSON(object: any): NotificationCampaignId;
                toJSON(message: NotificationCampaignId): unknown;
                create(base?: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
                fromPartial(object: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPushNotificationCampaignResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPushNotificationCampaignResponse;
                fromJSON(object: any): GetPushNotificationCampaignResponse;
                toJSON(message: GetPushNotificationCampaignResponse): unknown;
                create(base?: DeepPartial<GetPushNotificationCampaignResponse>): GetPushNotificationCampaignResponse;
                fromPartial(object: DeepPartial<GetPushNotificationCampaignResponse>): GetPushNotificationCampaignResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPushNotificationCampaigns: {
            readonly name: "GetPushNotificationCampaigns";
            readonly requestType: {
                encode(message: PageRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest;
                fromJSON(object: any): PageRequest;
                toJSON(message: PageRequest): unknown;
                create(base?: DeepPartial<PageRequest>): PageRequest;
                fromPartial(object: DeepPartial<PageRequest>): PageRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CampaignsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CampaignsResponse;
                fromJSON(object: any): CampaignsResponse;
                toJSON(message: CampaignsResponse): unknown;
                create(base?: DeepPartial<CampaignsResponse>): CampaignsResponse;
                fromPartial(object: DeepPartial<CampaignsResponse>): CampaignsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly createPushNotificationCampaign: {
            readonly name: "CreatePushNotificationCampaign";
            readonly requestType: {
                encode(message: CreatePushNotificationCampaignRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CreatePushNotificationCampaignRequest;
                fromJSON(object: any): CreatePushNotificationCampaignRequest;
                toJSON(message: CreatePushNotificationCampaignRequest): unknown;
                create(base?: DeepPartial<CreatePushNotificationCampaignRequest>): CreatePushNotificationCampaignRequest;
                fromPartial(object: DeepPartial<CreatePushNotificationCampaignRequest>): CreatePushNotificationCampaignRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: NotificationCampaignId, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignId;
                fromJSON(object: any): NotificationCampaignId;
                toJSON(message: NotificationCampaignId): unknown;
                create(base?: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
                fromPartial(object: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly deletePushNotificationCampaign: {
            readonly name: "DeletePushNotificationCampaign";
            readonly requestType: {
                encode(message: NotificationCampaignId, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignId;
                fromJSON(object: any): NotificationCampaignId;
                toJSON(message: NotificationCampaignId): unknown;
                create(base?: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
                fromPartial(object: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: NotificationCampaignOperationResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignOperationResult;
                fromJSON(object: any): NotificationCampaignOperationResult;
                toJSON(message: NotificationCampaignOperationResult): unknown;
                create(base?: DeepPartial<NotificationCampaignOperationResult>): NotificationCampaignOperationResult;
                fromPartial(object: DeepPartial<NotificationCampaignOperationResult>): NotificationCampaignOperationResult;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly resumePushNotificationCampaign: {
            readonly name: "ResumePushNotificationCampaign";
            readonly requestType: {
                encode(message: NotificationCampaignId, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignId;
                fromJSON(object: any): NotificationCampaignId;
                toJSON(message: NotificationCampaignId): unknown;
                create(base?: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
                fromPartial(object: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly stopPushNotificationCampaign: {
            readonly name: "StopPushNotificationCampaign";
            readonly requestType: {
                encode(message: NotificationCampaignId, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): NotificationCampaignId;
                fromJSON(object: any): NotificationCampaignId;
                toJSON(message: NotificationCampaignId): unknown;
                create(base?: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
                fromPartial(object: DeepPartial<NotificationCampaignId>): NotificationCampaignId;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly joinUsersToPushNotificationCampaign: {
            readonly name: "JoinUsersToPushNotificationCampaign";
            readonly requestType: {
                encode(message: JoinUsersToPushNotificationCampaignRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): JoinUsersToPushNotificationCampaignRequest;
                fromJSON(object: any): JoinUsersToPushNotificationCampaignRequest;
                toJSON(message: JoinUsersToPushNotificationCampaignRequest): unknown;
                create(base?: DeepPartial<JoinUsersToPushNotificationCampaignRequest>): JoinUsersToPushNotificationCampaignRequest;
                fromPartial(object: DeepPartial<JoinUsersToPushNotificationCampaignRequest>): JoinUsersToPushNotificationCampaignRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sendPushNotificationCampaignMessage: {
            readonly name: "SendPushNotificationCampaignMessage";
            readonly requestType: {
                encode(message: SendPushNotificationCampaignMessageRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): SendPushNotificationCampaignMessageRequest;
                fromJSON(object: any): SendPushNotificationCampaignMessageRequest;
                toJSON(message: SendPushNotificationCampaignMessageRequest): unknown;
                create(base?: DeepPartial<SendPushNotificationCampaignMessageRequest>): SendPushNotificationCampaignMessageRequest;
                fromPartial(object: DeepPartial<SendPushNotificationCampaignMessageRequest>): SendPushNotificationCampaignMessageRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface NotificationCampaignServiceImplementation<CallContextExt = {}> {
    getPushNotificationCampaign(request: NotificationCampaignId, context: CallContext & CallContextExt): Promise<DeepPartial<GetPushNotificationCampaignResponse>>;
    getPushNotificationCampaigns(request: PageRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CampaignsResponse>>;
    createPushNotificationCampaign(request: CreatePushNotificationCampaignRequest, context: CallContext & CallContextExt): Promise<DeepPartial<NotificationCampaignId>>;
    deletePushNotificationCampaign(request: NotificationCampaignId, context: CallContext & CallContextExt): Promise<DeepPartial<NotificationCampaignOperationResult>>;
    resumePushNotificationCampaign(request: NotificationCampaignId, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    stopPushNotificationCampaign(request: NotificationCampaignId, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    joinUsersToPushNotificationCampaign(request: JoinUsersToPushNotificationCampaignRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    sendPushNotificationCampaignMessage(request: SendPushNotificationCampaignMessageRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}
export interface NotificationCampaignServiceClient<CallOptionsExt = {}> {
    getPushNotificationCampaign(request: DeepPartial<NotificationCampaignId>, options?: CallOptions & CallOptionsExt): Promise<GetPushNotificationCampaignResponse>;
    getPushNotificationCampaigns(request: DeepPartial<PageRequest>, options?: CallOptions & CallOptionsExt): Promise<CampaignsResponse>;
    createPushNotificationCampaign(request: DeepPartial<CreatePushNotificationCampaignRequest>, options?: CallOptions & CallOptionsExt): Promise<NotificationCampaignId>;
    deletePushNotificationCampaign(request: DeepPartial<NotificationCampaignId>, options?: CallOptions & CallOptionsExt): Promise<NotificationCampaignOperationResult>;
    resumePushNotificationCampaign(request: DeepPartial<NotificationCampaignId>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    stopPushNotificationCampaign(request: DeepPartial<NotificationCampaignId>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    joinUsersToPushNotificationCampaign(request: DeepPartial<JoinUsersToPushNotificationCampaignRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    sendPushNotificationCampaignMessage(request: DeepPartial<SendPushNotificationCampaignMessageRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=notification-service.d.ts.map