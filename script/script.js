// Change background color
const bgColorSelector = document.getElementById('bg-color');
bgColorSelector.addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;

    // Reset dark mode if changing to a light color
    if (this.value !== '#f4f4f4' && this.value !== '#ffcccb' && this.value !== '#cceeff' && this.value !== '#ccffcc') {
        document.body.classList.remove('dark-mode');
    }
});

// Adjust font size
const fontSizeSlider = document.getElementById('font-size');
fontSizeSlider.addEventListener('input', function() {
    document.documentElement.style.fontSize = this.value + 'px'; // Change root font-size
});

// Toggle dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Change font
const serifFontButton = document.getElementById('serif-font');
const sansSerifFontButton = document.getElementById('sans-serif-font');

// Initialize to Bebas Neue
document.body.style.fontFamily = "'Bebas Neue', sans-serif";

serifFontButton.addEventListener('click', function() {
    document.body.style.fontFamily = "serif"; // Change to serif font
});

sansSerifFontButton.addEventListener('click', function() {
    document.body.style.fontFamily = "'Bebas Neue', sans-serif"; // Change back to Bebas Neue
});