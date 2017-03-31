const fse = require('fs-extra');

const STATIC_FILES = [
  'public'
];
const PUBLIC_PATH = 'dist/';

const copyAssets = function () {
  console.log('Copying assets...');
  let success = true;

  STATIC_FILES.map(s => {
    try {
      fse.copySync(s, PUBLIC_PATH)
    }
    catch (e) {
      success = false;
      console.log(`Error copying ${s}: ${e}`);
    }
  });

  if (success) console.log('Copy assets successful.');
}

copyAssets();
