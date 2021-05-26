import Game from './src/game.js';
import View from './src/view.js';
import Controller from './src/controller.js';

const root = document.querySelector('#root');

alert('Изучаю JS на практике. Это мое первое приложение реализованное на HTML, CSS и JS.');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;