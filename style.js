let photo = document.getElementById('photo');
let heart = document.getElementById('heart');

photo.addEventListener('dblclick', () => {
    heart.style.display = 'block';
    heart.style.background = 'none';

    setTimeout(() => {
        heart.style.display = 'none';
    }, 1000);
});
