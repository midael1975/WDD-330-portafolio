import QuakesController from './QuakesController.js';


const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.getQuakesByRadius();