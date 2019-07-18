const button = document.getElementById('button');
const navigation = document.querySelector('.nav-content');
const links = document.querySelectorAll('.nav-content a');

document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', () => {
        navigation.classList.toggle('appear');
    });

    links.forEach(link => {
        link.addEventListener('click', ()=> {
            navigation.classList.remove('appear');
        })
    })
})
