const fs = require('fs');

//
// LETS OUTPUT LIST OF FILES
//
//

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " ");
    process.exit(-1);
}

let path = process.argv[2];

fs.readdir(path, function(err, items) {
    console.log(items);
});


function renamer(filename, newfilename){
  fs.rename(filename, newfilename, function (err) {
    if (err) throw err;
    console.log('renamed complete:', newfilename );
  });

  fs.stat(newfilename, function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
}

