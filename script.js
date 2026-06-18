async function askAI() {

let question = document.getElementById("question").value;

if(question==""){
return;
}

document.getElementById("answer").innerHTML="Thinking...";

try{

let response = await fetch(
"https://api-inference.huggingface.co/models/google/flan-t5-base",
{
method:"POST",

headers:{
"Authorization":"Bearer YOUR_TOKEN",
"Content-Type":"application/json"
},

body:JSON.stringify({
inputs:question
})

}
);

let data = await response.json();

document.getElementById("answer").innerHTML=data[0].generated_text;

}

catch{

document.getElementById("answer").innerHTML="Error";

}

}
