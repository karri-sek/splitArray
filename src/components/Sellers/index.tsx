import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

export type SellerEntity = {
    id: number;
    seller_location: string;
    seller_reference: string;
    updated_at: string;
  };
const Sellers = () => {
    const getItemsURL = 'http://localhost:3000/sellers/';
    const [data, setData] = useState<SellerEntity[]>([])
    useEffect( ()=>{
        const getItems = async() => {
            const result = await axios.get(getItemsURL)
            setData(result.data);
        };
        getItems();
    }, []);
    return(<><p> <b>Table: Sellers</b></p><Table responsive="sm" >
        <thead>
          <tr>
            <th>id</th>
            <th>Seller name</th>
            <th>Seller location</th>
          </tr>
        </thead>
        <tbody>
          {data&& data.map((item:SellerEntity)=>(
          <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.seller_reference}</td>
              <td>{item.seller_location}</td>
              </tr>)
          )}
        </tbody>
      </Table></>)
}
export default Sellers;