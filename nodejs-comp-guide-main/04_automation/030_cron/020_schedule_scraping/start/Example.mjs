import { addEmployeesToGS } from "./google-sheet.mjs";
import cron from 'node-cron';

cron.schedule("22 10 * * *", () => {
    addEmployeesToGS();
});