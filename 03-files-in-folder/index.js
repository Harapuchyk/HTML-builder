const fs = require('fs');
const path = require('path');
fs.readdir(path.resolve(__dirname, 'secret-folder'), (err, files) => {
  if (err) {
      throw err;
  }
  else {        
      // console.log(files);
      files.forEach(file => {
          fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {
            if (err) throw err;
            if (!stats.isDirectory()){
                console.log(path.parse(file).name, ' - ', path.extname(file), ' - ', stats.size , 'byte');
                // console.log(stats.isDirectory()); 
            }
             
          })
      });
  }
});

