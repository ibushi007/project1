import { addEmployeesToGS } from './google-sheet.mjs';
import cron from 'node-cron';

cron.schedule('46 20 * * *', () => {
  addEmployeesToGS();
});
