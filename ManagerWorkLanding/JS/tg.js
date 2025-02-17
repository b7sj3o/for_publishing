const form = document.querySelector('.footer-form');
const popupForm = document.querySelector('.popup-form');
const telInputs = document.querySelectorAll('.tel-input');

const bot_token = '6406654898:AAH01hMh8y8CqJP55D6XtLUYOan7DQh-KeU'
const chat_id = '928132950'

const forms = [form, popupForm];

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formName = form.elements['name'].value;
        const formPhone = form.elements['phone'].value;


        if (!formName || !formPhone) {
            alert('Заповніть всі поля');
            return;
        }
    

        const message = `%0AІм'я: ${formName}%0AНомер телефону: ${formPhone}`;

        const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${message}`;

        fetch(url, {
            method: 'POST',
        })
            .then((response) => {
                if (response.status == 404) {
                    alert('Помилка при надсиланні даних');
                } else if (response.status == 200) {
                    alert('Дані успішно надіслано');
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error('Помилка при надсиланні даних:', error);
            });
    });
});

telInputs.forEach(telInput => {
    telInput.addEventListener('input', () => {
        telInput.value = telInput.value.replace(/(?!^\+)\D/g, '');

        if (telInput.value.length > 15) {
            telInput.value = telInput.value.slice(0, 15);
        }
    });
});