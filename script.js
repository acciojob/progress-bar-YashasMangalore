//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === circles.length - 1;
    }

    function updateCircles() {
        circles.forEach((circle, index) => {
            circle.classList.toggle('active', index <= currentIndex);
        });
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < circles.length - 1) {
            currentIndex++;
            updateCircles();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCircles();
            updateButtons();
        }
    });

    // Initial setup
    updateButtons();
});
