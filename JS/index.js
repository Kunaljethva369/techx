let hambuger = document.getElementById('hamburger');
let cross = document.getElementById('cross');
let mobNav = document.getElementById('movnav');
let allMobNav = document.querySelectorAll('.all-mob-nav');

hambuger.addEventListener('click', () => {
    mobNav.classList.toggle("nav-active");
    cross.classList.toggle("d-none");
    allMobNav.forEach(function (e) {
        e.classList.toggle('d-none')
    });
})

cross.addEventListener('click', () => {
    mobNav.classList.toggle("nav-active");
    cross.classList.toggle("d-none");
    allMobNav.forEach(function (e) {
        e.classList.toggle('d-none')
    });
})