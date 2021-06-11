const requestURL = 'json/portfolio.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const portfolio = jsonObject['portfolio'];
        for (let i = 0; i < portfolio.length; i++) {
            let label = document.createElement('li');
            let a = document.createElement('a');

            a.textContent = portfolio[i].label;
            a.setAttribute('href', portfolio[i].url);


            label.appendChild(a);



            document.querySelector('ol.list').appendChild(label);
        }
    });