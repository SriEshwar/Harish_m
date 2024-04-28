const fs = require('fs')
const path = require('path')

if(!fs.existsSync('./newfile')){

fs.mkdir('./newfile', (err) =>{               
    if (err) throw err
    console.log('Directory Created')
})}

// To remove dir

if(fs.existsSync('./newfile')){

    fs.rmdir('./newfile', (err) =>{               
        if (err) throw err
        console.log('Directory Removed')
    })}