import { IntentTypes, Strings } from '../../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';
import { buildResponseWithSpeakOutputAndSimpleCard, getResolvedOrNormalSlotValue, isIntent } from '../../utilities/helpers';
import { getItem, getItemText } from '../../utilities/items'

const GetSourceHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.GetSource);
  },
  handle(handlerInput: HandlerInput) {
    const providedItemName = getResolvedOrNormalSlotValue(handlerInput, 'item')
    const item = getItem(providedItemName);
    if (!item) {
      const itemNotFoundSpeakOutput = t(Strings.ITEM_NOT_FOUND)
      return buildResponseWithSpeakOutputAndSimpleCard(handlerInput, itemNotFoundSpeakOutput, 'Not found')
    }

    const itemName = item.title
    if (!item.additionalText && !item.sources.length) {
      const unknownEffectSpeakOutput = t(Strings.UNKNOWN_SOURCE)
      return buildResponseWithSpeakOutputAndSimpleCard(handlerInput, unknownEffectSpeakOutput, itemName)
    }

    const itemText = getItemText(item)
    const accordingToSource = t(Strings.ACCORDING_TO_SOURCE, { source: 'ZenithMMO Fandom Wiki' })
    const effectSpeakOutput = t(Strings.SOURCE, { sourceText: itemText })
    const speakOutput = `${accordingToSource}, ${effectSpeakOutput}`
    return buildResponseWithSpeakOutputAndSimpleCard(handlerInput, speakOutput, itemName)
  },
};

export default GetSourceHandler