let data
let x
let y
let input, sendButton
let answer=""


function preload(){
  data = loadJSON('chatbot.json')
  
}

function setup() {
  createCanvas(400, 400);
//   x=int(random(5))
//   y=int(random(2))
  
//   console.log(data.brain[y].responses[x])
  
  input=createInput()
  input.position(50,50)
  sendButton=createButton("Enter")
  sendButton.position(50,100)
  
  sendButton.mousePressed(sendMsg)
  
}

function sendMsg(){
  //input.value() gets the input of the text box thing
  let inputStr=input.value().toLowerCase()
  console.log(inputStr)
  
  //loop through entire brain array
  //once match found, break out of loop
  //if no matches, respond w/ catchall
  loop1: for(let i=0; i<data.brain.length;i++){
    loop2: for (let j=0; j<data.brain[i].triggers.length;j++){
      
      if(inputStr.indexOf(data.brain[i].triggers[j])!==-1){
        //we have match
        answer=random(data.brain[i].responses)
        break loop1
        
      }else{
        answer=random(data.catchall)
        
      }
      
    }
    
  }
  
}

function draw() {
  background(220);
  
  text(answer,50,200,300,300)
  
}