import { Strings, LocaleTypes } from './constants';

interface IStrings {
  [Strings.HELP]: string;
  [Strings.ERROR]: string;
  [Strings.FALLBACK]: string;
  [Strings.SKILL_NAME]: string;
  [Strings.PERK]: string;
  [Strings.UNKNOWN_PERK_EFFECT]: string;
  [Strings.PERK_NOT_FOUND]: string;
  [Strings.ACCORDING_TO_SOURCE]: string;
}

export const strings = {
  [LocaleTypes.enUS]: {
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
    } as IStrings,
  },
};
