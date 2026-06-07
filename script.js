//this code for change the image package of the main page
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(items[items.length - 1])
})
//this the package button code for moving x row
function scrollSlider(direction, index) {
    const sliders = document.querySelectorAll('.slider-wrapper .image-bar');
    const scrollAmount = 300;

    if (sliders[index]) {
        sliders[index].scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}
