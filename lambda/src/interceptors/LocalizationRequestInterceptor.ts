import { RequestInterceptor } from 'ask-sdk-core';
import * as sprintf from 'i18next-sprintf-postprocessor';
import { use } from 'i18next';
import { strings } from '../utilities/strings';
import { LocaleTypes } from '../utilities/constants';

/**
 * Adds translation functions to the RequestAttributes.
 */
export const LocalizationRequestInterceptor: RequestInterceptor = {
  process(handlerInput) {
    use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: LocaleTypes.enUS,
      overloadTranslationOptionHandler:
        sprintf.overloadTranslationOptionHandler,
      resources: strings,
      returnObjects: true,
      interpolation: {
        escapeValue: false
      }
    });
  },
};
