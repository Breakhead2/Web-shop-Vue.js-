Vue.component('featured-items', {
    data() {
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regExp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(item => regExp.test(item.title));
            if (!this.filtered.length) {
                alert('Данный товар отсутствует');
                this.filtered = this.products;
            }
        }
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let item of data) {
                    item.imgSrc = `images/products/${item.id}.png`;
                    this.products.push(item);
                    this.filtered.push(item);
                }
            });
    },
    template: `
            <div class="fetured__cards container">
                <item v-for="item of filtered" :item="item" :img="item.imgSrc"></item>
            </div>
        `
});
Vue.component('item', {
    props: ['item', 'img'],
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
        `
})