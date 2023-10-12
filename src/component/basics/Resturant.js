import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import Menucard from "../menucard";

const Resturant = () => {

  const [menuData, setmenuData]  = useState(Menu);
  console.log(menuData);
  console.log(setmenuData);
  const filterItem = (category) =>{
    const updatedList = Menu.filter((curElem) => {
    return curElem.category === category;
    });
    setmenuData(updatedList);
  };
 
  return (
    <>
         <nav className="navbar"> 
         <div className="btn-group">
           <button className="btn-group__item" onClick={ () => filterItem("breakfast")}>Breakfast</button>
           <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
           <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
           <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
           <button className="btn-group__item" onClick={() => setmenuData(Menu)}>All</button>
         </div>
         </nav>
    



     <Menucard menuData = {menuData}  />
    </>
  );
};

export default Resturant;
