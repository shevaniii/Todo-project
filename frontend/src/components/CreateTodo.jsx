import { useState } from 'react'

export function CreateTodo() {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    return (
        <>

            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" onChange={function (e) {
                const value = e.target.value;
                setTitle(value);
            }

            }></input><br></br>
            <input
                style={
                    {
                        padding: 10,
                        margin: 10
                    }
                } type="text" placeholder="description" onChange={function (e) {
                    const value = e.target.description;
                    setDescription(value);
                }}></input><br></br>
            <button
                style={
                    {
                        padding: 10,
                        margin: 10
                    }
                } onClick={() => {
                    fetch("http://localhost:3000/todos", {
                        method: "POST",
                        body: JSON.stringify({
                            title: Title,
                            description: Description
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                        .then(async function (res) {
                            const json = await res.json();
                            alert("Todo added");
                        })
                }}
            >add a Todo</button>
        </>
    )
}


















