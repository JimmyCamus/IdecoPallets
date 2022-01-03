const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9];
const selectedIndex = null;

imageIndexes.forEach((i)=>{
    const image = document.createElement('img');
    image.src = `/app/img/img_0${i}.jpg`;
    image.alt = '';
    image.classList.add('gallery-img');

    image.addEventListener('click', ()=>{
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/app/img/img_0${i}.jpg`;
        selectedImage.alt = '';
    });

    gallery.appendChild(image);
});

popup.addEventListener('click', () =>{
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
});