import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);

app
  .load('https://prod.spline.design/eLCsudaK1jBRVjNo/scene.splinecode')
  .then(() => {
    
    //shirt buttons
    const whiteShirt = document.getElementById('whiteShirt');
    whiteShirt.addEventListener('click', () => {
        app.setVariables({
            shirtOrange: 0, shirtWhite: 1, shirtRed: 0, shirtGray: 0,
        });
    });
    const orangeShirt = document.getElementById('orangeShirt');
    orangeShirt.addEventListener('click', () => {
        app.setVariables({
            shirtOrange: 1, shirtWhite: 0, shirtRed: 0, shirtGray: 0,
        });
    });
    const redShirt = document.getElementById('redShirt');
    redShirt.addEventListener('click', () => {
        app.setVariables({
            shirtOrange: 0, shirtWhite: 0, shirtRed: 1, shirtGray: 0,
        });
    });
    const grayShirt = document.getElementById('grayShirt');
    grayShirt.addEventListener('click', () => {
        app.setVariables({
            shirtOrange: 0, shirtWhite: 0, shirtRed: 1, shirtGray: 1,
        });
    });

    //skirt buttons
    const whiteSkirt = document.getElementById('whiteSkirt');
    whiteSkirt.addEventListener('click', () => {
        app.setVariables({
            skirtOrange: null, skirtWhite: 63.29, skirtRed: null, skirtGray: null,
        });
    });
    const orangeSkirt = document.getElementById('orangeSkirt');
    orangeSkirt.addEventListener('click', () => {
        app.setVariables({
            skirtOrange: 63.29, skirtWhite: null, skirtRed: null, skirtGray: null,
        });
    });
    const redSkirt = document.getElementById('redSkirt');
    redSkirt.addEventListener('click', () => {
        app.setVariables({
            skirtOrange: null, skirtWhite: null, skirtRed: 63.29, skirtGray: null,
        });
    });
    const graySkirt = document.getElementById('graySkirt');
    graySkirt.addEventListener('click', () => {
        app.setVariables({
            skirtOrange: null, skirtWhite: null, skirtRed: null, skirtGray: 63.29,
        });
    });

    //shoes buttons
    const whiteShoes = document.getElementById('whiteShoes');
    whiteShoes.addEventListener('click', () => {
        app.setVariables({
            shoesOrange: null, shoesWhite: -25.49, shoesRed: null, shoesGray: null,
        });
    });
    const orangeShoes = document.getElementById('orangeShoes');
    orangeShoes.addEventListener('click', () => {
        app.setVariables({
            shoesOrange: 25.49, shoesWhite: null, shoesRed: null, shoesGray: null,
        });
    });
    const redShoes = document.getElementById('redShoes');
    redShoes.addEventListener('click', () => {
        app.setVariables({
            shoesOrange: null, shoesWhite: null, shoesRed: -25.49, shoesGray: null,
        });
    });
    const grayShoes = document.getElementById('grayShoes');
    grayShoes.addEventListener('click', () => {
        app.setVariables({
            shoesOrange: null, shoesWhite: null, shoesRed: null, shoesGray: -25.49,
        });
    });



    let buttons = document.querySelectorAll('#orangeShirt, #redShirt, #whiteShirt, #grayShirt, #orangeSkirt, #redSkirt, #whiteSkirt, #graySkirt, #orangeShoes, #redShoes, #whiteShoes, #grayShoes');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            e.preventDefault();
        });
    });

  });
