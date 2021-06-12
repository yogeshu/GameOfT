import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./App.css";
import Header from "./components/Header";
import TheMain from "./components/TheMain";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [count, setCount] = useState([]);
  const [search, setSearch] = useState("");
  const [battles, setBattles] = useState([]);

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

  // we dont need this code as we can take data from first useEffect but for creating the function I have not use DRY
  useEffect(() => {
    async function getList() {
      setLoading(true);
      const response = await fetch("battles.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const List = results.data.map((c, index) => {
        return c.location;
      });
      setList(List);
      setLoading(false);
    }
    getList();
  }, []);
  // we dont need this code as we can take data from first useEffect but for creating the function I have not use DRY

  useEffect(() => {
    async function getCount() {
      setLoading(true);
      const response = await fetch("battles.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const Count = results.data.map((c, index) => {
        return c.battle_number;
      });
      setCount(Count);
      setLoading(false);
    }
    getCount();
  }, []);
  const getList = list.map((c) => {
    return { c };
  });
  const getCount = Math.max.apply(0, count);
  // const getCount = count.map(battles=>{
  //   return <li key={battles}>{battles} </li>
  // })
  // console.log(getList)
  const lowercasedFilter = search.toLowerCase();
  const filterData = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(lowercasedFilter)
    );
  });
  console.log(list);
  //  another way of doing the same thing //

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
  //   const getCount = filterData.map(battles=>{
  //     return <li key={battles}>(battles.battle_number) </li>
  //   })
  // }
  // getCount();
  // const getList = data.map(battles =>{
  //   return console.log(battles.name)
  // })

  console.log(data);

  const searchData = (e) => {
    setSearch(e.target.value);

    // let suggestions = [];
    // if(value.length > 0) {
    //   const regex = new RegExp(`^${value}`, 'i');
    //   suggestions = this.items.sort().filter(v => regex.test(v));
    // }
    // this.setState(() => ({suggestions, text: value}));
  };

  return (
    <div className="App">
      <Header />

      {/* <input value={search} onChange={searchData} />

      <hr />
      {filterData.length > 0 &&
        filterData.map((c, index) => {
          return (
            <div key={index}>
              {c.location} {c.defender_king} {c.attacker_king}
            </div>
          );
        })} */}

      <hr />
      {/* {list.map((c, index) => {
        return <li key={index}>{c} </li>;
      })} */}
      {/* {filterData.length >0 && filterData.map((c,index)=>{
     return
         <div key={index}>
              {c.location}
           </div>
       })} */}
      <TheMain
        filterData={filterData}
        list={list}
        search={search}
        searchData={searchData}
        getCount={getCount}
      />
      <Footer />
    </div>
  );
}

export default App;
