Vue.component('message-error', {
    data() {
        return {
            message: "Ошибка подключения к серверу"
        }
    },
    template: ` 
                <div class="error-msg">
                        <p class="error-text">{{ message }}</p>
                </div>
            `
})