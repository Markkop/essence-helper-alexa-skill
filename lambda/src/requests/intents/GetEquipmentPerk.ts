import { IntentTypes, Strings } from '../../utilities/constants';
import { HandlerInput, RequestHandler } from "ask-sdk-core";
import { t } from 'i18next';
import { isIntent } from '../../utilities/helpers';
import { getPerk, getIndefiniteArticleForPerkType } from '../../utilities/perks'

const GetEquipmentPerkHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return isIntent(handlerInput, IntentTypes.GetEquipmentPerk);
  },
  handle(handlerInput: HandlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const providedPerkName = requestAttributes.slots.perk.value
    const perk = getPerk(providedPerkName);
    const indefiniteArticle = getIndefiniteArticleForPerkType(perk.type)
    const speakOutput = t(Strings.PERK, {
      indefiniteArticle,
      perkName: perk.name,
      perkEffect: perk.effect
    })
    handlerInput.responseBuilder.withSimpleCard(perk.name, speakOutput)

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

export default GetEquipmentPerkHandler