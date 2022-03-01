"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = void 0;
const constants_1 = require("./constants");
const english = {
    translation: {
        LAUNCH: 'Hello Zenithian. I can get you the effects of an equipment perk or the location of a cooking ingredient. Which one would you like to know?',
        PERK: '{{perkName}} is {{indefiniteArticle}} {{perkType}} perk with the following effect: {{perkEffect}}',
        SOURCE: '{{sourceText}}',
        UNKNOWN_PERK_EFFECT: 'The effect for this perk is currently unknown.',
        UNKNOWN_SOURCE: 'The location for this item is currently unknown.',
        ACCORDING_TO_SOURCE: 'According to {{source}}',
        PERK_NOT_FOUND: 'I could not find a perk with this name. Please try again.',
        ITEM_NOT_FOUND: 'I could not find an item with this name. Please try again.',
        SKILL_NAME: 'Essence Helper',
        HELP: 'I can get you the effects of an equipment perk or the location of a cooking ingredient. Try "Alexa, ask essence helper to tell me the effect of the perk shell" or "Alexa, open essence helper and get me the location of apples',
        FALLBACK: "Sorry, I don't know that. Try again.",
        ERROR: "Sorry, I didn't understand. Try again.",
    },
};
exports.strings = {
    [constants_1.LocaleTypes.enUS]: english,
    [constants_1.LocaleTypes.enAU]: english,
    [constants_1.LocaleTypes.enCA]: english,
    [constants_1.LocaleTypes.enIN]: english,
    [constants_1.LocaleTypes.enUK]: english,
    [constants_1.LocaleTypes.enGB]: english,
};
//# sourceMappingURL=strings.js.map