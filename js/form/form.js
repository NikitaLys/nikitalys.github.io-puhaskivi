var selector = document.querySelector("input[type='tel']");
// var im = new Inputmask("+372 999 99999");
// im.mask(selector);

new JustValidate('.footer__right-form', {
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
                return Number(phone) && phone.length === 10;
            }
        },


    },
    messages: {
        name: 'Teie nimi, palun',
        tel: 'Vale sisendvormingus',
    },



});
