export enum RequestTypes {
  Launch = 'LaunchRequest',
  Intent = 'IntentRequest',
  SessionEnded = 'SessionEndedRequest',
  SystemExceptionEncountered = 'System.ExceptionEncountered',
}

export enum IntentTypes {
  Help = 'AMAZON.HelpIntent',
  Stop = 'AMAZON.StopIntent',
  Cancel = 'AMAZON.CancelIntent',
  Fallback = 'AMAZON.FallbackIntent',
  About = 'AboutIntent',
  UnavailableIntent = 'UnavailableIntent',
  GetEquipmentPerk = 'GetEquipmentPerkIntent',
  GetSource = 'GetSourceIntent',
}

export enum LocaleTypes {
  enUS = 'en-US',
}

export enum Strings {
  LAUNCH = 'LAUNCH',
  HELP = 'HELP',
  ERROR = 'ERROR',
  FALLBACK = 'FALLBACK',
  ABOUT = 'ABOUT',
  UNAVAILABLE_INTENT = 'UNAVAILABLE_INTENT',
  SKILL_NAME = 'SKILL_NAME',
  PERK = 'PERK',
  SOURCE = 'SOURCE',
  UNKNOWN_PERK_EFFECT = 'UNKNOWN_PERK_EFFECT',
  UNKNOWN_SOURCE = 'UNKNOWN_SOURCE',
  PERK_NOT_FOUND = 'PERK_NOT_FOUND',
  ITEM_NOT_FOUND = 'ITEM_NOT_FOUND',
  ACCORDING_TO_SOURCE = 'ACCORDING_TO_SOURCE',
}
