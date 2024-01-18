

export default function TodoList(){
    // my work is what we will write in input it should show in li
    let[todos , setTodos] = useState(["laptop helps"]);
    let[newtodo, setNewTodo] = useState("");

    let addNewTodo =()=>{
        setTodos([...todos, newtodo]);
        setNewTodo("");
    }

    let updateTodoTask =()=>{
        setNewTodo(even.target.value);
    }

    return(
        <>
        <input placeholder="Enter Your Todo Task" value={newtodo} onChange={updateTodoTask}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={addNewTodo}>Add</button>


        <h2>Your Todos</h2>
        <ul>
        {todos.map((todo) => {
            {return <li> {todo}</li>}
            })
        }
        </ul>
        </>
    );   
};