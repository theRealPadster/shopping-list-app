class ShoppingListItem {
  constructor(name, quantity, note = null) {
    this.name = name;
    this.quantity = quantity;
    this.note = note;
  }
}

module.exports = ShoppingListItem;
