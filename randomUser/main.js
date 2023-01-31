let slider = document.querySelector(".header__range");
let count = document.querySelector(".header__counter");
let headerButton = document.querySelector(".header__button");
let out = document.querySelector('.main');



slider.oninput = function () {
    count.innerHTML = this.value;
}



function createCard(quantity) {
    for (let i = 0; i < quantity; i++) {
        fetch('https://randomuser.me/api/?inc=name,location,picture,nat')
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                console.log(data);
                out.innerHTML += `<div class="main__usercard">
                        <img class="usercard__avatar" src="${data.results[0].picture.large}"
                            alt="" height="100" width="100">

                        <span class="usercard__fullname">${data.results[0].name.first} ${data.results[0].name.last}</span>

                        <div class="usercard__region">
                            <span class="usercard__country">${data.results[0].location.country} , ${data.results[0].location.city}</span>
                            <img class="usercard__flag" src="https://flagsapi.com/${data.results[0].nat}/flat/64.png"" alt="" height="30">
                        </div>
                    </div>`;

            });
    }

}





headerButton.onclick = () => {

    createCard(slider.value)



}




// for (let i = 0; i < quantity; i++) {
//     out.innerHTML +=
//         `  <div class="main__usercard">
//                 <img class="usercard__avatar" src="https://e7.pngegg.com/pngimages/273/154/png-clipart-cats-cats.png"
//                 alt="" height="100" width="100">

//             <span class="usercard__fullname">Stepan Cat</span>

//             <div class="usercard__region">
//                 <span class="usercard__country">Ukraine , Kyiv</span>
//                 <img class="usercard__flag" src="https://flagsapi.com/UA/flat/64.png" alt="" height="30">
//           </div>
//     `
// }