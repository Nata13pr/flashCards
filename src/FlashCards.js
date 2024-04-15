import "./styles.css";
import questions from './data'

export default function FlashCards(){
    const [selectedId, setSelectedId] = useState(null);

    function handleClick(id){
        selectedId(id !== selectedId ? id :null)
    
        return(
            <div className="FlashCards">
                {questions.map((question)=>(
                    <div 
                    key={question.id}
                    onClick={()=>handleClick(question.id)}
                    className={question.id===selectedId ? 'selectedId' : ''}
                    >
                        <p>
                            {question.id===selectedId ? question.answer : question.question}
                        </p>
                    </div>
                ))}
            </div>
        )
    }
}