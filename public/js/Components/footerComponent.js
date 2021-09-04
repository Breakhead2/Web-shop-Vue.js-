Vue.component("footer-comp", {
  template: `<footer class="footer">
    <div class="footer__up" id="subscribe">
      <div class="foot_block container">
        <div class="review">
          <figure class="review_block">
            <img class="photo__profile" src="images/avatar.png" alt="photo_profile">
            <p class="footer__text">“Vestibulum quis porttitor dui! Quisque
              viverra nunc mi,
              a pulvinar purus condimentum a. Aliquam condimentum
              mattis neque sed pretium”</p>
            <figcaption>
              <h4 class="footer__text red_text">Bin Burhan</h4>
              <p class="text_author">Dhaka, Bd</p>
            </figcaption>
          </figure>
          <div class="roller">
            <button class="block__footer"></button>
            <button class="block__footer"></button>
            <button class="block__footer"></button>
          </div>
        </div>
        <form action="#" class="form_footer">
          <p class="subscribe__text">
            <span class="form_heading">Subscribe</span><br>
            for our newletter and promotion
          </p>
          <div class="form__email">
            <input class="email_input" type="email" name="email" placeholder="Enter Your Email">
            <button class="button_footer" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer_down container" id="abous_us">
      <div class="footer_down_left">
        <a href="index.html" class="label"><img src="images/label.png" alt="label">
          <p class="logo__text">bran<span class="logo__text D">d</span></p>
        </a>
        <p class="text_footer_down">Objectively transition extensive data rather than
          cross functional
          solutions. Monotonectally
          syndicate multidisciplinary materials before go forward benefits.
          Intrinsicly syndicate an
          expanded array of processes and cross-unit partnerships.
        </p>
        <p class="text_footer_down">
          Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies.
          Dynamically optimize.
        </p>
      </div>
      <div class="footer_down_right">
        <div class="block_footer company">
          <h4 class="footer_down_heading">company</h4>
          <nav>
            <ul class="footer_list_box">
              <li><a class="footer_link" href="index.html">Home</a> </li>
              <li><a class="footer_link" href="#">Shop</a></li>
              <li><a class="footer_link" href="#">About</a></li>
              <li><a class="footer_link" href="#">How It Works</a></li>
              <li><a class="footer_link" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="block_footer infomation">
          <h4 class="footer_down_heading">infomation</h4>
          <nav>
            <ul class="footer_list_box">
              <li><a class="footer_link" href="#">Tearms & Condition</a></li>
              <li><a class="footer_link" href="#">Privacy Policy</a></li>
              <li><a class="footer_link" href="#">How to Buy</a></li>
              <li><a class="footer_link" href="#">How to Sell</a></li>
              <li><a class="footer_link" href="#">Promotion</a></li>
            </ul>
          </nav>
        </div>
        <div class="block_footer shop__category">
          <h4 class="footer_down_heading">shop category</h4>
          <nav>
            <ul class="footer_list_box">
              <li><a class="footer_link" href="Product.html">Men</a></li>
              <li><a class="footer_link" href="#">Women</a></li>
              <li><a class="footer_link" href="#">Child</a></li>
              <li><a class="footer_link" href="#">Apparel</a></li>
              <li><a class="footer_link" href="#">Brows All</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="cop_block container">
        <p class="copy_text">© 2021 Brand All Rights Reserved.</p>
        <div class="social">
          <a class="soc_log" href="#"><i class="text_cub fa-facebook"></i></a>
          <a class="soc_log" href="#"><i class="text_cub fa-twitter"></i></a>
          <a class="soc_log" href="#"><i class="text_cub fa-vk"></i></a>
          <a class="soc_log" href="#"><i class="text_cub fa-pinterest-p"></i></a>
          <a class="soc_log" href="#"><i class="text_cub fa-google"></i></a>
        </div>
      </div>
    </div>
  </footer>`,
});
