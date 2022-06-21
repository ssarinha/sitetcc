const button = document.querySelector('.button')
const popup = document.querySelector ('.popup-wrapper')
const corpo =  document.querySelector('body')
//const closeButtonX = document.querySelector('.popup-link')
const closeButton = document.querySelector ('.popup-close')

button.addEventListener ('click', () => {
popup.style.display = 'block';
corpo.style.backgroundColor = 'rgba(0, 0, 0,.5)'
})

popup.addEventListener ('click', event => {
const classNameOfClickedElement = event.target.classList [0]
const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
const shouldClosepopup = classNames.some (className => className === classNameOfClickedElement)

if (shouldClosepopup){
    popup.style.display = 'none'
    corpo.style.backgroundColor = 'white'
}})
