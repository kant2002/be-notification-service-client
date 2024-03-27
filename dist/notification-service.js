"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCampaignServiceDefinition = exports.NotificationServiceDefinition = exports.GetNotificationsListRes = exports.GetNotificationsListReq = exports.GetNotificationsRes = exports.GetNotificationsReq = exports.CreateNotificationWithPushesByMobileUidResponse = exports.CreateNotificationWithPushesResponse = exports.CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry = exports.CreateNotificationWithPushesByMobileUidRequest = exports.CreateNotificationWithPushesRequestTemplateParamsEntry = exports.CreateNotificationWithPushesRequest = exports.MessageAction = exports.CreateNotificationsAndSendPushesRequest = exports.CreateMessageResponse = exports.CreateMessageRequest = exports.JoinUsersToPushNotificationCampaignRequest = exports.NotificationCampaignTargetNotificationCampaignAddress = exports.NotificationCampaignTargetNotificationCampaignAgeRange = exports.NotificationCampaignTarget = exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule = exports.NotificationCampaignAppVersions = exports.CampaignsResponse = exports.GetPushNotificationCampaignResponseTopicsEntry = exports.GetPushNotificationCampaignResponse = exports.CreatePushNotificationCampaignRequest = exports.SendPushNotificationCampaignMessageRequest = exports.PageRequest = exports.NotificationCampaignOperationResult = exports.NotificationCampaignId = exports.Notification = exports.NotificationMessage = exports.notificationCampaignTargetGenderToNumber = exports.notificationCampaignTargetGenderToJSON = exports.notificationCampaignTargetGenderFromJSON = exports.NotificationCampaignTargetGender = void 0;
/* eslint-disable */
const types_1 = require("@kant2002-diia-inhouse/types");
const _m0 = __importStar(require("protobufjs/minimal"));
const empty_1 = require("./google/protobuf/empty");
var NotificationCampaignTargetGender;
(function (NotificationCampaignTargetGender) {
    NotificationCampaignTargetGender["male"] = "male";
    NotificationCampaignTargetGender["female"] = "female";
})(NotificationCampaignTargetGender || (exports.NotificationCampaignTargetGender = NotificationCampaignTargetGender = {}));
function notificationCampaignTargetGenderFromJSON(object) {
    switch (object) {
        case 0:
        case "male":
            return NotificationCampaignTargetGender.male;
        case 1:
        case "female":
            return NotificationCampaignTargetGender.female;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationCampaignTargetGender");
    }
}
exports.notificationCampaignTargetGenderFromJSON = notificationCampaignTargetGenderFromJSON;
function notificationCampaignTargetGenderToJSON(object) {
    switch (object) {
        case NotificationCampaignTargetGender.male:
            return "male";
        case NotificationCampaignTargetGender.female:
            return "female";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationCampaignTargetGender");
    }
}
exports.notificationCampaignTargetGenderToJSON = notificationCampaignTargetGenderToJSON;
function notificationCampaignTargetGenderToNumber(object) {
    switch (object) {
        case NotificationCampaignTargetGender.male:
            return 0;
        case NotificationCampaignTargetGender.female:
            return 1;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum NotificationCampaignTargetGender");
    }
}
exports.notificationCampaignTargetGenderToNumber = notificationCampaignTargetGenderToNumber;
function createBaseNotificationMessage() {
    return { icon: "", title: "", shortText: "", action: undefined };
}
exports.NotificationMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.icon !== "") {
            writer.uint32(10).string(message.icon);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.shortText !== "") {
            writer.uint32(26).string(message.shortText);
        }
        if (message.action !== undefined) {
            exports.MessageAction.encode(message.action, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.shortText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.action = exports.MessageAction.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            icon: isSet(object.icon) ? globalThis.String(object.icon) : "",
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            shortText: isSet(object.shortText) ? globalThis.String(object.shortText) : "",
            action: isSet(object.action) ? exports.MessageAction.fromJSON(object.action) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.icon !== "") {
            obj.icon = message.icon;
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.shortText !== "") {
            obj.shortText = message.shortText;
        }
        if (message.action !== undefined) {
            obj.action = exports.MessageAction.toJSON(message.action);
        }
        return obj;
    },
    create(base) {
        return exports.NotificationMessage.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationMessage();
        message.icon = object.icon ?? "";
        message.title = object.title ?? "";
        message.shortText = object.shortText ?? "";
        message.action = (object.action !== undefined && object.action !== null)
            ? exports.MessageAction.fromPartial(object.action)
            : undefined;
        return message;
    },
};
function createBaseNotification() {
    return { notificationId: "", creationDate: "", isRead: false, message: undefined };
}
exports.Notification = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.notificationId !== "") {
            writer.uint32(10).string(message.notificationId);
        }
        if (message.creationDate !== "") {
            writer.uint32(18).string(message.creationDate);
        }
        if (message.isRead === true) {
            writer.uint32(24).bool(message.isRead);
        }
        if (message.message !== undefined) {
            exports.NotificationMessage.encode(message.message, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotification();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.notificationId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.creationDate = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isRead = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.message = exports.NotificationMessage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            notificationId: isSet(object.notificationId) ? globalThis.String(object.notificationId) : "",
            creationDate: isSet(object.creationDate) ? globalThis.String(object.creationDate) : "",
            isRead: isSet(object.isRead) ? globalThis.Boolean(object.isRead) : false,
            message: isSet(object.message) ? exports.NotificationMessage.fromJSON(object.message) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.notificationId !== "") {
            obj.notificationId = message.notificationId;
        }
        if (message.creationDate !== "") {
            obj.creationDate = message.creationDate;
        }
        if (message.isRead === true) {
            obj.isRead = message.isRead;
        }
        if (message.message !== undefined) {
            obj.message = exports.NotificationMessage.toJSON(message.message);
        }
        return obj;
    },
    create(base) {
        return exports.Notification.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotification();
        message.notificationId = object.notificationId ?? "";
        message.creationDate = object.creationDate ?? "";
        message.isRead = object.isRead ?? false;
        message.message = (object.message !== undefined && object.message !== null)
            ? exports.NotificationMessage.fromPartial(object.message)
            : undefined;
        return message;
    },
};
function createBaseNotificationCampaignId() {
    return { campaignId: "" };
}
exports.NotificationCampaignId = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.campaignId !== "") {
            writer.uint32(10).string(message.campaignId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationCampaignId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.campaignId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { campaignId: isSet(object.campaignId) ? globalThis.String(object.campaignId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.campaignId !== "") {
            obj.campaignId = message.campaignId;
        }
        return obj;
    },
    create(base) {
        return exports.NotificationCampaignId.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationCampaignId();
        message.campaignId = object.campaignId ?? "";
        return message;
    },
};
function createBaseNotificationCampaignOperationResult() {
    return { success: false };
}
exports.NotificationCampaignOperationResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationCampaignOperationResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.success === true) {
            obj.success = message.success;
        }
        return obj;
    },
    create(base) {
        return exports.NotificationCampaignOperationResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationCampaignOperationResult();
        message.success = object.success ?? false;
        return message;
    },
};
function createBasePageRequest() {
    return { skip: 0, limit: 0 };
}
exports.PageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.skip !== 0) {
            writer.uint32(8).int32(message.skip);
        }
        if (message.limit !== 0) {
            writer.uint32(16).int32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.skip = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.skip !== 0) {
            obj.skip = Math.round(message.skip);
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        return obj;
    },
    create(base) {
        return exports.PageRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.skip = object.skip ?? 0;
        message.limit = object.limit ?? 0;
        return message;
    },
};
function createBaseSendPushNotificationCampaignMessageRequest() {
    return { campaignId: "", messageId: "" };
}
exports.SendPushNotificationCampaignMessageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.campaignId !== "") {
            writer.uint32(10).string(message.campaignId);
        }
        if (message.messageId !== "") {
            writer.uint32(18).string(message.messageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendPushNotificationCampaignMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.campaignId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.messageId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            campaignId: isSet(object.campaignId) ? globalThis.String(object.campaignId) : "",
            messageId: isSet(object.messageId) ? globalThis.String(object.messageId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.campaignId !== "") {
            obj.campaignId = message.campaignId;
        }
        if (message.messageId !== "") {
            obj.messageId = message.messageId;
        }
        return obj;
    },
    create(base) {
        return exports.SendPushNotificationCampaignMessageRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSendPushNotificationCampaignMessageRequest();
        message.campaignId = object.campaignId ?? "";
        message.messageId = object.messageId ?? "";
        return message;
    },
};
function createBaseCreatePushNotificationCampaignRequest() {
    return {
        name: "",
        channel: "",
        topicsBatch: undefined,
        sendInterval: undefined,
        appVersions: undefined,
        target: undefined,
        subscribeOnCreate: undefined,
    };
}
exports.CreatePushNotificationCampaignRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (message.topicsBatch !== undefined) {
            writer.uint32(24).int32(message.topicsBatch);
        }
        if (message.sendInterval !== undefined) {
            writer.uint32(32).int32(message.sendInterval);
        }
        if (message.appVersions !== undefined) {
            exports.NotificationCampaignAppVersions.encode(message.appVersions, writer.uint32(42).fork()).ldelim();
        }
        if (message.target !== undefined) {
            exports.NotificationCampaignTarget.encode(message.target, writer.uint32(50).fork()).ldelim();
        }
        if (message.subscribeOnCreate !== undefined) {
            writer.uint32(56).bool(message.subscribeOnCreate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePushNotificationCampaignRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channel = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.topicsBatch = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sendInterval = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.appVersions = exports.NotificationCampaignAppVersions.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.target = exports.NotificationCampaignTarget.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.subscribeOnCreate = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
            topicsBatch: isSet(object.topicsBatch) ? globalThis.Number(object.topicsBatch) : undefined,
            sendInterval: isSet(object.sendInterval) ? globalThis.Number(object.sendInterval) : undefined,
            appVersions: isSet(object.appVersions) ? exports.NotificationCampaignAppVersions.fromJSON(object.appVersions) : undefined,
            target: isSet(object.target) ? exports.NotificationCampaignTarget.fromJSON(object.target) : undefined,
            subscribeOnCreate: isSet(object.subscribeOnCreate) ? globalThis.Boolean(object.subscribeOnCreate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.channel !== "") {
            obj.channel = message.channel;
        }
        if (message.topicsBatch !== undefined) {
            obj.topicsBatch = Math.round(message.topicsBatch);
        }
        if (message.sendInterval !== undefined) {
            obj.sendInterval = Math.round(message.sendInterval);
        }
        if (message.appVersions !== undefined) {
            obj.appVersions = exports.NotificationCampaignAppVersions.toJSON(message.appVersions);
        }
        if (message.target !== undefined) {
            obj.target = exports.NotificationCampaignTarget.toJSON(message.target);
        }
        if (message.subscribeOnCreate !== undefined) {
            obj.subscribeOnCreate = message.subscribeOnCreate;
        }
        return obj;
    },
    create(base) {
        return exports.CreatePushNotificationCampaignRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreatePushNotificationCampaignRequest();
        message.name = object.name ?? "";
        message.channel = object.channel ?? "";
        message.topicsBatch = object.topicsBatch ?? undefined;
        message.sendInterval = object.sendInterval ?? undefined;
        message.appVersions = (object.appVersions !== undefined && object.appVersions !== null)
            ? exports.NotificationCampaignAppVersions.fromPartial(object.appVersions)
            : undefined;
        message.target = (object.target !== undefined && object.target !== null)
            ? exports.NotificationCampaignTarget.fromPartial(object.target)
            : undefined;
        message.subscribeOnCreate = object.subscribeOnCreate ?? undefined;
        return message;
    },
};
function createBaseGetPushNotificationCampaignResponse() {
    return {
        name: "",
        channel: "",
        topicsBatch: undefined,
        sendInterval: undefined,
        appVersions: undefined,
        target: undefined,
        campaignId: "",
        topics: {},
    };
}
exports.GetPushNotificationCampaignResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (message.topicsBatch !== undefined) {
            writer.uint32(24).int32(message.topicsBatch);
        }
        if (message.sendInterval !== undefined) {
            writer.uint32(32).int32(message.sendInterval);
        }
        if (message.appVersions !== undefined) {
            exports.NotificationCampaignAppVersions.encode(message.appVersions, writer.uint32(42).fork()).ldelim();
        }
        if (message.target !== undefined) {
            exports.NotificationCampaignTarget.encode(message.target, writer.uint32(50).fork()).ldelim();
        }
        if (message.campaignId !== "") {
            writer.uint32(58).string(message.campaignId);
        }
        Object.entries(message.topics).forEach(([key, value]) => {
            exports.GetPushNotificationCampaignResponseTopicsEntry.encode({ key: key, value }, writer.uint32(66).fork())
                .ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPushNotificationCampaignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channel = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.topicsBatch = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sendInterval = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.appVersions = exports.NotificationCampaignAppVersions.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.target = exports.NotificationCampaignTarget.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.campaignId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    const entry8 = exports.GetPushNotificationCampaignResponseTopicsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.topics[entry8.key] = entry8.value;
                    }
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
            topicsBatch: isSet(object.topicsBatch) ? globalThis.Number(object.topicsBatch) : undefined,
            sendInterval: isSet(object.sendInterval) ? globalThis.Number(object.sendInterval) : undefined,
            appVersions: isSet(object.appVersions) ? exports.NotificationCampaignAppVersions.fromJSON(object.appVersions) : undefined,
            target: isSet(object.target) ? exports.NotificationCampaignTarget.fromJSON(object.target) : undefined,
            campaignId: isSet(object.campaignId) ? globalThis.String(object.campaignId) : "",
            topics: isObject(object.topics)
                ? Object.entries(object.topics).reduce((acc, [key, value]) => {
                    acc[key] = Number(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.channel !== "") {
            obj.channel = message.channel;
        }
        if (message.topicsBatch !== undefined) {
            obj.topicsBatch = Math.round(message.topicsBatch);
        }
        if (message.sendInterval !== undefined) {
            obj.sendInterval = Math.round(message.sendInterval);
        }
        if (message.appVersions !== undefined) {
            obj.appVersions = exports.NotificationCampaignAppVersions.toJSON(message.appVersions);
        }
        if (message.target !== undefined) {
            obj.target = exports.NotificationCampaignTarget.toJSON(message.target);
        }
        if (message.campaignId !== "") {
            obj.campaignId = message.campaignId;
        }
        if (message.topics) {
            const entries = Object.entries(message.topics);
            if (entries.length > 0) {
                obj.topics = {};
                entries.forEach(([k, v]) => {
                    obj.topics[k] = Math.round(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.GetPushNotificationCampaignResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPushNotificationCampaignResponse();
        message.name = object.name ?? "";
        message.channel = object.channel ?? "";
        message.topicsBatch = object.topicsBatch ?? undefined;
        message.sendInterval = object.sendInterval ?? undefined;
        message.appVersions = (object.appVersions !== undefined && object.appVersions !== null)
            ? exports.NotificationCampaignAppVersions.fromPartial(object.appVersions)
            : undefined;
        message.target = (object.target !== undefined && object.target !== null)
            ? exports.NotificationCampaignTarget.fromPartial(object.target)
            : undefined;
        message.campaignId = object.campaignId ?? "";
        message.topics = Object.entries(object.topics ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.Number(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseGetPushNotificationCampaignResponseTopicsEntry() {
    return { key: "", value: 0 };
}
exports.GetPushNotificationCampaignResponseTopicsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPushNotificationCampaignResponseTopicsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.value = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? globalThis.Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== 0) {
            obj.value = Math.round(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.GetPushNotificationCampaignResponseTopicsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPushNotificationCampaignResponseTopicsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? 0;
        return message;
    },
};
function createBaseCampaignsResponse() {
    return { campaigns: [], total: 0 };
}
exports.CampaignsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.campaigns) {
            exports.GetPushNotificationCampaignResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.total !== 0) {
            writer.uint32(16).int32(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCampaignsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.campaigns.push(exports.GetPushNotificationCampaignResponse.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.total = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            campaigns: globalThis.Array.isArray(object?.campaigns)
                ? object.campaigns.map((e) => exports.GetPushNotificationCampaignResponse.fromJSON(e))
                : [],
            total: isSet(object.total) ? globalThis.Number(object.total) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.campaigns?.length) {
            obj.campaigns = message.campaigns.map((e) => exports.GetPushNotificationCampaignResponse.toJSON(e));
        }
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        return obj;
    },
    create(base) {
        return exports.CampaignsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCampaignsResponse();
        message.campaigns = object.campaigns?.map((e) => exports.GetPushNotificationCampaignResponse.fromPartial(e)) || [];
        message.total = object.total ?? 0;
        return message;
    },
};
function createBaseNotificationCampaignAppVersions() {
    return { Android: undefined, Huawei: undefined, iOS: undefined };
}
exports.NotificationCampaignAppVersions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Android !== undefined) {
            exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.encode(message.Android, writer.uint32(10).fork()).ldelim();
        }
        if (message.Huawei !== undefined) {
            exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.encode(message.Huawei, writer.uint32(18).fork())
                .ldelim();
        }
        if (message.iOS !== undefined) {
            exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.encode(message.iOS, writer.uint32(26).fork())
                .ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationCampaignAppVersions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Android = exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.Huawei = exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.iOS = exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            Android: isSet(object.Android)
                ? exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.fromJSON(object.Android)
                : undefined,
            Huawei: isSet(object.Huawei)
                ? exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.fromJSON(object.Huawei)
                : undefined,
            iOS: isSet(object.iOS)
                ? exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.fromJSON(object.iOS)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Android !== undefined) {
            obj.Android = exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.toJSON(message.Android);
        }
        if (message.Huawei !== undefined) {
            obj.Huawei = exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.toJSON(message.Huawei);
        }
        if (message.iOS !== undefined) {
            obj.iOS = exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.toJSON(message.iOS);
        }
        return obj;
    },
    create(base) {
        return exports.NotificationCampaignAppVersions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationCampaignAppVersions();
        message.Android = (object.Android !== undefined && object.Android !== null)
            ? exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.fromPartial(object.Android)
            : undefined;
        message.Huawei = (object.Huawei !== undefined && object.Huawei !== null)
            ? exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.fromPartial(object.Huawei)
            : undefined;
        message.iOS = (object.iOS !== undefined && object.iOS !== null)
            ? exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.fromPartial(object.iOS)
            : undefined;
        return message;
    },
};
function createBaseNotificationCampaignAppVersionsNotificationCampaignAppVersionRule() {
    return { minVersion: undefined, maxVersion: undefined, versions: [] };
}
exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.minVersion !== undefined) {
            writer.uint32(10).string(message.minVersion);
        }
        if (message.maxVersion !== undefined) {
            writer.uint32(18).string(message.maxVersion);
        }
        for (const v of message.versions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationCampaignAppVersionsNotificationCampaignAppVersionRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.minVersion = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.maxVersion = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.versions.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            minVersion: isSet(object.minVersion) ? globalThis.String(object.minVersion) : undefined,
            maxVersion: isSet(object.maxVersion) ? globalThis.String(object.maxVersion) : undefined,
            versions: globalThis.Array.isArray(object?.versions) ? object.versions.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.minVersion !== undefined) {
            obj.minVersion = message.minVersion;
        }
        if (message.maxVersion !== undefined) {
            obj.maxVersion = message.maxVersion;
        }
        if (message.versions?.length) {
            obj.versions = message.versions;
        }
        return obj;
    },
    create(base) {
        return exports.NotificationCampaignAppVersionsNotificationCampaignAppVersionRule.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationCampaignAppVersionsNotificationCampaignAppVersionRule();
        message.minVersion = object.minVersion ?? undefined;
        message.maxVersion = object.maxVersion ?? undefined;
        message.versions = object.versions?.map((e) => e) || [];
        return message;
    },
};
function createBaseNotificationCampaignTarget() {
    return {
        gender: undefined,
        childrenAmount: undefined,
        age: undefined,
        address: undefined,
        documents: [],
        organizationId: undefined,
    };
}
exports.NotificationCampaignTarget = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gender !== undefined) {
            writer.uint32(8).int32(notificationCampaignTargetGenderToNumber(message.gender));
        }
        if (message.childrenAmount !== undefined) {
            writer.uint32(16).int32(message.childrenAmount);
        }
        if (message.age !== undefined) {
            exports.NotificationCampaignTargetNotificationCampaignAgeRange.encode(message.age, writer.uint32(26).fork()).ldelim();
        }
        if (message.address !== undefined) {
            exports.NotificationCampaignTargetNotificationCampaignAddress.encode(message.address, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.documents) {
            writer.uint32(42).string(v);
        }
        if (message.organizationId !== undefined) {
            writer.uint32(50).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationCampaignTarget();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.gender = notificationCampaignTargetGenderFromJSON(reader.int32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.childrenAmount = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.age = exports.NotificationCampaignTargetNotificationCampaignAgeRange.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.address = exports.NotificationCampaignTargetNotificationCampaignAddress.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.documents.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.organizationId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            gender: isSet(object.gender) ? notificationCampaignTargetGenderFromJSON(object.gender) : undefined,
            childrenAmount: isSet(object.childrenAmount) ? globalThis.Number(object.childrenAmount) : undefined,
            age: isSet(object.age) ? exports.NotificationCampaignTargetNotificationCampaignAgeRange.fromJSON(object.age) : undefined,
            address: isSet(object.address)
                ? exports.NotificationCampaignTargetNotificationCampaignAddress.fromJSON(object.address)
                : undefined,
            documents: globalThis.Array.isArray(object?.documents)
                ? object.documents.map((e) => globalThis.String(e))
                : [],
            organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.gender !== undefined) {
            obj.gender = notificationCampaignTargetGenderToJSON(message.gender);
        }
        if (message.childrenAmount !== undefined) {
            obj.childrenAmount = Math.round(message.childrenAmount);
        }
        if (message.age !== undefined) {
            obj.age = exports.NotificationCampaignTargetNotificationCampaignAgeRange.toJSON(message.age);
        }
        if (message.address !== undefined) {
            obj.address = exports.NotificationCampaignTargetNotificationCampaignAddress.toJSON(message.address);
        }
        if (message.documents?.length) {
            obj.documents = message.documents;
        }
        if (message.organizationId !== undefined) {
            obj.organizationId = message.organizationId;
        }
        return obj;
    },
    create(base) {
        return exports.NotificationCampaignTarget.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationCampaignTarget();
        message.gender = object.gender ?? undefined;
        message.childrenAmount = object.childrenAmount ?? undefined;
        message.age = (object.age !== undefined && object.age !== null)
            ? exports.NotificationCampaignTargetNotificationCampaignAgeRange.fromPartial(object.age)
            : undefined;
        message.address = (object.address !== undefined && object.address !== null)
            ? exports.NotificationCampaignTargetNotificationCampaignAddress.fromPartial(object.address)
            : undefined;
        message.documents = object.documents?.map((e) => e) || [];
        message.organizationId = object.organizationId ?? undefined;
        return message;
    },
};
function createBaseNotificationCampaignTargetNotificationCampaignAgeRange() {
    return { from: undefined, to: undefined };
}
exports.NotificationCampaignTargetNotificationCampaignAgeRange = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== undefined) {
            writer.uint32(8).int32(message.from);
        }
        if (message.to !== undefined) {
            writer.uint32(16).int32(message.to);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationCampaignTargetNotificationCampaignAgeRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.from = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.to = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            from: isSet(object.from) ? globalThis.Number(object.from) : undefined,
            to: isSet(object.to) ? globalThis.Number(object.to) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.from !== undefined) {
            obj.from = Math.round(message.from);
        }
        if (message.to !== undefined) {
            obj.to = Math.round(message.to);
        }
        return obj;
    },
    create(base) {
        return exports.NotificationCampaignTargetNotificationCampaignAgeRange.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationCampaignTargetNotificationCampaignAgeRange();
        message.from = object.from ?? undefined;
        message.to = object.to ?? undefined;
        return message;
    },
};
function createBaseNotificationCampaignTargetNotificationCampaignAddress() {
    return { regionId: "", atuId: undefined };
}
exports.NotificationCampaignTargetNotificationCampaignAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.regionId !== "") {
            writer.uint32(10).string(message.regionId);
        }
        if (message.atuId !== undefined) {
            writer.uint32(18).string(message.atuId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotificationCampaignTargetNotificationCampaignAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.regionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.atuId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            regionId: isSet(object.regionId) ? globalThis.String(object.regionId) : "",
            atuId: isSet(object.atuId) ? globalThis.String(object.atuId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.regionId !== "") {
            obj.regionId = message.regionId;
        }
        if (message.atuId !== undefined) {
            obj.atuId = message.atuId;
        }
        return obj;
    },
    create(base) {
        return exports.NotificationCampaignTargetNotificationCampaignAddress.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNotificationCampaignTargetNotificationCampaignAddress();
        message.regionId = object.regionId ?? "";
        message.atuId = object.atuId ?? undefined;
        return message;
    },
};
function createBaseJoinUsersToPushNotificationCampaignRequest() {
    return { campaignId: "", userIdentifiers: [] };
}
exports.JoinUsersToPushNotificationCampaignRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.campaignId !== "") {
            writer.uint32(10).string(message.campaignId);
        }
        for (const v of message.userIdentifiers) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinUsersToPushNotificationCampaignRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.campaignId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userIdentifiers.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            campaignId: isSet(object.campaignId) ? globalThis.String(object.campaignId) : "",
            userIdentifiers: globalThis.Array.isArray(object?.userIdentifiers)
                ? object.userIdentifiers.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.campaignId !== "") {
            obj.campaignId = message.campaignId;
        }
        if (message.userIdentifiers?.length) {
            obj.userIdentifiers = message.userIdentifiers;
        }
        return obj;
    },
    create(base) {
        return exports.JoinUsersToPushNotificationCampaignRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseJoinUsersToPushNotificationCampaignRequest();
        message.campaignId = object.campaignId ?? "";
        message.userIdentifiers = object.userIdentifiers?.map((e) => e) || [];
        return message;
    },
};
function createBaseCreateMessageRequest() {
    return {
        templateId: undefined,
        templateCode: undefined,
        title: "",
        header: undefined,
        shortText: "",
        fullText: "",
        icon: "",
        resourceId: "",
    };
}
exports.CreateMessageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.templateId !== undefined) {
            writer.uint32(10).string(message.templateId);
        }
        if (message.templateCode !== undefined) {
            writer.uint32(18).string(message.templateCode);
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.header !== undefined) {
            writer.uint32(34).string(message.header);
        }
        if (message.shortText !== "") {
            writer.uint32(42).string(message.shortText);
        }
        if (message.fullText !== "") {
            writer.uint32(50).string(message.fullText);
        }
        if (message.icon !== "") {
            writer.uint32(58).string(message.icon);
        }
        if (message.resourceId !== "") {
            writer.uint32(66).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.templateId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.templateCode = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.header = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.shortText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.fullText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            templateId: isSet(object.templateId) ? globalThis.String(object.templateId) : undefined,
            templateCode: isSet(object.templateCode) ? globalThis.String(object.templateCode) : undefined,
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            header: isSet(object.header) ? globalThis.String(object.header) : undefined,
            shortText: isSet(object.shortText) ? globalThis.String(object.shortText) : "",
            fullText: isSet(object.fullText) ? globalThis.String(object.fullText) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.templateId !== undefined) {
            obj.templateId = message.templateId;
        }
        if (message.templateCode !== undefined) {
            obj.templateCode = message.templateCode;
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.header !== undefined) {
            obj.header = message.header;
        }
        if (message.shortText !== "") {
            obj.shortText = message.shortText;
        }
        if (message.fullText !== "") {
            obj.fullText = message.fullText;
        }
        if (message.icon !== "") {
            obj.icon = message.icon;
        }
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateMessageRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateMessageRequest();
        message.templateId = object.templateId ?? undefined;
        message.templateCode = object.templateCode ?? undefined;
        message.title = object.title ?? "";
        message.header = object.header ?? undefined;
        message.shortText = object.shortText ?? "";
        message.fullText = object.fullText ?? "";
        message.icon = object.icon ?? "";
        message.resourceId = object.resourceId ?? "";
        return message;
    },
};
function createBaseCreateMessageResponse() {
    return { messageId: "" };
}
exports.CreateMessageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageId !== "") {
            writer.uint32(10).string(message.messageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.messageId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { messageId: isSet(object.messageId) ? globalThis.String(object.messageId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.messageId !== "") {
            obj.messageId = message.messageId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateMessageResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateMessageResponse();
        message.messageId = object.messageId ?? "";
        return message;
    },
};
function createBaseCreateNotificationsAndSendPushesRequest() {
    return { userIdentifiers: [], itns: [], messageId: "" };
}
exports.CreateNotificationsAndSendPushesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.userIdentifiers) {
            writer.uint32(10).string(v);
        }
        for (const v of message.itns) {
            writer.uint32(18).string(v);
        }
        if (message.messageId !== "") {
            writer.uint32(26).string(message.messageId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNotificationsAndSendPushesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifiers.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.itns.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.messageId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userIdentifiers: globalThis.Array.isArray(object?.userIdentifiers)
                ? object.userIdentifiers.map((e) => globalThis.String(e))
                : [],
            itns: globalThis.Array.isArray(object?.itns) ? object.itns.map((e) => globalThis.String(e)) : [],
            messageId: isSet(object.messageId) ? globalThis.String(object.messageId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifiers?.length) {
            obj.userIdentifiers = message.userIdentifiers;
        }
        if (message.itns?.length) {
            obj.itns = message.itns;
        }
        if (message.messageId !== "") {
            obj.messageId = message.messageId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateNotificationsAndSendPushesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateNotificationsAndSendPushesRequest();
        message.userIdentifiers = object.userIdentifiers?.map((e) => e) || [];
        message.itns = object.itns?.map((e) => e) || [];
        message.messageId = object.messageId ?? "";
        return message;
    },
};
function createBaseMessageAction() {
    return { type: "", subtype: undefined, resourceId: undefined };
}
exports.MessageAction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.subtype !== undefined) {
            writer.uint32(16).int32((0, types_1.messageActionSubtypeToNumber)(message.subtype));
        }
        if (message.resourceId !== undefined) {
            writer.uint32(26).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.subtype = (0, types_1.messageActionSubtypeFromJSON)(reader.int32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            subtype: isSet(object.subtype) ? (0, types_1.messageActionSubtypeFromJSON)(object.subtype) : undefined,
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.subtype !== undefined) {
            obj.subtype = (0, types_1.messageActionSubtypeToJSON)(message.subtype);
        }
        if (message.resourceId !== undefined) {
            obj.resourceId = message.resourceId;
        }
        return obj;
    },
    create(base) {
        return exports.MessageAction.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageAction();
        message.type = object.type ?? "";
        message.subtype = object.subtype ?? undefined;
        message.resourceId = object.resourceId ?? undefined;
        return message;
    },
};
function createBaseCreateNotificationWithPushesRequest() {
    return {
        userIdentifier: undefined,
        itn: undefined,
        templateCode: "",
        resourceId: undefined,
        excludedMobileUids: [],
        templateParams: {},
        appVersions: undefined,
        action: undefined,
    };
}
exports.CreateNotificationWithPushesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userIdentifier !== undefined) {
            writer.uint32(10).string(message.userIdentifier);
        }
        if (message.itn !== undefined) {
            writer.uint32(18).string(message.itn);
        }
        if (message.templateCode !== "") {
            writer.uint32(26).string(message.templateCode);
        }
        if (message.resourceId !== undefined) {
            writer.uint32(34).string(message.resourceId);
        }
        for (const v of message.excludedMobileUids) {
            writer.uint32(42).string(v);
        }
        Object.entries(message.templateParams).forEach(([key, value]) => {
            exports.CreateNotificationWithPushesRequestTemplateParamsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.appVersions !== undefined) {
            exports.NotificationCampaignAppVersions.encode(message.appVersions, writer.uint32(58).fork()).ldelim();
        }
        if (message.action !== undefined) {
            exports.MessageAction.encode(message.action, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNotificationWithPushesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.itn = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.templateCode = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.excludedMobileUids.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    const entry6 = exports.CreateNotificationWithPushesRequestTemplateParamsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.templateParams[entry6.key] = entry6.value;
                    }
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.appVersions = exports.NotificationCampaignAppVersions.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.action = exports.MessageAction.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : undefined,
            itn: isSet(object.itn) ? globalThis.String(object.itn) : undefined,
            templateCode: isSet(object.templateCode) ? globalThis.String(object.templateCode) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : undefined,
            excludedMobileUids: globalThis.Array.isArray(object?.excludedMobileUids)
                ? object.excludedMobileUids.map((e) => globalThis.String(e))
                : [],
            templateParams: isObject(object.templateParams)
                ? Object.entries(object.templateParams).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            appVersions: isSet(object.appVersions) ? exports.NotificationCampaignAppVersions.fromJSON(object.appVersions) : undefined,
            action: isSet(object.action) ? exports.MessageAction.fromJSON(object.action) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifier !== undefined) {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.itn !== undefined) {
            obj.itn = message.itn;
        }
        if (message.templateCode !== "") {
            obj.templateCode = message.templateCode;
        }
        if (message.resourceId !== undefined) {
            obj.resourceId = message.resourceId;
        }
        if (message.excludedMobileUids?.length) {
            obj.excludedMobileUids = message.excludedMobileUids;
        }
        if (message.templateParams) {
            const entries = Object.entries(message.templateParams);
            if (entries.length > 0) {
                obj.templateParams = {};
                entries.forEach(([k, v]) => {
                    obj.templateParams[k] = v;
                });
            }
        }
        if (message.appVersions !== undefined) {
            obj.appVersions = exports.NotificationCampaignAppVersions.toJSON(message.appVersions);
        }
        if (message.action !== undefined) {
            obj.action = exports.MessageAction.toJSON(message.action);
        }
        return obj;
    },
    create(base) {
        return exports.CreateNotificationWithPushesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateNotificationWithPushesRequest();
        message.userIdentifier = object.userIdentifier ?? undefined;
        message.itn = object.itn ?? undefined;
        message.templateCode = object.templateCode ?? "";
        message.resourceId = object.resourceId ?? undefined;
        message.excludedMobileUids = object.excludedMobileUids?.map((e) => e) || [];
        message.templateParams = Object.entries(object.templateParams ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.appVersions = (object.appVersions !== undefined && object.appVersions !== null)
            ? exports.NotificationCampaignAppVersions.fromPartial(object.appVersions)
            : undefined;
        message.action = (object.action !== undefined && object.action !== null)
            ? exports.MessageAction.fromPartial(object.action)
            : undefined;
        return message;
    },
};
function createBaseCreateNotificationWithPushesRequestTemplateParamsEntry() {
    return { key: "", value: "" };
}
exports.CreateNotificationWithPushesRequestTemplateParamsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNotificationWithPushesRequestTemplateParamsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.CreateNotificationWithPushesRequestTemplateParamsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateNotificationWithPushesRequestTemplateParamsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseCreateNotificationWithPushesByMobileUidRequest() {
    return { templateCode: "", userIdentifier: "", mobileUid: "", resourceId: undefined, templateParams: {} };
}
exports.CreateNotificationWithPushesByMobileUidRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.templateCode !== "") {
            writer.uint32(10).string(message.templateCode);
        }
        if (message.userIdentifier !== "") {
            writer.uint32(18).string(message.userIdentifier);
        }
        if (message.mobileUid !== "") {
            writer.uint32(26).string(message.mobileUid);
        }
        if (message.resourceId !== undefined) {
            writer.uint32(34).string(message.resourceId);
        }
        Object.entries(message.templateParams).forEach(([key, value]) => {
            exports.CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNotificationWithPushesByMobileUidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.templateCode = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.mobileUid = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    const entry5 = exports.CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.templateParams[entry5.key] = entry5.value;
                    }
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            templateCode: isSet(object.templateCode) ? globalThis.String(object.templateCode) : "",
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            mobileUid: isSet(object.mobileUid) ? globalThis.String(object.mobileUid) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : undefined,
            templateParams: isObject(object.templateParams)
                ? Object.entries(object.templateParams).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.templateCode !== "") {
            obj.templateCode = message.templateCode;
        }
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.mobileUid !== "") {
            obj.mobileUid = message.mobileUid;
        }
        if (message.resourceId !== undefined) {
            obj.resourceId = message.resourceId;
        }
        if (message.templateParams) {
            const entries = Object.entries(message.templateParams);
            if (entries.length > 0) {
                obj.templateParams = {};
                entries.forEach(([k, v]) => {
                    obj.templateParams[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.CreateNotificationWithPushesByMobileUidRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateNotificationWithPushesByMobileUidRequest();
        message.templateCode = object.templateCode ?? "";
        message.userIdentifier = object.userIdentifier ?? "";
        message.mobileUid = object.mobileUid ?? "";
        message.resourceId = object.resourceId ?? undefined;
        message.templateParams = Object.entries(object.templateParams ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseCreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry() {
    return { key: "", value: "" };
}
exports.CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.CreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateNotificationWithPushesByMobileUidRequestTemplateParamsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseCreateNotificationWithPushesResponse() {
    return { notificationId: undefined };
}
exports.CreateNotificationWithPushesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.notificationId !== undefined) {
            writer.uint32(10).string(message.notificationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNotificationWithPushesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.notificationId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { notificationId: isSet(object.notificationId) ? globalThis.String(object.notificationId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.notificationId !== undefined) {
            obj.notificationId = message.notificationId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateNotificationWithPushesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateNotificationWithPushesResponse();
        message.notificationId = object.notificationId ?? undefined;
        return message;
    },
};
function createBaseCreateNotificationWithPushesByMobileUidResponse() {
    return { notificationId: undefined };
}
exports.CreateNotificationWithPushesByMobileUidResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.notificationId !== undefined) {
            writer.uint32(10).string(message.notificationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNotificationWithPushesByMobileUidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.notificationId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { notificationId: isSet(object.notificationId) ? globalThis.String(object.notificationId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.notificationId !== undefined) {
            obj.notificationId = message.notificationId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateNotificationWithPushesByMobileUidResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateNotificationWithPushesByMobileUidResponse();
        message.notificationId = object.notificationId ?? undefined;
        return message;
    },
};
function createBaseGetNotificationsReq() {
    return { skip: undefined, limit: undefined, isRead: undefined };
}
exports.GetNotificationsReq = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.skip !== undefined) {
            writer.uint32(8).int32(message.skip);
        }
        if (message.limit !== undefined) {
            writer.uint32(16).int32(message.limit);
        }
        if (message.isRead !== undefined) {
            writer.uint32(24).bool(message.isRead);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNotificationsReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.skip = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isRead = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            skip: isSet(object.skip) ? globalThis.Number(object.skip) : undefined,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
            isRead: isSet(object.isRead) ? globalThis.Boolean(object.isRead) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.skip !== undefined) {
            obj.skip = Math.round(message.skip);
        }
        if (message.limit !== undefined) {
            obj.limit = Math.round(message.limit);
        }
        if (message.isRead !== undefined) {
            obj.isRead = message.isRead;
        }
        return obj;
    },
    create(base) {
        return exports.GetNotificationsReq.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetNotificationsReq();
        message.skip = object.skip ?? undefined;
        message.limit = object.limit ?? undefined;
        message.isRead = object.isRead ?? undefined;
        return message;
    },
};
function createBaseGetNotificationsRes() {
    return { total: 0, unread: 0, notifications: [] };
}
exports.GetNotificationsRes = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).int32(message.total);
        }
        if (message.unread !== 0) {
            writer.uint32(16).int32(message.unread);
        }
        for (const v of message.notifications) {
            exports.Notification.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNotificationsRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.total = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.unread = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.notifications.push(exports.Notification.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            total: isSet(object.total) ? globalThis.Number(object.total) : 0,
            unread: isSet(object.unread) ? globalThis.Number(object.unread) : 0,
            notifications: globalThis.Array.isArray(object?.notifications)
                ? object.notifications.map((e) => exports.Notification.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        if (message.unread !== 0) {
            obj.unread = Math.round(message.unread);
        }
        if (message.notifications?.length) {
            obj.notifications = message.notifications.map((e) => exports.Notification.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetNotificationsRes.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetNotificationsRes();
        message.total = object.total ?? 0;
        message.unread = object.unread ?? 0;
        message.notifications = object.notifications?.map((e) => exports.Notification.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetNotificationsListReq() {
    return { userIdentifier: "", mobileUid: undefined, skip: undefined, limit: undefined, isRead: undefined };
}
exports.GetNotificationsListReq = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userIdentifier !== "") {
            writer.uint32(10).string(message.userIdentifier);
        }
        if (message.mobileUid !== undefined) {
            writer.uint32(18).string(message.mobileUid);
        }
        if (message.skip !== undefined) {
            writer.uint32(24).int32(message.skip);
        }
        if (message.limit !== undefined) {
            writer.uint32(32).int32(message.limit);
        }
        if (message.isRead !== undefined) {
            writer.uint32(40).bool(message.isRead);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNotificationsListReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.mobileUid = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.skip = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.limit = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isRead = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            mobileUid: isSet(object.mobileUid) ? globalThis.String(object.mobileUid) : undefined,
            skip: isSet(object.skip) ? globalThis.Number(object.skip) : undefined,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
            isRead: isSet(object.isRead) ? globalThis.Boolean(object.isRead) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.mobileUid !== undefined) {
            obj.mobileUid = message.mobileUid;
        }
        if (message.skip !== undefined) {
            obj.skip = Math.round(message.skip);
        }
        if (message.limit !== undefined) {
            obj.limit = Math.round(message.limit);
        }
        if (message.isRead !== undefined) {
            obj.isRead = message.isRead;
        }
        return obj;
    },
    create(base) {
        return exports.GetNotificationsListReq.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetNotificationsListReq();
        message.userIdentifier = object.userIdentifier ?? "";
        message.mobileUid = object.mobileUid ?? undefined;
        message.skip = object.skip ?? undefined;
        message.limit = object.limit ?? undefined;
        message.isRead = object.isRead ?? undefined;
        return message;
    },
};
function createBaseGetNotificationsListRes() {
    return { notifications: [] };
}
exports.GetNotificationsListRes = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.notifications) {
            exports.Notification.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNotificationsListRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.notifications.push(exports.Notification.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            notifications: globalThis.Array.isArray(object?.notifications)
                ? object.notifications.map((e) => exports.Notification.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.notifications?.length) {
            obj.notifications = message.notifications.map((e) => exports.Notification.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetNotificationsListRes.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetNotificationsListRes();
        message.notifications = object.notifications?.map((e) => exports.Notification.fromPartial(e)) || [];
        return message;
    },
};
exports.NotificationServiceDefinition = {
    name: "NotificationService",
    fullName: "NotificationService",
    methods: {
        createMessage: {
            name: "CreateMessage",
            requestType: exports.CreateMessageRequest,
            requestStream: false,
            responseType: exports.CreateMessageResponse,
            responseStream: false,
            options: {},
        },
        createNotificationsAndSendPushes: {
            name: "CreateNotificationsAndSendPushes",
            requestType: exports.CreateNotificationsAndSendPushesRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        createNotificationWithPushes: {
            name: "CreateNotificationWithPushes",
            requestType: exports.CreateNotificationWithPushesRequest,
            requestStream: false,
            responseType: exports.CreateNotificationWithPushesResponse,
            responseStream: false,
            options: {},
        },
        createNotificationWithPushesByMobileUid: {
            name: "CreateNotificationWithPushesByMobileUid",
            requestType: exports.CreateNotificationWithPushesByMobileUidRequest,
            requestStream: false,
            responseType: exports.CreateNotificationWithPushesByMobileUidResponse,
            responseStream: false,
            options: {},
        },
        getNotificationsList: {
            name: "GetNotificationsList",
            requestType: exports.GetNotificationsListReq,
            requestStream: false,
            responseType: exports.GetNotificationsListRes,
            responseStream: false,
            options: {},
        },
        getNotifications: {
            name: "GetNotifications",
            requestType: exports.GetNotificationsReq,
            requestStream: false,
            responseType: exports.GetNotificationsRes,
            responseStream: false,
            options: {},
        },
    },
};
exports.NotificationCampaignServiceDefinition = {
    name: "NotificationCampaignService",
    fullName: "NotificationCampaignService",
    methods: {
        getPushNotificationCampaign: {
            name: "GetPushNotificationCampaign",
            requestType: exports.NotificationCampaignId,
            requestStream: false,
            responseType: exports.GetPushNotificationCampaignResponse,
            responseStream: false,
            options: {},
        },
        getPushNotificationCampaigns: {
            name: "GetPushNotificationCampaigns",
            requestType: exports.PageRequest,
            requestStream: false,
            responseType: exports.CampaignsResponse,
            responseStream: false,
            options: {},
        },
        createPushNotificationCampaign: {
            name: "CreatePushNotificationCampaign",
            requestType: exports.CreatePushNotificationCampaignRequest,
            requestStream: false,
            responseType: exports.NotificationCampaignId,
            responseStream: false,
            options: {},
        },
        deletePushNotificationCampaign: {
            name: "DeletePushNotificationCampaign",
            requestType: exports.NotificationCampaignId,
            requestStream: false,
            responseType: exports.NotificationCampaignOperationResult,
            responseStream: false,
            options: {},
        },
        resumePushNotificationCampaign: {
            name: "ResumePushNotificationCampaign",
            requestType: exports.NotificationCampaignId,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        stopPushNotificationCampaign: {
            name: "StopPushNotificationCampaign",
            requestType: exports.NotificationCampaignId,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        joinUsersToPushNotificationCampaign: {
            name: "JoinUsersToPushNotificationCampaign",
            requestType: exports.JoinUsersToPushNotificationCampaignRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        sendPushNotificationCampaignMessage: {
            name: "SendPushNotificationCampaignMessage",
            requestType: exports.SendPushNotificationCampaignMessageRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=notification-service.js.map