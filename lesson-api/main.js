let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('.result');
let API_KEY = '33019011-2e797f6a76fece48049c4f237';


// $.getJSON(URL, function (data) {
//     if (parseInt(data.totalHits) > 0)
//         $.each(data.hits, function (i, hit) { console.log(hit.pageURL); });
//     else
//         console.log('No hits');
// });


button.addEventListener('click', function (event) {

    let URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(input.value);


    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            for (let i = 0; i < 12; i++) {

                output.innerHTML += `<a href="${data.hits[i].webformatURL}" target=”_blank”>
                <img src="${data.hits[i].webformatURL}" width = "300" height = "300"> </a>`;
                console.log(data.hits[i]);
            }
        });
    console.log('test button');
    output.innerHTML = "";
})