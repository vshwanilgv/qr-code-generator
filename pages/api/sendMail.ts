import type { NextResponse } from 'next/server'


// export async function POST(req : any, res : any){
//   try{
//     const { name, email, message } = await req.json;
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: false,
//       auth:{
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS
//       },
  
//     });

//     const mailOptions = {
//       from: process.env.SMTP_FROM,
//       to: process.env.SMTP_TO,
//       subject: `New message from ${name}`,
//       text: message,
//       replyTo: email
//     }