const textInput = document.querySelectorAll('input[type="text"]');

const BSN = document.querySelector('.bsn-input');
const bsnError = document.querySelector('.bsn-error');


textInput.forEach(input => {
    input.addEventListener('focus', (event) =>  {
    event.target.reportValidity();
    console.log('required');
    });
});

BSN.addEventListener('input', () => {
    const value = BSN.value
    if(value.length === 9 ) {
        console.log('check');
    }
    else {
        console.log('not check');
        bsnError.classList.add('hidden');
    }
});