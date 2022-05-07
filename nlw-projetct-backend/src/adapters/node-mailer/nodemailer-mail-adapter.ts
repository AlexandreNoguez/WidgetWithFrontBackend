import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "46bc93dd6b76b8",
      pass: "9f786f3191f10d"
    }
  });


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equip Rocket <oi@equiperocket.com>',
            to: 'Alexandre Noguez <alexandrenoguez.tech@gmail.com>',
            subject,
            html: body,
        })
    }
}