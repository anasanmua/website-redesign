'use server'

import { Resend } from 'resend'

const CONTACT_EMAIL = 'proyecto@cientificacoleandaluz.es'

export type ParticipationState = {
  ok: boolean
  error?: string
}

export async function sendParticipation(
  formData: FormData,
): Promise<ParticipationState> {
  const name = ((formData.get('name') as string) ?? '').trim()
  const email = ((formData.get('email') as string) ?? '').trim()
  const role = ((formData.get('role') as string) ?? '').trim()
  const center = ((formData.get('center') as string) ?? '').trim()
  const message = ((formData.get('message') as string) ?? '').trim()

  // Validación en servidor
  if (!name || !email || !role || !message) {
    return { ok: false, error: 'Faltan campos obligatorios.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'El correo no es válido.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      ok: false,
      error: 'El envío de correo no está configurado. Inténtalo más tarde.',
    }
  }

  const resend = new Resend(apiKey)

  // Remitente. Debe pertenecer a un dominio verificado en Resend.
  // Una vez verificado "cientificacoleandaluz.es", este remitente funcionará.
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ??
    'Una Científica en tu Cole <no-reply@cientificacoleandaluz.es>'

  const text = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Perfil: ${role}`,
    center ? `Centro / organización: ${center}` : null,
    '',
    'Mensaje:',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #1f2937; line-height: 1.6;">
      <h2 style="color: #1a7a4c; margin-bottom: 16px;">Nueva solicitud de participación</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 6px 0; font-weight: bold; width: 180px;">Nombre</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Correo</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Perfil</td><td>${escapeHtml(role)}</td></tr>
        ${center ? `<tr><td style="padding: 6px 0; font-weight: bold;">Centro / organización</td><td>${escapeHtml(center)}</td></tr>` : ''}
      </table>
      <p style="margin-top: 16px; font-weight: bold;">Mensaje</p>
      <p style="white-space: pre-wrap; margin-top: 4px;">${escapeHtml(message)}</p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Solicitud de participación – ${name}`,
      text,
      html,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return {
        ok: false,
        error: 'No se pudo enviar el correo. Inténtalo de nuevo.',
      }
    }

    return { ok: true }
  } catch (err) {
    console.log('[v0] Resend exception:', err)
    return {
      ok: false,
      error: 'No se pudo enviar el correo. Inténtalo de nuevo.',
    }
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
