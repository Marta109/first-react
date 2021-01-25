class Animal {
  constructor(posX, posY, name, pos,size) {
    this.posX = posX;
    this.posY = posY;
    this.name = name;
    this.pos = pos;
    this.size=size;
  }
  move = () => {
    return Math.floor(Math.random() * (this.posX - this.posY)) + this.posY;
  };
  color=()=>{
 let a='#'+ Math.floor(Math.random() * 16777215).toString(16);
   return a;
  };
}

const Rubbit = new Animal(15, 30, "Rabbit",0 ,15);
const Kenguru = new Animal(10, 40, "Kenguru",0,20);

function setup() {
  createCanvas(600, 400);
  background("grey");
   stroke(255, 100);
  frameRate(10);

  strokeWeight(6);
  line(580, 600, 580, 0);
}

function draw() {
  Rubbit.pos += Rubbit.move();
 Kenguru.pos += Kenguru.move();

fill(Rubbit.color());
  ellipse(Rubbit.pos, 150+(Rubbit.move()/2), Rubbit.size, Rubbit.size);

fill(Kenguru.color())
  rect(Kenguru.pos, 300+Kenguru.move(), Kenguru.size, Kenguru.size);

  if (Rubbit.pos > width - 37) {
    noLoop();
    alert(`Winner is ${Rubbit.name}`);
  }

  if (Kenguru.pos > width - 37) {
    noLoop();
    alert(`Winner is ${Kenguru.name}`);
  }
}

