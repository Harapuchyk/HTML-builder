const fs = require('fs');
const path = require('path');
function copyDir () {
    fs.access(path.join(__dirname, 'files-copy'), fs.constants.F_OK, err => {
        if (err) {
          //console.log(err);
        }
        fs.rm(path.join(__dirname, 'files-copy'), { recursive: true }, () => {
            fs.mkdir(path.join(__dirname, 'files-copy'), err => {
                if (err) {
                    console.log (err);
                }
                fs.readdir(path.resolve(__dirname, 'files'), (err, files) => {
                    if (err) throw err;
                    else {    
                        files.forEach(file => {
                            fs.stat(path.join(__dirname, 'files', file), (err, stats) => {
                              if (err) throw err;
                                  fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (err) => {
                                    if (err) throw err;
                                });
                            });
                        });
                    };
                });
            });
        });
      });
};
copyDir();
console.log(`files copy in files-copy`);

  
