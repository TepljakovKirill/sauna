const btnShowТumber = document.querySelector('.contact__phone-button');
const phoneNumber = document.querySelector('.contact__phone-number');

btnShowТumber.addEventListener('click', () => {
    if(phoneNumber.textContent === '+7(911)554-...') {
        phoneNumber.textContent = '+7(911)554-12-76';
        btnShowТumber.textContent = 'скрыть';
    } else {
        phoneNumber.textContent = '+7(911)554-...';
        btnShowТumber.textContent = 'показать номер';
    }
    
})