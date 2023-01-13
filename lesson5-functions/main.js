let name = document.querySelector('.name');
let age = document.querySelector('.age');
let tel = document.querySelector('.tel');
let btn = document.querySelector('button');
let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');
let body = document.querySelector('body');


function userAdd(out, name, age, tel) {

    let phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (name == '' || age == '' || tel == '') {
        alert("You have not entered data in all inputs. ");
        return 0;
    }

    if (age < 0) {
        alert('You are not born yet :) TRY AGAIN !!!');
        return 0;
    }

    if (tel.match(phone)) {
        console.log('tel OK');
    } else {
        console.log('tel not ok');
        alert(' Your phone number does not match the format !!!');
        return 0;
    }

    body.style.flexDirection = 'row';
    body.style.gap = '160px';

    out.innerHTML += `
    <li>
    <span> Name: ${name}</span> 
    <br>
    <span> Age: ${age}</span>
    <br>
    <a href="tel:${tel}">${tel}</a>
    </li>
    `
}

btn.onclick = () => {
    userAdd(out, name.value, age.value, tel.value)



}
// document.querySelector('.btn2').onclick = () => {
//     userAdd(out2, name.value, age.value, tel.value)
// }


