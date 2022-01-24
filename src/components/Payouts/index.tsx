import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

export type PayoutEntity = {
    id: number;
    seller_reference: string;
    amount: number;
    currency: string;
  };
const Payouts = () => {
    const getItemsURL = 'http://localhost:3000/payouts/';
    const [data, setData] = useState<PayoutEntity[][]>([])
    useEffect( ()=>{
        const getItems = async() => {
            const result = await axios.get(getItemsURL)
            setData(result.data);
        };
        getItems();
    }, []);
    return(<><p> <b>Table: Payouts</b></p><Table responsive="sm" >
        <thead>
          <tr>
            <th>Seller name</th>
            <th>payout amount</th>
            <th>currency</th>
          </tr>
        </thead>
        <tbody>
          {data&& data.map((item:PayoutEntity[])=>{
              return((item.map(i=>(<tr><td>{i.seller_reference}</td><td>{i.amount}</td><td>{i.currency}</td></tr>))))
          })}
        </tbody>
      </Table></>)
}
export default Payouts;