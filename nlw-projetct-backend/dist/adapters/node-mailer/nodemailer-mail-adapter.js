"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "46bc93dd6b76b8",
        pass: "9f786f3191f10d"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equip Rocket <oi@equiperocket.com>',
            to: 'Alexandre Noguez <alexandrenoguez.tech@gmail.com>',
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
