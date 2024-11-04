//navigation
const toggleMenu = () => {
    const navigation = document.querySelector('.navigation');


    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');

    const isBurger = src === 'burger-menu.svg';

    const iconName = isBurger ?
        'close.svg'
        :
        'burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    if (!isBurger) {
        navigation.classList.add("navigation--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle(
                'navigation--mobile'
            );
        }, 300)
    } else {
        navigation.classList.remove("navigation--mobile--fadeout");
        navigation.classList.toggle(
            'navigation--mobile'
        );
    }
};

//sticky navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})