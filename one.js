// array of objects
const fruits = [
    { name: 'Apple', color: 'Red', quantity: 10 },
    { name: 'Banana', color: 'Yellow', quantity: 5 },
    { name: 'Orange', color: 'Orange', quantity: 8 }
  ];
  
  //  filter fruits by color
  const filterByColor = (fruitsArray, color) => {
    return fruitsArray.filter(fruit => fruit.color === color);
  };
  
 
  