import fs from 'fs';

const f = fs.writeFile;

f('./myFileCopy.txt', 'data', () => console.log('success'));
