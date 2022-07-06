import os from 'os';
import { pid } from 'process';

console.info(os.platform());
console.info(os.arch());
console.table(os.cpus());
console.info(os.freemem());
console.info(os.totalmem());
console.info(os.devNull);
console.info(os.endianness());
console.info(os.uptime());
console.info(os.version());
