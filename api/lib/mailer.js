import mailgun from 'mailgun.js';
import configs from '../configs';

class Mailer {
  static send(options) {
    Mailer.client.messages.create('sandbox756e9dca9e5641c4b368868ee992d9f4.mailgun.org', {
      from: 'SecretSanta <mailgun@sandbox-123.mailgun.org>',
      to: [options.to],
      subject: options.subject,
      html: options.html,
    })
      .then(msg => console.log(msg))
      .catch(err => console.log(err));
  }

  static get client() {
    return mailgun.client(configs.mailgun);
  }
}

export default Mailer;
