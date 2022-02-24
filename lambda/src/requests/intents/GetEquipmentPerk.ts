import { IntentTypes, Strings } from '../../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';
import { buildResponseWithSpeakOutputAndSimpleCard, getResolvedOrNormalSlotValue, isIntent } from '../../utilities/helpers';
import { getPerk, getIndefiniteArticleForPerkType } from '../../utilities/perks'

const GetEquipmentPerkHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.GetEquipmentPerk);
  },
  handle(handlerInput: HandlerInput) {
    const providedPerkName = getResolvedOrNormalSlotValue(handlerInput, 'perk')
    const perk = getPerk(providedPerkName);
    if (!perk) {
      const perkNotFoundSpeakOutput = t(Strings.PERK_NOT_FOUND)
      return buildResponseWithSpeakOutputAndSimpleCard(handlerInput, perkNotFoundSpeakOutput, 'Not found')
    }

    const perkName = perk.name
    if (!perk.effect) {
      const unknownEffectSpeakOutput = t(Strings.UNKNOWN_PERK_EFFECT)
      return buildResponseWithSpeakOutputAndSimpleCard(handlerInput, unknownEffectSpeakOutput, perkName)
    }

    const indefiniteArticle = getIndefiniteArticleForPerkType(perk.type)
    const perkEffect = perk.effect.replace('by', '')
    const perkType = perk.type
    const accordingToSource = t(Strings.ACCORDING_TO_SOURCE, { source: 'ZenithMMO Fandom Wiki' })
    const effectSpeakOutput = t(Strings.PERK, { indefiniteArticle, perkName, perkType, perkEffect })
    const speakOutput = `${accordingToSource}, ${effectSpeakOutput}`
    return buildResponseWithSpeakOutputAndSimpleCard(handlerInput, speakOutput, perkName)
  },
};

export default GetEquipmentPerkHandler