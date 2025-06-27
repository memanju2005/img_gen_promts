
// Trending images carousel
let currentTrendingIndex = 0;
const trendingImages = document.querySelectorAll('.trending-image');
const indicators = document.querySelectorAll('.indicator');

function showTrendingImage(index) {
    // Hide all trending images
    trendingImages.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Show selected image
    trendingImages[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextTrendingImage() {
    currentTrendingIndex = (currentTrendingIndex + 1) % trendingImages.length;
    showTrendingImage(currentTrendingIndex);
}

// Auto-rotate trending images
setInterval(nextTrendingImage, 2000);

// Manual indicator control
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentTrendingIndex = index;
        showTrendingImage(index);
    });
});

function showGallery(category) {
    // Hide categories
    document.getElementById('categories').style.display = 'none';

    // Hide all galleries
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => gallery.classList.remove('active'));

    // Show selected gallery
    document.getElementById(category + '-gallery').classList.add('active');
}

function showCategories() {
    // Show categories
    document.getElementById('categories').style.display = 'block';

    // Hide all galleries
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => gallery.classList.remove('active'));
}

function copyPrompt(button, prompt) {
    // Copy to clipboard
    navigator.clipboard.writeText(prompt).then(() => {
        // Change button appearance
        button.textContent = 'Copied!';
        button.classList.add('copied');

        // Show toast notification
        const toast = document.getElementById('toast');
        toast.classList.add('show');

        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = 'Copy Prompt';
            button.classList.remove('copied');
        }, 2000);

        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy prompt: ', err);
        button.textContent = 'Copy Failed';
        setTimeout(() => {
            button.textContent = 'Copy Prompt';
        }, 2000);
    });
}

// Add smooth scrolling and interactive effects
document.addEventListener('DOMContentLoaded', function () {
    // Add hover effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add floating animation to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.5}s`;
    });
});
