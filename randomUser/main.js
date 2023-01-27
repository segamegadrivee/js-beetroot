let slider = document.querySelector(".header__range");
let count = document.querySelector(".header__counter");
let headerButton = document.querySelector(".header__button");
let out = document.querySelector('.main');


slider.oninput = function () {
    count.innerHTML = this.value;
}



function createCard(quantity) {

    for (let i = 0; i < quantity; i++) {
        out.innerHTML +=
            `  <div class="main__usercard">

              </div>
        `
    }
}





headerButton.onclick = () => {

    createCard(slider.value)



}




