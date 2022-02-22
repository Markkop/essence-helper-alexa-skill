"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = exports.LocaleTypes = exports.IntentTypes = exports.RequestTypes = void 0;
var RequestTypes;
(function (RequestTypes) {
    RequestTypes["Launch"] = "LaunchRequest";
    RequestTypes["Intent"] = "IntentRequest";
    RequestTypes["SessionEnded"] = "SessionEndedRequest";
    RequestTypes["SystemExceptionEncountered"] = "System.ExceptionEncountered";
})(RequestTypes = exports.RequestTypes || (exports.RequestTypes = {}));
var IntentTypes;
(function (IntentTypes) {
    IntentTypes["Help"] = "AMAZON.HelpIntent";
    IntentTypes["Stop"] = "AMAZON.StopIntent";
    IntentTypes["Cancel"] = "AMAZON.CancelIntent";
    IntentTypes["Fallback"] = "AMAZON.FallbackIntent";
    IntentTypes["About"] = "AboutIntent";
    IntentTypes["UnavailableIntent"] = "UnavailableIntent";
    IntentTypes["GetEquipmentPerk"] = "GetEquipmentPerkIntent";
})(IntentTypes = exports.IntentTypes || (exports.IntentTypes = {}));
var LocaleTypes;
(function (LocaleTypes) {
    LocaleTypes["enUS"] = "en-US";
})(LocaleTypes = exports.LocaleTypes || (exports.LocaleTypes = {}));
var Strings;
(function (Strings) {
    Strings["LAUNCH"] = "LAUNCH";
    Strings["HELP"] = "HELP";
    Strings["ERROR"] = "ERROR";
    Strings["FALLBACK"] = "FALLBACK";
    Strings["ABOUT"] = "ABOUT";
    Strings["UNAVAILABLE_INTENT"] = "UNAVAILABLE_INTENT";
    Strings["SKILL_NAME"] = "SKILL_NAME";
    Strings["PERK"] = "PERK";
    Strings["UNKNOWN_PERK_EFFECT"] = "UNKNOWN_PERK_EFFECT";
    Strings["PERK_NOT_FOUND"] = "PERK_NOT_FOUND";
})(Strings = exports.Strings || (exports.Strings = {}));
//# sourceMappingURL=constants.js.map