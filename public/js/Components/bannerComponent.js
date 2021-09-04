Vue.component("banner-comp", {
  data() {
    return {
      showError: false,
    };
  },
  template: ` <section class="background">
    <div class="container">
      <div class="red__block_header">
        <message-error v-if="showError"></message-error>
      </div>
      <p class="text">the brand<br>
        <span class="luxerious">of luxerious</span>&nbsp;<span class="luxerious fashion">fashion</span>
      </p>
    </div>
  </section>`,
});

Vue.component("message-error", {
  data() {
    return {
      message: "Ошибка подключения к серверу",
    };
  },
  template: ` 
                <div class="error-msg">
                        <p class="error-text">{{ message }}</p>
                </div>
            `,
});
