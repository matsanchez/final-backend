import { createTransport } from "nodemailer";
import loggerApp from "../utils/logger.utils.js";
import config from "../../config.js";

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: config.nodemailer.from,
    pass: config.nodemailer.pass,
  },
});

export const loadEmail = async (data) => {
  const mailOptions = {
    from: data.username,
    to: config.nodemailer.from,
    subject: "Nuevo Registro",
    html: `<div>
            <h4>Un nuevo cliente se registro en la Web</h4>
            <ul>
                <li>Nombre: ${data.name}</li>
                <li>Direccion: ${data.address}</li>
                <li>Edad: ${data.age}</li>
                <li>Telefono: ${data.phone}</li>
                <li>Email: ${data.username}</li>
                <li>Foto: ${data.file}</li>
            </ul>
    </div>`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    loggerApp.error(error);
  }
};

export const orderEmail = async (data, html) => {
  const mailOptions = {
    from: data.username,
    to: config.nodemailer.from,
    subject: `Un nuevo pedido de ${data.name} ${data.username}`,
    html: JSON.stringify(html),
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    loggerApp.error(error);
  }
};
