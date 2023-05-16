import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../styles/AllExpenditures.css';

export default function AllExpenditures() {

  const [expenditures, setExpenditures] = useState([]);
  const [totalExpenditure, setTotalExpenditure] = useState("Loading...");

  function expenditureDelete(id) {
    console.log(id);
    axios.delete(`http://localhost:8070/expenditure/delete/${id}`)
      .then((res) => {
        console.log("deleted", res);
        document.getElementById(`tr_${id}`).style.display = "none";
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  function printFile() {
    window.print();
  }

  useEffect(() => {
    function getExpenditures() {
      axios.get("http://localhost:8070/expenditure/")
        .then((res) => {
          setExpenditures(res.data);
          setTotalExpenditure(calculateTotalExpenditure(res.data));
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getExpenditures();
  }, []);

  const calculateTotalExpenditure = (expenditures) => {
    let total = 0;
    for (let i = 0; i < expenditures.length; i++) {
      total += parseInt(expenditures[i].vamount.replace(/,/g, ""));
    }
    return total.toLocaleString();
  }

  return (
    <div className="container">
      <h1>Expenditure List<button className="print-button" onClick={() => printFile()}>Print</button></h1>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Code No</th>
              <th scope="col">Description</th>
              <th scope="col" style={{ textAlign: 'right' }}>Value Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenditures.map(expenditure =>
              <tr id={`tr_${expenditure._id}`} key={expenditure._id}>
                <td>{expenditure.code}</td>
                <td>{expenditure.description}</td>
                <td style={{ textAlign: 'right' }}>{expenditure.vamount}</td>
                <td><Link to={`/expense/update/${expenditure._id}`}><button className="btn-primary update-button">Update</button></Link></td>
                <td><button className="btn-primary delete-button" onClick={() => expenditureDelete(expenditure._id)}>Delete</button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
            <td colSpan="2"></td>
              <td className="value-field">
                <h5>
                  <label htmlFor="expenditure">Total:</label>
                  <input type="text" id="expenditure" name="expenditure" disabled value={totalExpenditure} />
                </h5>
              </td>
              <td colSpan="5" className="table-footer">
                <Link to="/expense/add">
                <button className="btn-primary btn-add">Add Item</button>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

// {totalExpenditure}