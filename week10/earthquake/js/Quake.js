import { getJSON } from './utilities.js';

export default class Quake {
    constructor() {
        this.baseUrl =
            'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
        // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
        this._quakes = [];
    }
    getEarthQuakesByRadius(position, radius = 100) {
        return this._quakes;
    }
    getQuakeById(id) {
        return this._quakes.features.filter(item => item.id === id)[0];
    }
}