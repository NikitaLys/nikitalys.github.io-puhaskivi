var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999 9999");
im.mask(selector);

new JustValidate('.contact__form', {
    colorWrong: 'rgba(209, 22, 22, 1)',
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        tel: {
            required: true,

            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()

                return Number(phone) && phone.length === 10;
            }
        },


    },
    messages: {
        name: 'Как вас зовут?',
        tel: 'Недопустимый формат',
    },



});
