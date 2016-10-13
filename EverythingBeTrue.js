
function truthCheck(collection, pre) {
  
  //console.log(collection.length);
  
  function isNaN(x)
{ 
    return x != x; 
}

  
  for(i=0;i<collection.length;i++)
  {
  	
  	if(collection[i].hasOwnProperty(pre)){
  		//console.log(collection[i][pre]);
  		if(collection[i][pre] === undefined || collection[i][pre] === null || collection[i][pre] === '' || collection[i][pre] === 0 || isNaN(collection[i][pre]) === true)
  		{
  			console.log(collection[i].hasOwnProperty(pre));
  			return false;
  			}
  	}
  	else{
  		//console.log(collection[i].hasOwnProperty(pre));
  		return false;
  	}
 }
  
  return true;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single")
