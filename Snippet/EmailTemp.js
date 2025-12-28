import { Resend } from 'resend';

const resend = new Resend('re_Pe5uoWRd_LdEJX238g1viMKKdx92dxHUA');

resend.emails.send({
    from: 'conatact@abedin.online',
    to: 'minhaz.buft191@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});