import { Strings, LocaleTypes } from './constants';

interface IStrings {
  [Strings.HELP]: string;
  [Strings.ERROR]: string;
  [Strings.FALLBACK]: string;
  [Strings.SKILL_NAME]: string;
  [Strings.PERK]: string;
}

export const strings = {
  [LocaleTypes.ptBR]: {
    translation: {
      LAUNCH: 'Hello. For now I can only give you the effect of an equipment perk. Which one would you like to know?',
      PERK: '{{perkName}} is {{indefiniteArticle} perk with the following effect: {{perkEffect}}',
      SKILL_NAME: 'Essence Mage',
      HELP: 'For now I can only give you the effect of an equipment perk. Try "Alexa, ask essence mage to tell me the effect of the perk shell',
      FALLBACK: "Sorry, I don't know that. Try again.",
      ERROR: "Sorry, I didn't understand. Try again.",
    } as IStrings,
  },
};
