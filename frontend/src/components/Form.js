import { useState } from "react";


const Form = ()=>{
        // validate title length, characters, etc
      const [title, setTitle] = useState("");
      const [completed, setCompleted] = useState(false);

     return <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
                console.log(e.target.value);
              }}
              value={title}
            />
          </label>
          <label>
            completed
            <input
              type="checkbox"
              onChange={(e) => {
                setCompleted(e.target.checked);
              }}
            />
          </label>
          <button>save</button>
        </form>
}

export default Form