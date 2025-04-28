import cron from "node-cron";

cron.schedule('* * * * * *', () => console.log('毎秒に実行'));
cron.schedule('*/3 * * * * *', () => console.log('3秒ごとに実行'));
cron.schedule('* * * * *', () => console.log('毎分に実行'));
cron.schedule('0 0 9,18 * * *', () => console.log('毎日9時,18時に実行'));
cron.schedule('30 30 12 * * *', () => console.log('毎日12時30分30秒に実行'));   