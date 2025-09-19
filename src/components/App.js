import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);
  
  const handleChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleAddField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const handleRemoveField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log([fields]);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={field.name}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={field.age}
              onChange={(event) => handleChange(index, event)}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              disabled={fields.length === 1}
            >
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddField}>
          Add More..
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
