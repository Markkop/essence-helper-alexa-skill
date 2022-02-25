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
      LAUNCH: 'Hello Zenithian. For now I can only give you the effect of an equipment perk. Which one would you like to know?',
      PERK: '{{perkName}} is {{indefiniteArticle}} {{perkType}} perk with the following effect: {{perkEffect}}',
      ITEM: '{{sourceText}}',
      UNKNOWN_PERK_EFFECT: 'The effect for this perk is currently unknown.',
      UNKNOWN_SOURCE: 'The location for this item is currently unknown.',
      ACCORDING_TO_SOURCE: 'According to {{source}}',
      PERK_NOT_FOUND: 'I could not find a perk with this name. Please try again.',
      ITEM_NOT_FOUND: 'I could not find an item with this name. Please try again.',
      SKILL_NAME: 'Essence Helper',
      HELP: 'For now I can only give you the effect of an equipment perk. Try "Alexa, ask essence helper to tell me the effect of the perk shell',
      FALLBACK: "Sorry, I don't know that. Try again.",
      ERROR: "Sorry, I didn't understand. Try again.",
    } as IStrings,
  },
};
