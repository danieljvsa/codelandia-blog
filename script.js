const likes = document.querySelectorAll(".like")


function changeImg(){
    for (const like of likes) {
        like.addEventListener('click', () => liked(like))
    }
    
    const liked = (item) => {
        if (item.getAttribute('src') == 'assets/heart-icon.svg') {
            item.src = 'assets/heart-icon-filled.svg'
        } else {
            item.src = 'assets/heart-icon.svg'
        }
    }
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.post', { delay: 200 });
ScrollReveal().reveal('.header-post', { delay: 400 });
ScrollReveal().reveal('.title', { delay: 500 });
ScrollReveal().reveal('.description', { delay: 600 });