"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComplimentService = void 0;
const typeorm_1 = require("typeorm");
const ComplimentsRepositories_1 = require("../repositories/ComplimentsRepositories");
const UsersRepositories_1 = require("../../user/repositories/UsersRepositories");
const nodemailer = require("nodemailer");
class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }) {
        const complimentsRepositories = typeorm_1.getCustomRepository(ComplimentsRepositories_1.ComplimentsRepositories);
        const usersRepositories = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
        if (user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver");
        }
        const userReceiverExists = await usersRepositories.findOne(user_receiver);
        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists");
        }
        const compliments = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });
        await complimentsRepositories.save(compliments);
        let testAccount = await nodemailer.createTestAccount();
        const authUser = '';
        const authPass = '';
        const fromReceiver = userReceiverExists.email;
        if (authUser != '' && authPass != '') {
            const userSender = await usersRepositories.findOne(user_sender);
            const toSender = userSender.email;
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                auth: {
                    user: authUser,
                    pass: authPass,
                },
            });
            let info = await transporter.sendMail({
                from: fromReceiver,
                to: toSender,
                subject: "New Compliments!",
                html: "<b>hello! You have a new compliments</b>",
            });
        }
        return compliments;
    }
}
exports.CreateComplimentService = CreateComplimentService;
//# sourceMappingURL=CreateComplimentService.js.map