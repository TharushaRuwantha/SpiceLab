import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import '../../styles/Statements.css';

export default function Statements() {
  const [expenditures, setExpenditures] = useState('Loading...');
  const [totalincome, setTotalincome] = useState('Loading...');
  const [netIncome, setNetIncome] = useState('Loading...');

  useEffect(() => {
    axios
      .get('http://localhost:8070/expenditure/expenditures')
      .then((res) => {
        setExpenditures(parseInt(res.data).toLocaleString());
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('http://localhost:8070/incomes/totalincome')
      .then((res) => {
        setTotalincome(parseInt(res.data).toLocaleString());
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (expenditures !== 'Loading...' && totalincome !== 'Loading...') {
      const netIncomeValue =
        parseInt(totalincome.replace(/,/g, '')) -
        parseInt(expenditures.replace(/,/g, ''));
      const formattedNetIncome = netIncomeValue.toLocaleString();
      setNetIncome(formattedNetIncome);
    }
  }, [expenditures, totalincome]);

  return (
    <div className="statement-container">
      <Card className="statement-card">
        <CardContent className="statement-content">
          <Typography variant="h5" component="div">
            Total Income
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <input
              type="text"
              id="totalIncome"
              name="totalIncome"
              disabled
              value={totalincome}
            />
          </Typography>
        </CardContent>
      </Card>

      <Card className="statement-card">
        <CardContent className="statement-content">
          <Typography variant="h5" component="div">
            Expenditure
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <input
              type="text"
              id="expenditure"
              name="expenditure"
              disabled
              value={expenditures}
            />
          </Typography>
        </CardContent>
      </Card>

      <Card className="statement-card">
        <CardContent className="statement-content">
          <Typography variant="h5" component="div">
            Net Profit
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <input
              type="text"
              id="netIncome"
              name="netIncome"
              disabled
              value={netIncome}
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}