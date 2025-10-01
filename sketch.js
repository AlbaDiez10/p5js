function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(250, 200, 220);

  // Movimiento global
  rotateY(frameCount * 0.5);
  rotateX(frameCount * 0.3);

  // Permite mover con el mouse
  orbitControl();

  // Crear esfera de cubos
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();
      rotateZ(zAngle);
      rotateX(xAngle);

      // Más cerca del centro
      translate(0, 200, 0);

      // Color dinámico
      let r = 150 + 100 * sin(frameCount * 0.5 + xAngle);
      let g = 100 + 80 * sin(frameCount * 0.3 + zAngle);
      let b = 200;
      stroke(r, g, b);

      // Tamaño aleatorio pero coherente
      let size = 20 + 10 * sin(frameCount + xAngle + zAngle);
      box(size);

      pop();
    }
  }
}
