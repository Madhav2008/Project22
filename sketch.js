const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, helicopter;

function setup() {
    heli = loadImage("helicopter.png");
    package = loadImage("package.png");
}

function setup() {
    createCanvas(1535, 710);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(width / 2, 700, width, 20, ground_options);
    World.add(world, ground);

    var ball_options = {
        restitution: 1.0
    }

    ball = Bodies.circle(width / 2, 100, 20, ball_options);
    World.add(world, ball);
    console.log(ground);

}

function draw() {
    background("yellow");
    Engine.update(engine);

    helicopter = createSprite(width / 2, 200, 500, 20);
    helicopter.shapeColor = "red";

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 20);

    drawSprites();

    // ball.addImage(package);
    // helicopter.addImage(heli);
} // helicopter.addImage(heli);