let x = document.getElementById("denous");
let y = document.getElementById("head");

window.addEventListener('scroll', () => {
    if (window.scrollY >= x.offsetTop) 
        y.style.display = 'flex';
    else y.style.display = 'none';
});

const ratio = 0.1;
var options = {
    root: null,
    rootMargin: '-50px 0px 50px 0px',
    threshold: ratio
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            entry.target.classList.add('reveal2-visible');
            entry.target.classList.add('cc1-visible');
            entry.target.classList.add('cc2-visible');
            entry.target.classList.add('cc3-visible');
            entry.target.classList.add('cc4-visible');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector('.reveal'));
observer.observe(document.querySelector('.reveal2'));
observer.observe(document.querySelector('.cc1'));
observer.observe(document.querySelector('.cc2'));
observer.observe(document.querySelector('.cc3'));
observer.observe(document.querySelector('.cc4'));
