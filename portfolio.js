document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.bio-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const bio = document.getElementById(targetId);
        const image = button.closest('.photo-text').querySelector('img');

        if (!bio) return;

        const isHidden = window.getComputedStyle(bio).display === 'none';

        if (isHidden) {
          bio.style.display = 'block';
          button.textContent = 'Hide Bio';

          // Scroll to the image top
          setTimeout(() => {
            const offset = 40;
            const rect = image.getBoundingClientRect();
            window.scrollTo({
              top: window.scrollY + rect.top - offset,
              behavior: 'smooth'
            });
          }, 100);
        } else {
          bio.style.display = 'none';
          button.textContent = 'Read Bio';
        }
      });
    });
  });