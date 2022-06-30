function setup() {

    createCanvas(400, 400); // Cria a tela
   
    background(220); // Preenche a tela com uma cor
   
   }
   
   function draw() {
   
    strokeWeight(20); // Espessura da linhha
   
    x = random(0,400); // Atribui valores randômicos a x
   
    y = random(0,400); // Atribui valores randômicos a y
   
    r = random(0,255); // Atribui valores ao campo Red
   
    g = random(0,255); // Atribui valores ao campo Green
   
    b = random(0,255); // Atribui valores ao campo Blue
   
    strokeWeight(random(0,10)) // Valores randômicos à espessura
   
    stroke(r,g,b) // Pintar forma com padrão RGB
   
    point(x,y);
   
   }
   
console.log(setup)   