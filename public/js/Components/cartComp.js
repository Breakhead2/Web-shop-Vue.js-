Vue.component("cart", {
  data() {
    return {
      cartItems: [],
      showCart: false,
    };
  },
  methods: {
    postJson(url, data) {
      console.log(url);
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    putJson(url, data) {
      console.log(url);
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
          this.showError = true;
        });
    },
    addProduct(item) {
      let find = this.cartItems.find((el) => el.id === item.id);
      if (find) {
        this.putJson(`/api/cart/${find.id}`, { quantity: 1 }).then((data) => {
          if (data.result === 1) {
            find.quantity++;
          }
        });
      } else {
        const prod = Object.assign({ quantity: 1 }, item);
        this.postJson(`/api/cart`, prod).then((data) => {
          if (data.result === 1) {
            this.cartItems.push(prod);
          }
        });
      }
    },
    remove(url, data) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => {
          result.json();
          this.getJson("Web-shop-Vue.js-/server/db/userCart.json").then(
            (data) => {
              console.log(data);
              this.cartItems.push({
                amount: data.amount,
                countGoods: data.countGoods,
              });
              this.cartItems = data.contents;
            }
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteItem(id) {
      let remove = this.remove;
      let cart = this.cartItems;
      let find = cart.find((el) => el.id === id);
      remove(`/api/cart/${id}`, find);
    },
    Sum() {
      let cartPrice = 0;
      let cart = this.cartItems;
      cart.forEach((el) => (cartPrice += el.quantity * el.price));
      return cartPrice;
    },
  },
  mounted() {
    this.getJson("Web-shop-Vue.js-/server/db/userCart.json").then((data) => {
      for (let item of data.contents) {
        item.imgSrc = `images/products/${item.id}.png`;
        this.cartItems.push(item);
      }
    });
  },
  template: `<div class="container">
                <div class="cart__box"  v-show="$root.$refs.showCart.showCart">
                        <div class="cart">
                            <p  v-if="!cartItems.length" class="total__price__text">Корзина пуста</p>
                            <cart-item v-for="item of cartItems" :cart-item="item" :img="item.imgSrc">
                            </cart-item>
                            <div class="total__price">
                                <p class="total__price__text">TOTAL</p>
                                <p class="total__price__text">{{Sum()}} рубл.</p>
                            </div>
                            <a class="button__check" href="#">Checkout</a>
                            <a class="button__go__to" href="#">Go to cart</a>
                        </div>
                </div>
              <div>  
            `,
});
Vue.component("cart-item", {
  props: ["img", "cartItem"],
  template: `
            <div class="cart__item">
                <a href="#">
                    <img class="image__cart" :src="img" alt="image_product">
                </a>
                <div class="atribute">
                    <p class="cart__text">{{cartItem.title}}</p>
                    <p class="cart__text price">{{cartItem.quantity}} x {{cartItem.price}} рубл.</p>
                </div>
                <button class="item-delete-button" @click="$parent.deleteItem(cartItem.id)">
                    <i class="fa-times-circle"></i>
                </button>
            </div>
        `,
});
