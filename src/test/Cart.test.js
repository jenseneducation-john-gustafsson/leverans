import reducer, { addItemToCart, removeItemFromCart } from '../store/cart-slice'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      items: [],
      totalQuantity: 0,
    }
  )
})

test('should handle an item being added to an empty cart', () => {
  const previousState = {
    items: [],
    totalQuantity: 0,
  }
  expect(reducer(previousState, addItemToCart({
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",}))).toEqual(
    {
    items: [{
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",
    }],
    totalQuantity: 1,
    }

  )
})

test('should add item to cart with one other different item', () => {
  const previousState = {
    items: [{
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",
    }
    ],
    totalQuantity: 1,
  }
  expect(reducer(previousState, addItemToCart({
      id: 200,
      price: 99,
      quantity: 1,
      totalPrice: 99,
      title: "Joker",}, 1))).toEqual(
  {
    items: [{
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",
    },
    {
      id: 200,
      price: 99,
      quantity: 1,
      totalPrice: 99,
      title: "Joker",
    }],
    totalQuantity: 2,
  }
  )
})

test('should add item to cart with one other item that is the same', () => {
  const previousState = {
    items: [{
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",
    }
    ],
    totalQuantity: 1,
  }
  expect(reducer(previousState, addItemToCart({
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",}, 1))).toEqual(
    {
      items: [{
      id: 155,
      price: 199,
      quantity: 2,
      totalPrice: 398,
      title: "Batman",
    }
    ],
    totalQuantity: 2,
    }
  )
})

test('should remove item from cart with one other different item', () => {
  const previousState = {
    items: [{
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",
    },
    {
      id: 200,
      price: 99,
      quantity: 2,
      totalPrice: 198,
      title: "Joker",
    }
    ],
    totalQuantity: 3,
  }
  expect(reducer(previousState, removeItemFromCart(200, 1))).toEqual(
    {
      items: [{
      id: 155,
      price: 199,
      quantity: 1,
      totalPrice: 199,
      title: "Batman",
    },
     {
      id: 200,
      price: 99,
      quantity: 1,
      totalPrice: 99,
      title: "Joker",
    }
    ],
    totalQuantity: 2,
    }
  )
})