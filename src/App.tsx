import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import chunkInputArray from './splitArrayService';
import Result from './components/Result';
import Items from './components/Items';
import Sellers from './components/Sellers';
import SoldItems from './components/SoldItems';

import Payouts from './components/Payouts';


function App() {

  const [chunkSize, setChunkSize] = React.useState<number>(0);
  const [chunkSizeError, setChunkSizeError] = React.useState<string>('');
  const [inputArray, setInputArray]  = React.useState<(string | number | boolean)[]>([]);
  const [result, setResult] = React.useState<(string | number | boolean)[][] | (string | number | boolean)[]>([]);
  const handleChunkSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    const chunkSizeIntValue = parseInt(value);
    if(value.indexOf('.')>=0){
      setChunkSizeError('chunk size should not be a float number')
    } else if(chunkSizeIntValue<=0)
    {
      setChunkSizeError('chunk size should be greater 0')
    }else{
      setChunkSizeError('');
      setChunkSize(chunkSizeIntValue);
    }
  }

  const handleInputArrayElements = (e: React.FocusEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setInputArray(value.split(','));
  }
  const handleSubmit = () => {
    setResult(chunkInputArray(inputArray, chunkSize));
  }
  return (
    <Container>
              <Header/>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Items/>
                  <Sellers/>
                  <SoldItems/>
                  <Payouts/>
                </Row>
                <Button variant="primary"  onClick={handleSubmit} disabled={!!chunkSizeError}>
                  Submit
                </Button>
                <hr/>
                
                 <Result result={result}/>
                </Form>
    </Container>
  );
}

export default App;
