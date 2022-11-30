import React from "react";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "amustino30@gmail.com",
    pass: "smrlocisaknpkklm",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const defaults = await transport.sendMail({
  from: '"Portfolio messages 🌎" <amustino30@gmail.com',
  to: "agustintcruz@gmail.com, amustino30@gmail.com",
  subject: "Formulario de contacto",
  html: contentHTML,
});

const { name, email, message } = req.body;
console.log(req.body);

contentHTML = `
      <h2>You have a new message from:</h2>
      <ul>
          <li><h3>Name: ${name}</h3></li>
          <li><h4>Email: ${email}</h4></li>
      </ul>
      <h3>Message:</h3>
      <p>${message}</p>
  `;

const Email = () => {
  return <div>Email</div>;
};

export default Email;
