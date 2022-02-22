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
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const providedPerkName = requestAttributes.slots.perk.value;
        const perk = (0, perks_1.getPerk)(providedPerkName);
        const indefiniteArticle = (0, perks_1.getIndefiniteArticleForPerkType)(perk.type);
        const speakOutput = (0, i18next_1.t)(constants_1.Strings.PERK, {
            indefiniteArticle,
            perkName: perk.name,
            perkEffect: perk.effect
        });
        handlerInput.responseBuilder.withSimpleCard(perk.name, speakOutput);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    },
};
exports.default = GetEquipmentPerkHandler;
//# sourceMappingURL=GetEquipmentPerk.js.map