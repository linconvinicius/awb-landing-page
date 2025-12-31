
import nodemailer from 'nodemailer';

export default async function handler(req, res, emailConfig) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('📧 [HANDLER] Received email config:', {
    user: emailConfig?.user,
    passExists: !!emailConfig?.pass,
    toExists: !!emailConfig?.to
  });

  if (!emailConfig || !emailConfig.user || !emailConfig.pass) {
    console.error('❌ CRITICAL: Missing email configuration!');
    return res.status(500).json({
      error: 'Server configuration error',
      details: 'Missing SMTP credentials'
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailConfig.user,
      pass: emailConfig.pass,
    },
  });

  const { name, email, phone, company, message, simulation } = req.body;

  try {
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f4f4f5; padding: 20px; border-radius: 12px;">
        <div style="background: #000; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
             <h1 style="color: #fff; margin: 0;">Novo Lead AWB</h1>
        </div>
        <div style="background: #fff; padding: 30px; border-radius: 0 0 8px 8px; color: #333;">
          <h2 style="color: #2563eb; margin-top: 0;">Detalhes do Contato</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
          
          <div style="background: #f0f9ff; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <strong>Mensagem:</strong><br/>
            ${message || 'Sem mensagem adicional'}
          </div>

          ${simulation ? `
            <h3 style="color: #2563eb; border-top: 1px solid #eee; padding-top: 20px;">Dados da Simulação</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 8px;">🚀 <strong>Tipo:</strong> ${simulation.type}</li>
              <li style="margin-bottom: 8px;">💰 <strong>Investimento Estimado:</strong> R$ ${simulation.total?.toLocaleString('pt-BR')}</li>
              <li style="margin-bottom: 8px;">⚡ <strong>Urgência:</strong> ${simulation.urgencyPrice > 0 ? 'Sim (+20%)' : 'Normal'}</li>
            </ul>
          ` : ''}
          
          <p style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
            Enviado automaticamente pelo site AWB Digital.
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"AWB Site" <${emailConfig.user}>`,
      to: emailConfig.to,
      replyTo: email,
      subject: `🔥 Novo Lead: ${name} [${company}]`,
      html: htmlContent,
    };

    console.log('📧 [HANDLER] Mail options:');
    console.log('  From:', mailOptions.from);
    console.log('  To:', mailOptions.to);
    console.log('  To (type):', typeof mailOptions.to);
    console.log('  Recipients array:', mailOptions.to?.split(',').map(e => e.trim()));
    console.log('  Reply-To:', mailOptions.replyTo);
    console.log('  Subject:', mailOptions.subject);

    const info = await transporter.sendMail(mailOptions);

    console.log('✅ [HANDLER] Email sent successfully!');
    console.log('  Message ID:', info.messageId);
    console.log('  Accepted:', info.accepted);
    console.log('  Rejected:', info.rejected);
    console.log('  Response:', info.response);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error details:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
