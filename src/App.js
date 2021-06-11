import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./App.css";
import Header from "./components/Header";
import TheMain from "./components/TheMain";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch("/Asset/battles.csv");
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

  console.log(data);

  return (
    <div className="App">
      <div className="app"></div>
      <Header />
      <TheMain />
      <Footer />
    </div>
  );
}

export default App;
