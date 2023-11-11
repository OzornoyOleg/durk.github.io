export class Card {
  constructor(data, templateSelector) {
    this._cardName = data.title
    this._cardPrice = data.price
    this._templateSelector = templateSelector
    this._cardCount = 0
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector)
    .content
    .querySelector('.products__product')
    .cloneNode(true)
  }

  generateCard() {
    this._element = this._getTemplate()
    this._element.querySelector('.product__description').textContent = this._cardName
    this._element.querySelector('.products__price').textContent = this._cardPrice
    this._countElement = this._element.querySelector('.products__orange')
    this._buttonBuy = this._element.querySelector('.products__button')
    return this._element
  }
  
}
