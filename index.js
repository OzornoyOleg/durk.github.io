import { items } from "./constants/constants.js";
import { Card } from "./components/card.js";
import { Section } from "./components/Section.js";

const createCard = (data) => {
  const card = new Card (data, '.card-element')
  const addedCard = card.generateCard()
  return addedCard
}

const cardSection = new Section ({
  items: items,
  renderrer: (item) => {
    const addedCard = createCard(item)
    cardSection.addItem(addedCard)
  }
}, '.products')

cardSection.renderrerItems()





