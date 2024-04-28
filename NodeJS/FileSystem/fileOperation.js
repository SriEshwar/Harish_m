//import { readFile } from 'node:fs';
//const  fs = require('fs');
const path  = require('path')
const fsPromises = require('fs').promises

// read file

// fs.readFile(path.join(__dirname,'sample.txt'),'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); 


// // write file 

// fs.writeFile(path.join(__dirname,'sample2.txt'),'Hi, File write Operation.', (err) => {
//     if (err) throw err;
//     console.log('write Completed')
//     fs.appendFile(path.join(__dirname,'sample2.txt'),'\n\n Thankyou.', (err) => {
//         if (err) throw err;
//         console.log('Append completed')
//         fs.rename(path.join(__dirname,'sample2.txt'), path.join(__dirname,'Greeting.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename Completed');
//           }); 
//       }); 
//   }); 

  // Avoid callback hell

  const fileOperation = async () =>{
    try{
      const data = await fsPromises.readFile(path.join(__dirname,'sample.txt'),'utf8')
      console.log(data)
      await fsPromises.writeFile(path.join(__dirname,'sample.txt'),'Hi, File write Operation.')
      console.log('write Completed')
    } catch(err){
      console.error(err)
    }
  }

fileOperation()

 