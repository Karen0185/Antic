let slider1NextBtn = document.querySelector('.slider-1 .next');
let slider1CcurrentSlide = 1;
let Slider1slideCount = document.querySelector('.slider-1 .slide_count');
let Slider1slidesWrapp = document.querySelector('.slider-1 .slides')
let Slider1slides = document.querySelectorAll('.slider-1 .slide');

let slider2NextBtn = document.querySelector('.slider-2 .next');
let slider2PrevBtn = document.querySelector('.treds_prev-prev');
let slider2CurrentSlide = 1
let Slider2slideCount = document.querySelector('.slider-2 .slide_count');
let Slider2slidesWrapp = document.querySelector('.slider-2 .slides');
let Slider2slides = document.querySelectorAll('.slider-2 .slide');
let slider2Pos = 0

let burgerIcon = document.querySelector('.burger-icon');
let burgerMenu = document.querySelector('.burger-menu');
let all = document.querySelector('*');
let offerBtnDown = document.querySelector('.offer button');

let links = document.querySelectorAll('a');

function openBurger() {
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    burgerMenu.classList.contains('active') ? all.style.overflow = 'hidden' : all.style.overflow = 'visible'
}

links.forEach((item) => {
    item.addEventListener('click', () => {
       openBurger()
    })
})


burgerIcon.addEventListener('click', () => {
    openBurger()
})



offerBtnDown.addEventListener('click', () => {
    const section = document.querySelector('.find_room');
    const offset = 125;
    const targetOffset = section.offsetTop - offset;
    if (section) {
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth',
        });
    }
})

slider1NextBtn.addEventListener('click', () => {
    if(slider1CcurrentSlide  == Slider1slides.length) {
        slider1CcurrentSlide = 0
    } 
    Slider1slidesWrapp.style.transform = `translateX(${-Slider1slides[0].clientWidth * slider1CcurrentSlide}px)`;
        slider1CcurrentSlide++

        Slider1slides.forEach((item,idx) => {
            if(idx + 1 < slider1CcurrentSlide) {
                item.style.opacity = '0'
            } else {
                item.style.opacity = '1'
            }
        });

        Slider1slideCount.innerHTML = `0${slider1CcurrentSlide} / 0${Slider1slides.length}`;
})

slider2NextBtn.addEventListener('click', () => {

    if(slider2CurrentSlide == Slider2slides.length) {
        slider2CurrentSlide = 0
        slider2Pos = Slider2slides[0].clientWidth + 30
    } 
        slider2CurrentSlide++
        slider2Pos -= Slider2slides[0].clientWidth + 30
        
        Slider2slidesWrapp.style.transform = `translateX(${slider2Pos}px)`;
        Slider2slides.forEach((item,idx) => {
            if(idx + 1 < slider2CurrentSlide) {
                item.style.opacity = '0'
            } else {
                item.style.opacity = '1'
            }
        });

        Slider2slideCount.innerHTML = `0${slider2CurrentSlide} / 0${Slider2slides.length}`;
})

slider2PrevBtn.addEventListener('click', () => {
    if(slider2CurrentSlide - 1 == 0) {
        slider2CurrentSlide = Slider2slides.length + 1
        slider2Pos = (-Slider2slides[0].clientWidth * slider2CurrentSlide) + ((Slider2slides.length) * 60)
    } 

    console.log(Slider2slides.length + 5);
    slider2CurrentSlide -= 1
    slider2Pos += Slider2slides[0].clientWidth + 30
    Slider2slidesWrapp.style.transform = `translateX(${slider2Pos}px)`;
    console.log(slider2Pos);
    Slider2slides.forEach((item,idx) => {
            if(idx + 1 < slider2CurrentSlide) {
                item.style.opacity = '0'
            } else {
                item.style.opacity = '1'
            }
        });

        Slider2slideCount.innerHTML = `0${slider2CurrentSlide} / 0${Slider2slides.length}`;
})