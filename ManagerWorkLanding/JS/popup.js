const popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add("active");
}

function closePopup() {
    popup.classList.remove("active");
}

popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});