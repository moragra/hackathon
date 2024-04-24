const form = document.querySelector('.header__form')
const categoryInput = document.querySelector('.header__input')
const button = document.querySelector('.header__button')
const h1 = document.querySelector('.header__h1')

function category(){
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const category = categoryInput.value
        h1.innerHTML = category
       getPhotos(category)
    })
}

function getPhotos(category){
    const key = 'a4uf9aY-Zg0Ojr5JEvlWuAubZRGJRq45Pu-yAdsfnWA'
    const main = document.querySelector('.main')
    main.innerHTML = ''
    axios.get(`https://api.unsplash.com/search/photos?query=${category}&client_id=${key}`).then((photos)=>{
        const photosArray = photos.data.results
        h1.innerHTML = ''
        photosArray.forEach(photo => {
            const mainImg = document.createElement('img')
            mainImg.classList.add('main__img')
            mainImg.src = photo.urls.small
            main.appendChild(mainImg)
        });
    })
}

category()