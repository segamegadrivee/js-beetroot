let slider = document.querySelector(".header__range");
let count = document.querySelector(".header__counter");
let headerButton = document.querySelector(".header__button");


slider.oninput = function () {
    count.innerHTML = this.value;
}



function createCard(quantity) {

}