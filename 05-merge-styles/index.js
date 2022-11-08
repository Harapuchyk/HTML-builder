const fs = require('fs');
const path = require('path');
fs.writeFile(
    path.join(__dirname, 'project-dist', 'bundle.css'), 
    '',
    (err) => {
        if (err) throw err;
        fs.readdir(path.resolve(__dirname, 'styles'), (err, files) => {
  if (err) {
      throw err;
  }
  else {        
      files.forEach(file => {
          fs.stat(path.join(__dirname, 'styles', file), (err, stats) => {
            if (err) throw err;
            if (!stats.isDirectory() && path.extname(file)==='.css') {                
                fs.readFile(path.join(__dirname, 'styles', file), 'utf8', (err, data) => {
                    if (err) throw err;  
                    fs.appendFile(
                    path.join(__dirname, 'project-dist', 'bundle.css'), 
                    data,
                    (err) => {
                        if (err) throw err;
                    }
                );
            });             
            }   
          })
      });
  }
});
}
);
console.log('bundle.css created!')
