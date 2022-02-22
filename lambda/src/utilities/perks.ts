import perks from '../../data/perks.json'

export function getPerk(name: string) {
  return perks.find(perk => perk.name.toLowerCase() === name.toLowerCase())
}

export function getIndefiniteArticleForPerkType(perkType: string) {
  if (perkType === 'active') return 'an'
  return 'a'
}