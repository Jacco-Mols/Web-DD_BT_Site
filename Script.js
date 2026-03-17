const textInput = document.querySelectorAll('input[type="text"]');

const BSN = document.querySelector('.bsn-input');
const bsnError = document.querySelector('.bsn-error');

const pages = document.querySelectorAll('.pagina');
const pageIndex = document.getElementById('pageindex');

let currentIndex = 0;

const pagination = document.querySelector('.pagination')
const pageButton = document.querySelectorAll('.page_button');
const submit = document.querySelector('.submitting');

const dateInput = document.querySelector('.overlijdensdatum');
const date = new Date();
date.setMonth(date.getMonth() -8);

const minDate = date.toISOString().split('T')[0];
dateInput.min = minDate;

const today = new Date()
dateInput.max = today.toISOString().split('T')[0];
console.log(today);

function hideSubmitButton() {
    submit.classList.add('hidden');
    pagination.classList.remove('hidden')
};
hideSubmitButton();

// Validating error
textInput.forEach(input => {
    input.addEventListener('focus', (event) =>  {
    event.target.reportValidity();
    });
});

// bsn nummer error
BSN.addEventListener('blur', () => {
    const value = BSN.value
    if(value.length === 9 ) {
        bsnError.classList.add('hidden');
    }
    else {
        bsnError.classList.remove('hidden');
    }
});

// swap pages
// Met hulp van Diego heb ik de volgende en vorige pagina functies geschreven.
function showCurrentPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
        pageIndex.innerHTML = index + 1 + "/3";
    });
};
showCurrentPage(currentIndex)

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showCurrentPage(currentIndex);
    };
});

// Bij next button word er gechecked of de huidige pagina geldig is.
// Deze check is gemaakt met behulp van chatGPT, de prompt was "i want to only go to next page when its valid." met daarbij mijn JavaScript code.
document.getElementById('next').addEventListener('click', () => {
    const currentPage = pages[currentIndex];
    const inputs = currentPage.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {

        if (!input.checkValidity()) {
            isValid = false;
        }
    })

    if (!isValid) {
        document.querySelector('form').reportValidity();
        return;
    }

    if (currentIndex < pages.length - 1) {
        currentIndex++;
        showCurrentPage(currentIndex);
        console.log('works')
    };
});