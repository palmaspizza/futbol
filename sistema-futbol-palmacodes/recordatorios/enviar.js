import admin from 'firebase-admin';
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SA)), databaseURL: process.env.DB_URL });
const hoy = new Date().toLocaleDateString('sv-SE', { timeZone: 'America/Santiago' });
const dias = v => Math.round((new Date(v) - new Date(hoy)) / 864e5);
const TEST = process.env.TEST_TO;
const send = (to, subject, text) => fetch('https://api.brevo.com/v3/smtp/email', {
  method: 'POST', headers: { 'api-key': process.env.BREVO_KEY, 'content-type': 'application/json' },
  body: JSON.stringify({ sender: { name: process.env.SENDER_NAME, email: process.env.SENDER_EMAIL }, to: [{ email: TEST || to }], subject: (TEST ? '[PRUEBA] ' : '') + subject, textContent: text })
}).then(r => { if (!r.ok) console.error('Error Brevo', to, r.status); });
const J = (await admin.database().ref('jugadores').get()).val() || {};
const resumen = [];
for (const j of Object.values(J)) {
  if (!j.activo || !j.venc) continue;
  const d = dias(j.venc);
  if (d < 0) resumen.push(`${j.nombre}: vencido hace ${-d} día(s)`); else if (d === 0) resumen.push(`${j.nombre}: vence hoy`);
  if (j.email && (TEST || [3, 0, -3].includes(d))) {
    const t = d > 0 ? `vence en ${d} días` : d === 0 ? 'vence hoy' : `venció hace ${-d} días`;
    await send(j.email, 'Recordatorio de mensualidad', `Hola ${j.nombre}, tu mensualidad ${t} (${j.venc}). Si ya pagaste, ignora este mensaje. ¡Gracias!`);
  }
}
if (resumen.length && process.env.COACH_EMAIL) await send(process.env.COACH_EMAIL, 'Resumen de pagos', resumen.join('\n'));
process.exit(0);
