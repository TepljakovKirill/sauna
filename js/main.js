const showТumber = document.querySelector('.contact__phone-button');
const phoneNumber = document.querySelector('.contact__phone-number');

showТumber.addEventListener('click', () => {
    if(phoneNumber.textContent === '+7(911)554-...') {
        phoneNumber.textContent = '+7(911)554-12-76';
        showТumber.textContent = 'скрыть';
    } else {
        phoneNumber.textContent = '+7(911)554-...';
        showТumber.textContent = 'показать номер';
    }
    
})