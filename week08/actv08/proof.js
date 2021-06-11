const requestURL = 'https://swapi.dev/api/people';
'https://swapi.dev/api/people/?page2';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const results = jsonObject['results'];
        let x = 0;
        for (let i = 0; i < results.length; i++) {
            let home = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('next');

            h2.textContent = results[i].name;
            p.textContent = results[i].next;



            home.appendChild(h2);
            home.appendChild(p);

            document.querySelector('div.home').appendChild(home);


        }

    });

const URL = 'https://swapi.dev/api/people/?page=2';


fetch(URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const results = jsonObject['results'];
        let x = 0;
        for (let i = 0; i < results.length; i++) {
            let home = document.createElement('div');
            let h2 = document.createElement('h2');


            h2.textContent = results[i].name;




            home.appendChild(h2);

            document.querySelector('div.home').appendChild(home);


        }

    });