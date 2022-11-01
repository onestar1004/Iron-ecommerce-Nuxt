export const totalPrice = (options) => {
  if(!Array.isArray(options) && options.options) options = options.options;

  let price = 0;
  for(let option of options) {
    if(option.selection && (option.selection.price || option.selection.modified_price)) {
      let priceAdder = parseFloat(option.selection.price) || 0;
      if(typeof option.selection.modified_price != undefined) priceAdder = (parseFloat(option.selection.modified_price) || 0);
      price += (parseFloat(priceAdder) || 0);
    }
  }
  return price;
}