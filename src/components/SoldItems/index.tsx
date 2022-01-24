import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

export type SoldItemEntity = {
    id: number;
    item_name: string;
    no_of_items: number;
    seller_reference: string;
    updated_at: string;
  };
const SoldItems = () => {
    const getItemsURL = 'http://localhost:3000/sold-items/';
    const [data, setData] = useState<SoldItemEntity[]>([])
    useEffect( ()=>{
        const getItems = async() => {
            const result = await axios.get(getItemsURL)
            setData(result.data);
        };
        getItems();
    }, []);
    return(<><p> <b>Table: SoldItemEntity</b></p><Table responsive="sm" >
        <thead>
          <tr>
            <th>id</th>
            <th>Item Name</th>
            <th>No of Items</th>
            <th>seller_reference</th>
            <th>total sold amount</th>
          </tr>
        </thead>
        <tbody>
          {data&& data.map((item:SoldItemEntity)=>(
          <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item_name}</td>
              <td>{item.no_of_items}</td>
              <td>{item.seller_reference}</td>
              <td>{item.seller_reference}</td>
              </tr>)
          )}
        </tbody>
      </Table></>)
}
export default SoldItems;