import { useState } from "react";
import { TodoList } from "./TodoList";
export const Todo = () => {
  
  const [value, setValue] = useState({todo:''});
  const [values, setValues] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValues(() => ([
          ...values,
          value
    ]));
    setValue({todo:''})
  };

  const handleChange = (event) => {
    if (event.target.value) {
      setValue({
        [event.target.name]: event.target.value,
        active: true
      })
    }
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>Todo</div>

          <label htmlFor="todo">
            <input type="text" id="todo" name="todo" onChange={handleChange} value={value.todo}></input>
          </label>
          <button type="submit" >Add</button>
        </form>
        <br />
        <div>
          <TodoList items={values} />
        </div>
      </div>
    </>
  );
};
