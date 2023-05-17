import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../styles/AllIncomes.css';

export default function AllIncomes() {

    const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalincome] = useState("Loading...");

  function incomeDelete(id) {
    console.log(id);
    axios.delete(`http://localhost:8070/incomes/delete/${id}`)
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
    function getIncomes() {
      axios.get("http://localhost:8070/incomes/")
        .then((res) => {
          setIncomes(res.data);
          setTotalincome(calculateTotalIncome(res.data));
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getIncomes();
  }, []);

  const calculateTotalIncome = (incomes) => {
    let total = 0;
    for (let i = 0; i < incomes.length; i++) {
      total += parseInt(incomes[i].pamount.replace(/,/g, ""));
    }
    return total.toLocaleString();
  }

  return (
    <div className="container">
      <h1>Income List<button className="print-button" onClick={() => printFile()}>Print</button></h1>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col" style={{ textAlign: 'right' }}>Product Value</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map(income =>
              <tr id={`tr_${income._id}`} key={income._id}>
                <td>{income.itemid}</td>
                <td>{income.name}</td>
                <td>{income.quantity}</td>
                <td style={{ textAlign: 'right' }}>{income.pamount}</td>
                <td><Link to={`/income/update/${income._id}`}><button className="btn-primary update-button">Update</button></Link></td>
                <td><button className="btn-primary delete-button" onClick={() => incomeDelete(income._id)}>Delete</button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
            <td colSpan="3"></td>
              <td className="value-field">
                <h5>
                  <label htmlFor="income">Total:</label>
                  <input type="text" id="income" name="income" disabled value={totalIncome} />
                </h5>
              </td>
              <td colSpan="5" className="table-footer">
                <Link to="/income/add">
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