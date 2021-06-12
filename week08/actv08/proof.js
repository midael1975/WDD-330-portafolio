const requestURL = 'https://swapi.dev/api/people/?page=1';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const results = jsonObject.results;
        let x = 0;
        for (let i = 0; i < results.length; i++) {
            let label = document.createElement('li');
            let a = document.createElement('a');
            let p = document.createElement('p');
            let next = document.createElement('next');
            let prev = document.createElement('prev');

            a.textContent = results[i].name;

            a.setAttribute('href', results[i].height, +'' + results[i].mass + '' +
                results[i].hair_color + '' + results[i].skin_color);
            p.textContent = 'Height:' + '' + results[i].height + ',' + 'Mass:' + ',' +
                results[i].mass + ',' +
                'Hair Color:' + '' + results[i].hair_color + ',' + 'Skin Color:' + '' + results[i].skin_color;
            next.setAttribute('href', results[i].next);
            prev.setAttribute('href', results[i].previuos);

            label.appendChild(a);
            label.appendChild(p);
            label.appendChild(next);
            label.appendChild(prev);


            document.querySelector('ol.home').appendChild(label);


        }

    });


function hide() {
    const information = document.getElementsByTagName('li');
    information.addEventListener("click", hide);

    document.getElementById("<p>").innerHTML += "Clicked!<br>";
}

const URL = 'https://swapi.dev/api/people/?page=2';

fetch(URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const results = jsonObject.results;
        let x = 0;
        for (let i = 0; i < results.length; i++) {
            let label = document.createElement('li');
            let a = document.createElement('a');
            let p = document.createElement('p');



            a.textContent = results[i].name;
            a.setAttribute('href', results[i].url);
            p.textContent = 'Height:' + '' + results[i].height + ',' + 'Mass:' + ',' +
                results[i].mass + ',' +
                'Hair Color:' + '' + results[i].hair_color + ',' + 'Skin Color:' + '' + results[i].skin_color;


            label.appendChild(a);
            label.appendChild(p);


            document.querySelector('ol.home').appendChild(label);


        }

    });

// controller code
/*function showResults(url = "https://swapi.dev/api/people/") {
    showResults(url).then(function(data) {
        console.log(data);
        const results = data.results;

        //get the list element
        const homeElement = document.getElementById("home");
        renderhome(results, homeElement);

        // enable the next and prev buttons.
        if (data.next) {
            const next = document.getElementById("next");
            // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type we choose. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
            next.ontouchend = () => {
                // notice to show the next page we just re-call the showShips function with a new URL
                showShips(data.next);
            };
        }
        if (data.previous) {
            const prev = document.getElementById("prev");

            prev.ontouchend = () => {
                showResults(data.previous);
            };
        }
    });
}

function getShipDetails(url) {
    //call getJSON functions for the provided url
    getResults(url).then(function(data) {
        renderResultsDetails(data);
        //with the results populate the elements in the #detailsbox
    });
}
showResults();*/