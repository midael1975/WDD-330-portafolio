import { getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
    constructor(parent, position = null) {
        this.parent = parent;
        this.parentElement = null;
        this.position = position || {
            lat: 0,
            lon: 0
        };
        this.quakes = new Quake();
        this.quakesView = new QuakesView();
    }
    init() {
        this.parentElement = document.querySelector(this.parent);
        this.initPos();
        this.getQuakesByRadius(100);
    }
    initPos() {
        if (this.position.lat === 0) {
            try {
                const posFull = getLocation();
                this.position.lat = posFull.coords.latitude;
                this.position.lon = posFull.coords.longitude;
                //console.log(posFull);
            } catch (error) {
                console.log(error);
            }
        }
    }

    getQuakesByRadius(radius = 100) {
        //set loading message
        this.parentElement.innerHTML = '<li>Loading</li>';
        // get the list of quakes in the specified radius of the location
        const quakeList = this.quakes.getEarthQuakesByRadius(
            this.position,
            radius = 100
        );
        // render the list to html
        this.quakesView.renderQuakeList(quakeList, this.parentElement);
        // add a listener to the new list of quakes to allow drill down in to the details
        this.parentElement.addEventListener('touchend', e => {
            this.getQuakeDetails(e.target.dataset.id);
        });
    }
    getQuakeDetails(quakeId) {
        const quake = this.quakes.getQuakeById(quakeId);
        this.quakesView.renderQuake(quake, this.parentElement);
    }
}