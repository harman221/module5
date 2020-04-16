let map;


function initMap() {

    let home = {
        lat: 44.4073765,
        lng: -79.6682471
    };

    let downtown = {
        lat: 44.3876019,
        lng: -79.6933195
    };

    let center = {
        lat: 44.3998518,
        lng: -79.6782557
    };

    let div = document.querySelector('div');

    let map = new google.maps.Map(div, {
        zoom: 14,
        center: center
    });


    var goldStar = {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        fillColor: 'yellow',
        fillOpacity: 0.8,
        scale: .05,
        strokeColor: 'blue',
        strokeWeight: 14
    };

    var marker = new google.maps.Marker({
        position: home,
        map: map,
        icon: goldStar,
        animation: google.maps.Animation.DROP,
        title: 'Home!'
    });

    var marker2 = new google.maps.Marker({
        position: downtown,
        map: map,
        title: 'Barrie Terminal!'
    });

    var marker2 = new google.maps.Marker({
        position: center,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: 'Friend!'
    });


}


fetch('https://harman221.github.io/lab4/main.json')
.then((resp) => resp.json())
.then(function(data) {

console.log(data);
let myProducts = data;
weirdProducts(myProducts);

});

function weirdProducts(jsonObj) {
     let weirdProducts = jsonObj.weirdProducts;
    for (let i = 0; i < weirdProducts.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let list = document.createElement('ul');
        let hr = document.createElement('hr');
        let br = document.createElement('br');
        let section = document.querySelector('section');
        img.setAttribute('src', 'https://harman221.github.io/lab4/img/' + weirdProducts[i].image);
        img.setAttribute('alt', weirdProducts[i].name);
        img.setAttribute('height', '300px');
        img.setAttribute('width', '300px');
        h2.textContent = weirdProducts[i].name;
        p.textContent = 'Price: ' +
            weirdProducts[i].price;
        let details = weirdProducts[i].details;
        for (let j = 0; j < details.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = details[j];
            list.appendChild(listItem);
        }
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(list);
        article.appendChild(hr);
        article.appendChild(br);
        section.appendChild(article);
    }
}