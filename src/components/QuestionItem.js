import React,{useState} from "react";

function QuestionItem({ question,onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
console.log(id)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
const [newCorrect,setNewCorrect]=useState([])

// function handleAnswerChange(){

//   setNewCorrect({correctAnswer:e.event.value})
//   console.log(newCorrect);
// }
function getIndex(itemReceived){
  answers.map((item,index)=>{
if(item===itemReceived){
  return index
}
else{
  return "None"
}
  })
}


function changeAnswer(event){

  console.log(id)
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     correctIndex: event.target.value,
    }),
  })
  .then((data)=>data.json())
  .then(()=>{
    onUpdate()
  });
// console.log(correctNew)
}


  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"DELETE"
    })
    .then((data)=>data.json())
    .then(()=>{
      onUpdate()
    });

   
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select  onChange={changeAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
