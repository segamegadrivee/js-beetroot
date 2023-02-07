let slider = document.querySelector(".header__range");
let count = document.querySelector(".header__counter");
let headerCountry = document.querySelector('.header__country');
let headerButton = document.querySelector(".header__button");
let out = document.querySelector('.main');
let users = [];



slider.oninput = function () {
    count.innerHTML = this.value;
}

headerButton.onclick = () => {
    createCards(slider.value)

}




function removeDuplicates(arr) {
    let uniquearray = Array.from(new Set(arr))
    return uniquearray
}

function createCards(quantity) {
    fetch(`https://randomuser.me/api/?results=${quantity}&inc=name,location,picture,nat&noinfo`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            for (let i = 0; i < quantity; i++) {
                out.innerHTML += `<div class="main__usercard">
                        <img class="usercard__avatar" src="${data.results[i].picture.large}"
                            alt="" height="100" width="100">

                        <span class="usercard__fullname">${data.results[i].name.first} ${data.results[i].name.last}</span>

                        <div class="usercard__region">
                            <span class="usercard__country">${data.results[i].location.country} , ${data.results[i].location.city}</span>
                            <img class="usercard__flag" src="https://flagsapi.com/${data.results[i].nat}/flat/64.png"" alt="" height="30">
                        </div>
                    </div>`;


                users.push(data.results[i].location.country);;
            }
            console.log(removeDuplicates(users));
        });

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