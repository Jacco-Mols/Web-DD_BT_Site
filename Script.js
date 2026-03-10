const textInput = document.querySelectorAll('input[type="text"]');

const BSN = document.querySelector('.bsn-input');
const bsnError = document.querySelector('.bsn-error');

const pages = document.querySelectorAll('.pagina');
const pageIndex = document.getElementById('pageindex');

let currentIndex = 0;

const pagination = document.querySelector('.pagination')

const pageButton = document.querySelectorAll('.page_button');

const submit = document.querySelector('.submitting');

function hideSubmitButton() {
    submit.classList.add('hidden');
    pagination.classList.remove('hidden')

    // document.getElementById('prev').classList.remove('hidden')
    // document.getElementById('next').classList.remove('hidden')
};
hideSubmitButton();

// Validating error
textInput.forEach(input => {
    input.addEventListener('blur', (event) =>  {
    event.target.reportValidity();
    console.log('required');
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
// Met hulp van Diego heb ik de volgende en vorige pagina functies geschreven. De code kan ik zelf helemaal uitleggen.
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
            input.reportValidity();
        }
    })

    if (!isValid) return;

    if (currentIndex < pages.length - 1) {
        currentIndex++;
        showCurrentPage(currentIndex);
        console.log('works')
    };
});