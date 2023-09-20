const pickedImg = document.getElementById('pickedImg')
const sliderImgs = document.querySelector('.slider__images')


sliderImgs.onclick = (e) => {
    if (e.target.src) {
        pickedImg.src = e.target.src
        return e.target.classList.toggle('active')
    }
}

const selects = document.getElementsByClassName('select')

for (let i = 0; i < selects.length; i++) {
    const selectHolder = selects[i].getElementsByClassName('select__picked__text')[0]

    selects[i].addEventListener('click', (e) => {
        const dropdown = selects[i].getElementsByTagName('ul')
        dropdown[i].classList.toggle('dropdownActive')
        const selectDropdown = selects[i].getElementsByTagName('li')

        for (let j = 0; j < selectDropdown.length; j++) {
            selectDropdown[j].addEventListener('click', (e) => {
                console.log(e.target);
                selectHolder.textContent = selectDropdown[j].textContent
            })
        }
    })
}
