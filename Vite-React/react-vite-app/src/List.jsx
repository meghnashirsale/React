

import "./App.css";
import { useState } from "react";

function List() {
  let items = ["One", "Two", "Three", "Four", "Five"];
  let selctedIndex=0;
  const [selectedIndex ,setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item,index) => (
          <li 
          className={selectedIndex === index ? "list-group-item active":"list-group-item"} 
           key={item}onClick={()=>{setSelectedIndex(index);}}>{item}
           </li>
        ))}
      </ul>
    </>
  );
}

export default List;
