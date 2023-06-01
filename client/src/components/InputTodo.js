import React, { Fragment, useState } from 'react'

function InputTodo() {


    const [description, setDescription] = useState("Hello")

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className='text-center  mt-5'>Todo List</h1>
            <form className='d-flex mt-5 input-form' onSubmit={onSubmitForm}>
                <input type='text' className='form-control input-text' value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;