import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";
const nodemailer = require("nodemailer");

interface IComplimentRequest{
  tag_id:string;
  user_sender:string;
  user_receiver:string;
  message:string;
}

class CreateComplimentService {
   async execute({tag_id,user_sender,user_receiver,message} : IComplimentRequest ){
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    if(user_sender === user_receiver){
      throw new Error("Incorrect User Receiver");
    }

    const userReceiverExists = await usersRepositories.findOne(user_receiver);

    if(!userReceiverExists){
       throw new Error("User Receiver does not exists");
    }

    const compliments = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await complimentsRepositories.save(compliments);

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    const authUser = '';
    const authPass = '';
    const fromReceiver = userReceiverExists.email;

    if(authUser != '' && authPass != ''){
      const userSender = await usersRepositories.findOne(user_sender);
      const toSender =  userSender.email;

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: authUser,//testAccount.user, // generated ethereal user
          pass: authPass,//testAccount.pass, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: fromReceiver, // sender address
        to: toSender, // list of receivers
        subject: "New Compliments!", // Subject line
        //text: "New Compliments!", // plain text body
        html: "<b>hello! You have a new compliments</b>", // html body
      });

      //console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    return compliments;
  }
}
export { CreateComplimentService}