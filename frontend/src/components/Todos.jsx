//   todos[] =[      => it is basically a arrays of object and we need to render all the objects from the backend.
// {
//     title:
//     description:
//     completed:
// }, ...Todos.]

export function Todos({todos}){
    return <div>
        {todos.map(function (todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? true : "mark as completed"}</button>
            </div>
        })}
    </div>
       
    
}