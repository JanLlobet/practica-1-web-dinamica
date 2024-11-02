// Test botó enviar
document.getElementById('sendFormButton').addEventListener('click', function () {
    alert('Form sent!');
});

// P5js
//Jan Llobet Roqué

let caraColor, ullColor, bocaColor, braçColor;
//variables de colors per les parts del robot


function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas-container");

    /* Variables de colors: 
    Cada variable representa el color d'una part diferetn del robot*/
    caraColor = "#0D0000";
    ullColor = "#FFC107";
    bocaColor = "#FFEB3B";
    braçColor = "#795548";
}

function draw() {
    background(220);

    // Aquí he utilitzat la funció personalitzada amb diferents colors
    dibujarRobot(caraColor, ullColor, bocaColor, braçColor);

    // I tornem a utilitzar un funció personalitzada amb pas de paràmetres novament
    dibujarRobot("#000000", "#FFC107", "#FFEB3B", "#795548");
}

function dibujarRobot(cara, ull, boca, braç) {
    fill("#383A3C");
    rect(280, 140, 275, 295);
    noStroke();
    //Cara del robot

    fill(cara);
    rect(280, 150, 255, 285);
    noStroke();

    fill(ull);
    arc(320, 250, 130, 100, 0, PI + QUARTER_PI, OPEN);
    circle(500, 250, 100);
    //ull

    fill("#FFEB3B");
    arc(330, 245, 130, 100, 0, PI + QUARTER_PI, OPEN);
    circle(495, 250, 95);
    //sombra ulls

    fill("#FF0000");
    circle(320, 250, 30);
    circle(500, 250, 30);
    fill("#FFFFFF");
    circle(325, 250, 10);
    circle(497, 250, 10);
    //iris

    fill(boca);
    square(290, 362, 55);
    rect(350, 342, 55, 85);
    rect(410, 342, 55, 85);
    square(470, 362, 55);
    //boca

    fill(boca);
    rect(290, 382, 235, 15);
    //boca pt2

    fill("#383A3C");
    rect(368, 490, 130, 310);
    fill("#000000");
    rect(368, 500, 110, 300);
    fill(boca);
    triangle(356, 435, 428, 675, 486, 435);
    fill("#000000");
    rect(378, 560, 90, 185);
    fill(boca);
    rect(410, 520, 20, 365);
    //cos

    fill("#000000");
    rect(158, 580, 210, 65);
    rect(158, 380, 45, 200);
    //braç dret

    fill("#383A3C");
    rect(508, 560, 65, 280);
    rect(478, 560, 50, 65);
    //braç esquerra sombra

    fill("#000000");
    rect(508, 580, 45, 280);
    rect(478, 580, 50, 65);
    //braç esquerra

    fill(braç);
    rect(168, 355, 90, 35);
    fill("#9E9E9E");
    rect(50, 355, 118, 25);
    triangle(50, 355, 50, 380, 20, 355);
    fill("#9E9E9E");
    circle(240, 370, 10);
    circle(185, 370, 10);
    //ganivet

    // Utilitzo beginShape i endShape per fer una sombra del coll
    fill("#FFC107");
    beginShape();
    vertex(425, 500);
    vertex(455, 560);
    vertex(392, 560);
    endShape(CLOSE);
    // Color de la sombra del coll
}