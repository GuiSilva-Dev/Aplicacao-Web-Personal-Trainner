document.addEventListener('DOMContentLoaded', () => {

    const readMoreButtons = document.querySelectorAll('.read-more,.read-more-2,.read-more-3,.read-more-4');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {

            const post = button.closest('.list-footer,.list-footer2,.list-footer3,.list-footer4');

            const content = post.querySelector('.post-content');

            content.classList.toggle('visible');

            button.textContent = content.classList.contains('visible')
                ? '\u25B2'
                : '\u25Bc';
        });
    });
});

