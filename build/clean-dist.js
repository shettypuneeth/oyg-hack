const fse = require('fs-extra');

const pathsToRemove = [
  'dist/'
];

console.log("Starting clean operation...");

pathsToRemove
  .forEach((p) => {
    try {
      fse.emptyDir(p, function (err) {
        if (err) {
          console.error("Unable to clean ", p);
        }
      });
      console.log("Successfully cleaned ", p);
    }
    catch (e) {
      console.log(`Failed to clean ${p}: ${e}`);
    }
  });
