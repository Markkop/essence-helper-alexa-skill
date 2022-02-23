"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utilities/constants");
const i18next_1 = require("i18next");
const helpers_1 = require("../../utilities/helpers");
const perks_1 = require("../../utilities/perks");
const GetEquipmentPerkHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.GetEquipmentPerk);
    },
    handle(handlerInput) {
        const providedPerkName = (0, helpers_1.getResolvedOrNormalSlotValue)(handlerInput, 'perk');
        const perk = (0, perks_1.getPerk)(providedPerkName);
        if (!perk) {
            const perkNotFoundSpeakOutput = (0, i18next_1.t)(constants_1.Strings.PERK_NOT_FOUND);
            return (0, helpers_1.buildResponseWithSpeakOutputAndSimpleCard)(handlerInput, perkNotFoundSpeakOutput, 'Not found');
        }
        const perkName = perk.name;
        if (!perk.effect) {
            const unknownEffectSpeakOutput = (0, i18next_1.t)(constants_1.Strings.UNKNOWN_PERK_EFFECT);
            return (0, helpers_1.buildResponseWithSpeakOutputAndSimpleCard)(handlerInput, unknownEffectSpeakOutput, perkName);
        }
        const indefiniteArticle = (0, perks_1.getIndefiniteArticleForPerkType)(perk.type);
        const perkEffect = perk.effect.replace('by', '');
        const perkType = perk.type;
        const speakOutput = (0, i18next_1.t)(constants_1.Strings.PERK, { indefiniteArticle, perkName, perkType, perkEffect });
        return (0, helpers_1.buildResponseWithSpeakOutputAndSimpleCard)(handlerInput, speakOutput, perkName);
    },
};
exports.default = GetEquipmentPerkHandler;
//# sourceMappingURL=GetEquipmentPerk.js.map