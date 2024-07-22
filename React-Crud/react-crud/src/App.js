import React, { useEffect, useState } from "react";
import "./App.css";
import { EmployeeData } from "./EmployeeData";

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate]=useState(false)

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    const item = data.find(item => item.id === id);
    if (item) {
      setId(id);
      setFirstName(item.firstName);
      setLastName(item.lastName);
      setAge(item.age);
    }
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete the item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleSave = () => {

     
  };

  const handleUpdate=()=>{

  }
  const handleClear = () => {
    setId(0);
    setFirstName('');
    setLastName('');
    setAge(0);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
        <div>
          <label>
            First Name:
            <input value={firstName} type="text" placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input value={lastName} type="text" placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input value={age} type="number" placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} />
          </label>
        </div>
        <div>
          <button className="btn btn-primary" onClick={()=>handleSave()}>Save</button> &nbsp;
          <button className="btn btn-primary" onClick={()=>handleUpdate()}>Update</button> &nbsp;
          <button className="btn btn-danger" onClick={()=>handleClear()}>Clear</button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>
                  Edit
                </button> &nbsp;
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
