import cookingItems from '../../data/cookingItems.json'

type Item = {
  title: string,
  additionalText?: string,
  sources?: string[]
}

export function getItem(name: string) {
  return cookingItems.find(item => item.title.toLowerCase() === name.toLowerCase())
}

export function getItemText(item: Item) {
  const locations = item.sources.join(', ')
  if (item.additionalText) {
    return item.additionalText.replace(/([0-9]+)/, '$1 Zen').concat(` ${locations}`)
  }
  return `${item.title} can be found in the following locations: ${locations}`
}