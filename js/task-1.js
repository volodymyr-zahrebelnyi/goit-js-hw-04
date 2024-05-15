function isEnoughCapacity(products, containerSize) { 
    const values = Object.values(products);
    let productsTotal = 0;

    for (const value of values) { 
        productsTotal += value;
    }
    return productsTotal <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false