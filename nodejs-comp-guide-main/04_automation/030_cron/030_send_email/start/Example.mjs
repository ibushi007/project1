import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  const message = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'メールの件名です',
    text: `これはスクリプトによって送信されました。\n改行後`,
  };

  const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_FROM,       // 送信元として表示されるGmailアドレス
      clientId: process.env.OAUTH_CLIENT_ID,       // GCPで取得したクライアントID
      clientSecret: process.env.OAUTH_CLIENT_SECRET, // GCPで取得したクライアントシークレット
      refreshToken: process.env.OAUTH_REFRESH_TOKEN, // OAuth Playgroundで取得したリフレッシュトークン
    },
  };

  const transporter = nodemailer.createTransport(smtpConfig);

  transporter.sendMail(message, function (err, response) {
    console.log(err || response);
  });
})();
