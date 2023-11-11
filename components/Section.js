export class Section{
  constructor(data, containerSelector) {
    this._items = data.items
    this._renderrer = data.renderrer
    this._container = document.querySelector(containerSelector)
  }

  renderrerItems() {
    this._items.forEach(element => {
      this._renderrer (element)
    });
  }

  addItem(card) {
    this._container.prepend(card)
  }
  
}
