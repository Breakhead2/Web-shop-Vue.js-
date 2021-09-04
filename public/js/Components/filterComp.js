Vue.component('filter-form', {
    data() {
        return {
            userSearch: '',
        }
    },
    template: `
            <form action="#" class="header_form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="search" name="poisk" placeholder="Search for Item" class="search_string" v-model="userSearch">
                <button class="submit_header" type="submit"><i class="fa-search"></i></button>
            </form>
        `
});