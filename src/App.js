import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./App.css";
import Header from "./components/Header";
import TheMain from "./components/TheMain";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState('')
  const [battles,setBattles] = useState([])
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch("battles.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setData(rows);
      setLoading(false);
    }
    getData();
  }, []);
  const lowercasedFilter = search.toLowerCase();
  const filterData = data.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toLowerCase().includes(lowercasedFilter)
    );
  });
  // const filterData =  data.filter((types) => {
  //   return (
  //     types.location
  //       .toString()
  //       .toLowerCase()
  //       .indexOf(search.toLocaleLowerCase()) !== -1 ||
  //     types.attacker_king.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1 ||
  //     types.defender_king
  //       .toString()
  //       .toLowerCase()
  //       .indexOf(search.toLocaleLowerCase()) !== -1 ||
  //     types.location
  //       .toString()
  //       .toLowerCase()
  //       .indexOf(search.toLocaleLowerCase()) !== -1 ||
  //     types.battle_type
  //       .toString()
  //       .toLowerCase()
  //       .indexOf(search.toLocaleLowerCase()) !== -1
      
  //   );
  //   setSearch("")
  // });
  // get list of the battles locaiton 
  // function getList (){
  //   const getList = filterData.map(battles =>{
  //     return <li key={battles.location}> {battles.location} </li>
  //   })
  // }
  // getList();

  // // get list of the battles Count // number of battles 
  // function getCount (){
  //   const count = filterData.map(battles=>{
  //     return console.log(battles.battle_number)
  //   })
  // }
  // getCount();
  // const getList = data.map(battles =>{
  //   return console.log(battles.name)
  // })


  console.log(data);

 const searchData  = (e) =>{
    setSearch(e.target.value)
    
 }


 
 
  return (
   
   <div className="App">
      <div className="app"></div>
      <Header />
      
      <input value={search} onChange={searchData}/>
     { filterData.length > 0 && filterData.map((c,index)=>{
     return   <div key={index}>
              {c.location} {c.defender_king} {c.attacker_king}
           </div>
       })}
      
        {/* {filterData.length >0 && filterData.map((c,index)=>{
     return
         <div key={index}>
              {c.location}
           </div>
       })} */}
      <TheMain />
      <Footer />
    </div>
  );
}

export default App;
