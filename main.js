
const questions=[
  
  {  question:"How Many People are in          Bangladesh?",
     answers:[
                {
                  text:"about 10 crore",
                  correct:'false'
                },
    
               {
                  text:"about 20 crore",
                  correct:'true'
                },
                
                {
                  text:"about 30 crore",
                  correct:'false'
                },
    
               {
                  text:"about 40 crore",
                  correct:'false'
                },
             
             ]
    
    
  },
  
  
  
 {  question:"What is the capital of Bangladesh",
     answers:[
                {
                  text:"Dhaka",
                  correct:'true'
                },
    
               {
                  text:"Islamabad",
                  correct:'false'
                },
                
                {
                  text:"new York",
                  correct:'false'
                },
    
               {
                  text:"New Delhi",
                  correct:'false'
                },
             
             ]
    
    
  },
  
{  question:"Who is the present prime minister of Bangladesh",
     answers:[
                {
                  text:"Khaleda Jia",
                  correct:'false'
                },
    
               {
                  text:"Arshad Khan",
                  correct:'false'
                },
                
                {
                  text:"Norendro Mudhi",
                  correct:'false'
                },
    
               {
                  text:"Sheikh Hasina",
                  correct:'true'
                },
             
             ]
    
    
  },
  
  
  
 {  question:"When did the Bangladesh get Freedom?",
     answers:[
                {
                  text:"1975",
                  correct:'false'
                },
    
               {
                  text:"1952",
                  correct:'false'
                },
                
                {
                  text:"1969",
                  correct:'false'
                },
    
               {
                  text:"1971",
                  correct:'true'
                },
             
             ]
    
    
  }
  
  
  ]





const questionGoes=document.getElementById("questionGoes");
const answerBtns=document.getElementById("answerButtons");
const nextBtn=document.getElementById("next-btn");


let counterIndex=0;
let score=0;



function quizStart(param) {
  counterIndex=0;
  score=0;
  
  nextBtn.innerHTML="Next";
  showQuestion();
}






function showQuestion() {
  nextBtn.style.display='none'
  
  while (answerBtns.firstChild) {
   answerBtns.removeChild(answerBtns.firstChild)
  }
  
  let questionInd=questions[counterIndex];
  let questionNo=counterIndex + 1;
  questionGoes.innerHTML=questionNo +':' + questionInd.question;
  
  questionInd.answers.forEach((answer)=>{
    
    const button=document.createElement("button")
    button.innerHTML=answer.text;
    button.classList.add("btn");
    button.dataset.correct=answer.correct;
    answerBtns.appendChild(button);
    
    button.addEventListener("click",function(e){
      
      let meBtn=e.target;
      
      nextBtn.style.display="block";
      
      if(meBtn.dataset.correct==="true"){
      score++;
      meBtn.classList.add("correct")
      }
      
      
      else {
        meBtn.classList.add("incorrect");
        }
        
       Array.from(answerBtns.children).forEach((button)=>{
         
         if (button.dataset.correct==='true') {
           button.classList.add("correct")
         }
         
         
         button.disabled=true;
         
       })
     
      
    }
    

      )
    
  })
  
}


quizStart();

nextBtn.addEventListener("click",function() {
 
 counterIndex++;
if(counterIndex < 4 ){
  
showQuestion()
  
}
else {
  
  
nextBtn.style.display='none';
questionGoes.innerHTML="Your Score is " + score + " Out of 4";
  
  
while (answerBtns.firstChild) {
   answerBtns.removeChild(answerBtns.firstChild)
  }  
}
})

  