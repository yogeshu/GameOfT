import React from "react";

export default function Battles({ list,getCount }) {
  return (
    <div className="container py-5" id="Battle">
       <div className="card">
           <div className="card-body">
               <p className="bg-blue">
                   Number Of Battles 
               </p>
           {getCount}
           </div>
       </div>
     
      {list.map((c, index) => {
        return (
          <div className="card bg-dark text-white" key={index}>
            <div className="card-body">{ c.length >0 ? c:  <span className="text-warning"> " No found" </span>}</div>
          </div>
        );
      })}
    </div>
  );
}
