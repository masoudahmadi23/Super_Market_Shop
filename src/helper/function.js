const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toLocaleString();

  return { itemsCounter, total };
};

const productQuantity = (state, id) => {
  const index = state.selectedItem.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItem[index].quantity;
  }
};
export { sumProducts, productQuantity };
