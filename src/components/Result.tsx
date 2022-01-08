import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'

const Result = (resultArray: any) => {
       let displayResult = '';
       const length = resultArray.result.length;
        if(length>0){
            if(!Array.isArray(resultArray.result[0])){
                displayResult += '['+resultArray.result+']';
            }else{
                for(var i = 0; i < length; i++) {
                    var cube = resultArray.result[i];
                    if(Array.isArray(cube)){
                        displayResult += '['+`${cube}` +']' + "    ";
                    }
                   }
            }
        }
        
    return length> 0 ?<InputGroup.Text>{displayResult}</InputGroup.Text>: null
}

export default Result;