import twilio from "twilio";
import loggerApp from "../utils/logger.utils.js";
import config from "../../config.js";

const accountSid = config.twilio.account;
const authToken = config.twilio.token;

export const sendSMS = async (phone) => {
  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body: "Su pedido fue recibido y se encuentra en proceso. Gracias por confiar en nosotros!",
      from: config.twilio.number,
      to: phone,
    });
    loggerApp.info(message);
  } catch (error) {
    loggerApp.error(error);
  }
};
