// script.js
document.addEventListener('DOMContentLoaded', function() {
    var detailButtons = document.querySelectorAll('.detailButton');
    var overlay = document.getElementById('overlay');
    var detailContent = document.getElementById('detailContent');
    var closeButton = document.getElementById('closeButton');

    detailButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var detailText = button.getAttribute('data-detail');
            detailContent.textContent = detailText;
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    // Close the overlay when clicking outside of the content area
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
