"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = void 0;
const constants_1 = require("./constants");
exports.strings = {
    [constants_1.LocaleTypes.enUS]: {
        translation: {
            LAUNCH: 'Hello Zenithian. For now I can only give you the effect of an equipment perk. Which one would you like to know?',
            PERK: '{{perkName}} is {{indefiniteArticle}} {{perkType}} perk with the following effect: {{perkEffect}}',
            UNKNOWN_PERK_EFFECT: 'The effect for this perk is currently unknown.',
            ACCORDING_TO_SOURCE: 'According to {{source}}',
            PERK_NOT_FOUND: 'I could not find a perk with this name. Please try again.',
            SKILL_NAME: 'Essence Helper',
            HELP: 'For now I can only give you the effect of an equipment perk. Try "Alexa, ask essence helper to tell me the effect of the perk shell',
            FALLBACK: "Sorry, I don't know that. Try again.",
            ERROR: "Sorry, I didn't understand. Try again.",
        },
    },
};
//# sourceMappingURL=strings.js.map