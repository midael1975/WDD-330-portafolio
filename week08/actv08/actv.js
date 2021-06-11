const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        let x = 0;
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
                let home = document.createElement('div');
                let res = document.createElement('section');
                let h2 = document.createElement('h2');
                let h4 = document.createElement('h4');
                let p = document.createElement('p');
                let people = document.createElement('p');
                let annual = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = towns[i].name;
                h4.textContent = towns[i].motto;
                p.textContent = 'Year founded:' + ' ' + towns[i].yearFounded;
                people.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
                annual.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
                image.setAttribute('src', `images/${towns[i].photo}`);
                image.setAttribute('alt', towns[i].name);
                image.setAttribute('class', "left");

                home.appendChild(h2);
                home.appendChild(h4);
                home.appendChild(p);
                home.appendChild(people);
                home.appendChild(annual);
                home.appendChild(image);
                res.appendChild(home);
                res.appendChild(image);
                res.setAttribute('class', "hopage");
                home.setAttribute('class', "data");
                if (x % 2 == 0) {
                    image.setAttribute('class', "derecha");
                    home.setAttribute('class', "data2");
                }
                x++;
                document.querySelector('div.home').appendChild(res);
            }
        }
    });