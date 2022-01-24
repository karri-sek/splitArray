import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

 type ItemType = {
    id: number,
    item_name: string,
    price_currency: string,
    price_amount: number

}
const Items = () => {
    const getItemsURL = 'http://localhost:3000/items/';
    const [data, setData] = useState<ItemType[]>([])
    useEffect( ()=>{
        const getItems = async() => {
            const result = await axios.get(getItemsURL)
            setData(result.data);
        };
        getItems();
    }, []);
    return(<><p> <b>Table: Items</b></p><Table responsive="sm" >
        <thead>
          <tr>
            <th>id</th>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {data&& data.map((item:ItemType)=>(
          <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item_name}</td>
              <td>{item.price_amount}</td>
              <td>{item.price_currency}</td>
              </tr>)
          )}
        </tbody>
      </Table></>)
}
export default Items;