import React ,{useEffect,useState} from "react";
import QuestionItem from "./QuestionItem"
function QuestionList() {
  const [questions,setQuestions]=useState([])
const[makeUpdate,setMakeUpdate]=useState(false)

function onUpdate(){
  setMakeUpdate(!makeUpdate)
}

useEffect(()=>{
fetch('http://localhost:4000/questions')
.then((data)=>data.json())
.then((finalQuestion)=>{
  setQuestions(finalQuestion)
  console.log(finalQuestion)
})
   
},[makeUpdate])



  return (




    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questions.map((question)=>{
            return(
<QuestionItem onUpdate={onUpdate} question={question}  />
            )
          })
        }
      </ul>
    </section>
  );
}

export default QuestionList;
