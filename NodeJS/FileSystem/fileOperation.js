//import { readFile } from 'node:fs';
const  fs = require('fs');
const path  = require('path')

// read file

fs.readFile(path.join(__dirname,'sample.txt'),'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 


// write file 

fs.writeFile(path.join(__dirname,'sample2.txt'),'Hi, File write Operation.', (err) => {
    if (err) throw err;
    console.log('write Completed');
  }); 
