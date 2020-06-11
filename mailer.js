const {createTransport} = require('nodemailer')
class sendEmail {
     constructor(email,password){
         this.email = email
         this.password = password
         this.messenger = createTransport({
             service: 'gmail',
             auth: {
                 user: email,
                 pass: password
             }
         })
         this.sendMail = (target,sub,data) =>{
            this.options = {
                from: email,
                to: target,
                subject: sub,
                text: data
            }
            this.messenger.sendMail(this.options,(err,info)=>{
                if(err)  console.log(err)
                else console.log('sent')
            })
         }
         this.sendHtml = (target,sub,data) =>{
            this.options = {
                from: email,
                to: target,
                subject: sub,
                html: data
            }
            this.messenger.sendMail(this.options,(err,info)=>{
                if(err)  console.log(err)
                else console.log('sent')
            })
         }
     }
}
module.exports = {
    EasyMail : sendEmail
}
