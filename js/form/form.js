document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('footer__form')
        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();

            let error = formValidate(footer__form);

            let formData = new FormData(footer__form);

            if (error === 0) {
                form.classList.add('sending')
                let response = await fetch('mail.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);
                    formPreview.innerHTML = '';
                    form.reset();
                    form.classList.remove('sending')
                } else {
                    alert("Oops! Viga")
                    form.classList.remove('sending')
                }
            } else {
                alert('Palun sisestage välja kohatäide')
            }
        }

        function formValidate(footer__form) {
            let error = 0;
            let formReq = document.querySelectorAll('.-req')
                // ЗДЕСЬ ОШИЬКА
            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);

                if (input.classList.contains('.-name')) {
                    if (nameTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }

        function formAddError(input) {
            input.parentElement.classList.add('-error');
            input.classList.add('-error');
        }

        function formRemoveError(input) {
            input.parentElement.classList.remove('-error');
            input.classList.remove('-error');
        }
    })
    // var selector = document.querySelector("input[type='tel']");
    // // var im = new Inputmask("+372 999 99999");
    // // im.mask(selector);
    // new JustValidate('.footer__right-form', {
    //     colorWrong: 'rgba(209, 22, 22, 1)',
    //     rules: {
    //         name: {
    //             required: true,
    //             minLength: 2,
    //             maxLength: 20
    //         },
    //         tel: {
    //             required: true,

//             function: (name, value) => {
//                 return Number(phone) && phone.length === 10;
//             }
//         },

//     },
//     messages: {
//         name: 'Teie nimi, palun',
//         tel: 'Vale sisendvormingus',
//     },
// });
