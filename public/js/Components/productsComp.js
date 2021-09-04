Vue.component("featured-items", {
  data() {
    return {
      products: [],
      filtered: [],
    };
  },
  methods: {
    filter(userSearch) {
      let regExp = new RegExp(userSearch, "i");
      this.filtered = this.products.filter((item) => regExp.test(item.title));
      if (!this.filtered.length) {
        alert("Данный товар отсутствует");
        this.filtered = this.products;
      }
    },
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
          this.showError = true;
        });
    },
  },

  mounted() {
    this.getJson("/api/products").then((data) => {
      for (let item of data) {
        item.imgSrc = `images/products/${item.id}.png`;
        this.products.push(item);
        this.filtered.push(item);
      }
    });
  },
  template: `
    <section class="fetured__items container" id="products">
        <h2 class="headding__items">Fetured Items</h2>
        <div class="fetured__items__box">
          <p class="text__items">Shop for items based on what we featured in this week</p>
          <filter-form></filter-form>
        </div>
        <div class="fetured__cards container">
                <item v-for="item of filtered" :item="item" :img="item.imgSrc"></item>
        </div>
    </section>`,
});
Vue.component("item", {
  props: ["item", "img"],
  template: `
            <div class="card">
                <a href="#">
                    <img class="card__image" :src="img" alt="item_photo">
                    <p class="text__card">{{ item.title }}</p>
                    <p class="text__card__price">{{ item.price }} рубл.</p>
                </a>
                <div class="add-box" @click="$root.$refs.cart.addProduct(item)">
                    <img class="add_img" src="images/add_img.png" alt="basket">
                    <span class="add_text">Add to Cart</span>
                </div>
            </div>
        `,
});
