x = 0;
y = 0;
drawCircle = "";
drawRect = "";
drawSquare = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "O sistema está ouvindo, pode falar";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida como " + content;
    if(content == "círculo"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Desenhando um círculo";
        drawCircle = "set";
    }
    if(content == "retângulo"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Desenhando um retângulo";
        drawRect = "set";
    }
    if(content == "quadrado"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Desenhando um quadrado";
        drawSquare = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(drawCircle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Um círculo foi desenhado";
        drawCircle = "";
    }
    if(drawRect == "set"){
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Um retângulo foi desenhado";
        drawRect = "";
    }
    if(drawSquare == "set"){
        rect(x, y, 50, 50);
        document.getElementById("status").innerHTML = "Um quadrado foi desenhado";
        drawSquare = "";
    }
}