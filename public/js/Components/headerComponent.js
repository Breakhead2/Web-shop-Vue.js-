Vue.component("header-comp", {
  data() {
    return {
      showCart: false,
      showBrowse: false,
    };
  },
  template: `<header class="header">
  <div class="top__border">
    <div class="top__header container">
      <div class="top__header__left">
        <a href="index.html" class="label"><img src="images/label.png" alt="label">
          <p class="logo__text">bran<span class="logo__text D">d</span></p>
        </a>
        <div class="header_form">
          <div class="header__button__left" @click="showBrowse=!showBrowse">Browse &nbsp;
            <i class="fa-caret-down"></i>
            <div class="drop__down" v-show="showBrowse">
              <h3 class="drop__down__heading">Women
              </h3>
              <ul class="drop__down__menu">
                <li class="drop__down__list"><a class="drop__down__link" href="#">Dresses</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Tops</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Sweaters/Knits</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Jackets/Coats</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Blazers</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Denim</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Leggings/Pants</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Skirts/Shorts</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Accessories</a>
                </li>
              </ul>
              <h3 class="drop__down__heading men">Men
              </h3>
              <ul class="drop__down__menu">
                <li class=" drop__down__list"><a class="drop__down__link" href="#">Tees/Tank
                    tops</a></li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Shirts/Polos</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Sweaters</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Sweatshirts/Hoodies</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Blazers</a>
                </li>
                <li class="drop__down__list"><a class="drop__down__link" href="#">Jackets/vests</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="top__header__right">
      <div class="basket"  @click="showCart=!showCart">
        <img src="images/basket.png" alt="basket">
      </div>
        <a href="#" class="header__button__right">My account &nbsp;
          <i class="fa-caret-down white"></i></a>
      </div>
    </div>
  </div>
  <div class="bottom__header">
    <div class="bottom__background">
      <div class="container">
        <nav>
          <ul class="menu">
            <li class="menu_list"><a class="menu__link" href="index.html">home</a>
            </li>
            <li class="menu_list"><a class="menu__link" href="#special_offers">special offers</a>
            </li>
            <li class="menu_list"><a class="menu__link" href="#products">Featured Items</a>
            </li>
            <li class="menu_list"><a class="menu__link" href="#our_offers">Our offers</a>
            </li>
            <li class="menu_list menu_list_lust"><a class="menu__link" href="#subscribe">Subscribe</a>
            </li>
            <li class="menu_list menu_list_lust"><a class="menu__link" href="#abous_us">About us & Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>`,
});
