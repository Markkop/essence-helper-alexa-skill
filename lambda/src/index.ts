import { SkillBuilders } from 'ask-sdk-core';
import { LocalizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';
import { SlotsInterceptor } from './interceptors/Slots';
import ErrorProcessor from './errors/ErrorProcessor';
import ExceptionEncounteredIntentHandler from './requests/ExceptionEncounter';
import SessionEndedIntentHandler from './requests/SessionEnded';
import LaunchIntentHandler from './requests/Launch';
import HelpIntentHandler from './requests/intents/Help';
import FallbackIntentHandler from './requests/intents/Fallback';
import StopIntentHandler from './requests/intents/Stop';
import CancelIntentHandler from './requests/intents/Cancel';
import GetEquipmentPerk from './requests/intents/GetEquipmentPerk';

export const handler = SkillBuilders.custom()
  .addRequestHandlers(
    LaunchIntentHandler,
    HelpIntentHandler,
    StopIntentHandler,
    FallbackIntentHandler,
    CancelIntentHandler,
    SessionEndedIntentHandler,
    ExceptionEncounteredIntentHandler,
    GetEquipmentPerk,
  )
  .addErrorHandlers(ErrorProcessor)
  .addRequestInterceptors(
    LocalizationRequestInterceptor,
    SlotsInterceptor
  )
  .lambda();
