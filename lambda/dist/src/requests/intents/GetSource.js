"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utilities/constants");
const i18next_1 = require("i18next");
const helpers_1 = require("../../utilities/helpers");
const items_1 = require("../../utilities/items");
const GetSourceHandler = {
    canHandle(handlerInput) {
        return (0, helpers_1.isIntent)(handlerInput, constants_1.IntentTypes.GetSource);
    },
    handle(handlerInput) {
        const providedItemName = (0, helpers_1.getResolvedOrNormalSlotValue)(handlerInput, 'item');
        const item = (0, items_1.getItem)(providedItemName);
        if (!item) {
            const itemNotFoundSpeakOutput = (0, i18next_1.t)(constants_1.Strings.ITEM_NOT_FOUND);
            return (0, helpers_1.buildResponseWithSpeakOutputAndSimpleCard)(handlerInput, itemNotFoundSpeakOutput, 'Not found');
        }
        const itemName = item.title;
        if (!item.additionalText && !item.sources.length) {
            const unknownEffectSpeakOutput = (0, i18next_1.t)(constants_1.Strings.UNKNOWN_SOURCE);
            return (0, helpers_1.buildResponseWithSpeakOutputAndSimpleCard)(handlerInput, unknownEffectSpeakOutput, itemName);
        }
        const itemText = (0, items_1.getItemText)(item);
        const accordingToSource = (0, i18next_1.t)(constants_1.Strings.ACCORDING_TO_SOURCE, { source: 'ZenithMMO Fandom Wiki' });
        const effectSpeakOutput = (0, i18next_1.t)(constants_1.Strings.SOURCE, { sourceText: itemText });
        const speakOutput = `${accordingToSource}, ${effectSpeakOutput}`;
        return (0, helpers_1.buildResponseWithSpeakOutputAndSimpleCard)(handlerInput, speakOutput, itemName);
    },
};
exports.default = GetSourceHandler;
//# sourceMappingURL=GetSource.js.map