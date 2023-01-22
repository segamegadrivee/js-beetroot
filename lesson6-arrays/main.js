let name = document.querySelector('.name');
let age = document.querySelector('.age');
let tel = document.querySelector('.tel');
let btn = document.querySelector('.btn');
let out = document.querySelector('.input-menu');
let list = document.querySelector('.out');
let btn2 = document.querySelector('.btn2');
let body = document.querySelector('body');
let users = [];

// add id for unique 



function userAdd(out, name, age, tel) {

    let phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    // Checking empty inputs 
    if (name == '' || age == '' || tel == '') {
        alert(" ⚠️ You have not entered data in all inputs. ⚠️ ");
        return 0;
    }

    // Age can't be negative
    if (age < 0) {
        alert('⚠️ You are not born yet :) TRY AGAIN !!! ⚠️');
        return 0;
    }


    // Matching phone by template 
    if (tel.match(phone)) {
        console.log('tel OK');
    } else {
        console.log('tel not ok');
        alert(' ⚠️ Your phone number does not match the format !!! ⚠️');
        return 0;
    }

    // Function for checking is the user adult or not  
    function isEighteen(age) {
        if (age >= 18) {
            return true;
        }
        else {
            return false;
        }
    }

    // Function creates unique id for each user 
    function createID() {
        let userId = Math.random().toString(36).slice(-8);
        return userId;
    }

    // User object 
    const user = {
        name: name,
        age: age,
        tel: tel,
        id: createID(),
        legalAge: isEighteen(age),
    }

    users.push(user);
    console.log(users);


    // body.style.flexDirection = 'row';
    // body.style.gap = '160px';

    btn2.innerHTML = `
    <button class = 'btn2 btn'>Users List</button>
    `

    alert(" User has been added ✅ ");
}

btn.onclick = () => {
    userAdd(out, name.value, age.value, tel.value)
    name.value = '';
    age.value = '';
    tel.value = '';

}

btn2.onclick = () => {
    console.log("User list button click:", users);
    list.innerHTML = users.map(user => user.name);
}


