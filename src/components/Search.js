import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
export default function Search({ filterData, search, searchData }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  const filMenu = filterData;
  return (
    <div className="responsive-table">
     

      <input type="text" placeholder="Search Battles" value={search} onChange={searchData} />

      {/* <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Location &nbsp;(g)</TableCell>
              <TableCell align="center">Defender King&nbsp;(g)</TableCell>
              <TableCell align="center">Attacker King &nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.defender_king}</TableCell>
                <TableCell align="center">{row.attacker_king}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      <table className="table table-responsive-sm m-auto">
        {" "}
        <tr>
          <th> Location</th>
          <th> Defender King </th>
          <th> Attacker King </th>
        </tr>
        {filterData.length > 0
          ? filterData.map((c, index) => {
              return (
                <tr key={index}> 
                          
                  <td> {   c.location} </td> <td> { c.defender_king.length > 0 ?  c.defender_king: "-"} </td>{" "}
                  <td> {c.attacker_king.length >0 ? c.attacker_king: "-"} </td>
                </tr>
              );
            })
          : "No result"}
      </table>
    </div>
  );
}
