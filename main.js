function preload(){

}
function draw(){
    image(vd, 0, 0, 400,400);
    // circulos superiores
    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(20, 30, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(70, 30, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(120, 30, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(170, 30, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(220, 30, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(270, 30, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(320, 30, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(370, 30, 30);

    //circulos inferiores

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(20, 380, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(70, 380, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(120, 380, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(170, 380, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(220, 380, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(270, 380, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(320, 380, 30);

    fill(1, 12, 16);
    stroke(102, 125, 133);
    circle(370, 380, 30);

    rect(10, 50, 35, 310);
    rect(350, 50, 35, 310);
}
function setup(){
    cnv = createCanvas(400, 400);
    cnv.position(400, 160);
    vd = createCapture(VIDEO);
    vd.size(400, 400);
    vd.hide();
}