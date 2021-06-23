const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function getJSON(url) {

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const eventid = jsonObject.eventid;
            let x = 0;
            for (let i = 0; i < eventid.length; i++) {
                let label = document.createElement('li');
                let a = document.createElement('a');


                label.textContent = eventid[i].tsunami;
                a.textContent = eventid[i].type;

                label.appendChild(li);






                document.querySelector('ul#quakeList').appendChild(label);


            }

        });

}