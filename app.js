const button = document.getElementById('Button');
button.addEventListener('click', () => {
    confetti({
        particleCount: 200,
        spread: 180,
      
    });
});