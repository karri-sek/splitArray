

const chunkInputArray = (inputArray:(string | number | boolean)[], chunkSize: number):(string | number | boolean)[][] | (string | number | boolean)[] => {
  const chunksArray: (string | number | boolean)[][] = [];
  const inputArrayLength = inputArray.length;
  let startChunkIndex = 1;
  if(chunkSize <=0) return inputArray;
  const filteredArray = inputArray.filter(i=>i !='');
  if(chunkSize  >= inputArrayLength) return filteredArray;
  filteredArray.forEach((element, index)=> {
      if(index<(chunkSize * startChunkIndex)){
        if(!chunksArray[startChunkIndex - 1]){ chunksArray[startChunkIndex -1] = [];}
      }else{
        startChunkIndex += 1; 
        if(!chunksArray[startChunkIndex - 1]){ chunksArray[startChunkIndex -1] = [];}
    }
      chunksArray[startChunkIndex - 1].push(element);
  });
  return chunksArray;
}

export default chunkInputArray;