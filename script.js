var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'These socks are meant to be together!',
    image: './assets/greensock.jpg',
    link:
      'https://www.google.com/search?q=socks&rlz=1C1CHBF_enUS840US840&sxsrf=ALeKk00qNREdJYYFWsMkHwJXWUiIlh1opg:1588033896098&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1nJKi74npAhUQ7awKHS5pAAoQ_AUoAnoECA8QBA&biw=958&bih=878',
    inventory: 20,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/greensock.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/bluesock.jpg'
      }
    ],
    sizes: ['Small', 'Medium', 'Large'],
    cart: 10
  },
  methods: {
    addToCart() {
      this.cart += 1;
      this.inventory -= 1;
    },
    removeFromCart() {
      this.cart -= 1;
      this.inventory += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
