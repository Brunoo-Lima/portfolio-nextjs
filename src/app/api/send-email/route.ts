import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { IContact } from '@/@types/IContact';

export const POST = async (request: Request) => {
  const password = process.env.EMAIL_PASSWORD;
  const email_target = process.env.EMAIL_TARGET;
  const email_from = process.env.EMAIL_FROM;

  if (!password || !email_target || !email_from) {
    return NextResponse.json(
      { error: 'Variáveis de ambiente não configuradas corretamente.' },
      { status: 500 }
    );
  }

  const req = await request.json();

  const { name, email, phone, message }: IContact = req;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: email_target,
      pass: password,
    },
    secure: true,
  });

  const mailData = {
    from: `${email_from}`,
    to: `${email_target}`,
    subject: `Novo Contato através do Portfolio`,
    html: `<div>
          <h1>Novo Contato do Site</h1>

          <p><b>Nome</b>: ${name}</p>
          <p><b>Telefone</b>: ${phone}</p>
          <p><b>E-mail:</b> ${email || 'não informado'}</p>

          ${message ? `<p><b>Mensagem:</b> ${message}</p></br>` : '</br>'}
        </div>`,
  };

  const errorMailData = {
    from: `${email_from}`,
    to: `${email_target}`,
    subject: `Erro ao enviar contato via Portfolio`,
    html: `<div>
          <h1>Novo Contato</h1>

          <p><b>Nome</b>: ${name}</p>
          <p><b>Telefone</b>: ${phone}</p>
          <p><b>E-mail:</b> ${email || 'não informado'}</p>

          ${message ? `<p><b>Mensagem:</b> ${message}</p></br>` : '</br>'}
        </div>
          `,
  };

  async function sendContactEmail() {
    try {
      const info = await transporter.sendMail(mailData);

      return NextResponse.json(info, { status: 200 });
    } catch (error: any) {
      console.error('Erro ao processar o formulário:', error);
      await transporter.sendMail(errorMailData);

      return NextResponse.json({
        error: error.toString(),
        status: 500,
      });
    }
  }

  return sendContactEmail();
};
