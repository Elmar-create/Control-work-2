const buttons = document.getElementById('buttons');

buttons.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});