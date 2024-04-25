const form = document.querySelector('.header__form')
const formDiv = document.querySelector('.header__form-div')
const categoryInput = document.querySelector('.header__input')
const button = document.querySelector('.header__button')
const slide = document.querySelector('.main__slide')

function category(){
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const category = categoryInput.value
        form.classList.remove('header__form')
        form.classList.add('header__form-new')
        formDiv.classList.remove('header__form-div')
        formDiv.classList.add('header__form-new-div')
       getPhotos(category)
       heroTitle(category)
       displayFooter(category)
       displayInfo()
    })
}

function getPhotos(category){
    const key = 'a4uf9aY-Zg0Ojr5JEvlWuAubZRGJRq45Pu-yAdsfnWA'
    slide.innerHTML = ''
    axios.get(`https://api.unsplash.com/search/photos?query=${category}&client_id=${key}`).then((photos)=>{
        const photosArray = photos.data.results
        photosArray.forEach(photo => {
            const mainImg = document.createElement('img')
            mainImg.classList.add('main__img')
            mainImg.src = photo.urls.small
            slide.appendChild(mainImg)
        });
        const photoUrl = photosArray[1].urls.raw
        heroImageAssign(photoUrl)
        const photoUrl2 = photosArray[5].urls.raw
    })
}

category()

const heroDiv= document.querySelector(".hero__div")
const heroPhoto = document.createElement('img')

function heroImageAssign(photoUrl){    
    heroPhoto.innerHTML = ''
    heroPhoto.src = photoUrl
    heroPhoto.classList.add("hero__image")
    heroDiv.appendChild(heroPhoto)
}

const heroTextbox = document.querySelector(".hero__textbox")
const heroHeader = document.createElement('h2')

function heroTitle(category){
    heroHeader.innerHTML=''
    heroHeader.classList.add("hero__header")
    heroHeader.innerText = category.toUpperCase() + " WEBSITE!"
    heroTextbox.appendChild(heroHeader)
}

const imgDiv = document.querySelector('.main__info2-img')
const img = document.createElement('img')

function asideImage(photoUrl){    
    img.innerHTML = ''
    img.src = photoUrl
    imgDiv.appendChild(img)
}

function displayInfo(){
    const mainInfo = document.querySelectorAll('.main__info-p')
    
    mainInfo.forEach((p)=>{
        p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        p.classList.add('main__info-pp')
    })
}

function displayFooter(category){
    const footerAdress = document.querySelector('.footer__address')
    footerAdress.innerHTML = '1122 33 Ave NW, T3S 1J7, Ontario'

    const footerMail= document.querySelector('.footer__info-mail')
    footerMail.innerHTML = `info@${category}.com`

    const footerTel= document.querySelector('.footer__info-tel')
    footerTel.innerHTML = `1-800-${category.toUpperCase()}`

    const twIcon = document.querySelector('.footer__icon-tw')
    twIcon.src = '../assets/Icons/SVG/Icon-twitter.svg'

    const fbIcon = document.querySelector('.footer__icon-fb')
    fbIcon.src = '../assets/Icons/SVG/Icon-facebook.svg'

    const igIcon = document.querySelector('.footer__icon-ig')
    igIcon.src = '../assets/Icons/SVG/Icon-instagram.svg'

}