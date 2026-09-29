# Sistema de asistencia y pagos · Palma Codes (Firebase Spark, $0)

## Puesta en marcha (15 min)
1. Firebase Console > `futballdb` > **Realtime Database > Crear** (modo bloqueado). Copia su URL a `databaseURL` en `index.html` (bloque CONFIGURACIÓN).
2. **Authentication > Método de acceso > Correo/contraseña > Activar**. (No crees usuarios a mano.)
3. **Realtime Database > Reglas**: pega TODO `database.rules.json` > Publicar. (No hay UID que reemplazar.)
4. Publicar: `npm i -g firebase-tools && firebase login && firebase deploy --only hosting`.
5. **Instalación**: abre `https://futballdb.web.app/#setup`, crea la cuenta del entrenador. Hazlo tú mismo apenas publiques las reglas: la primera cuenta queda como administradora.
6. Uso diario: `/#admin`. Agrega jugadores y usa "📤 Enviar link".

## Recordatorios por correo
Repo **privado** en GitHub + secrets: `FIREBASE_SA`, `DB_URL`, `BREVO_KEY`, `SENDER_EMAIL`, `COACH_EMAIL`.
Prueba: pestaña Actions > "Recordatorios de pago" > Run workflow > escribe un correo en `test_to`. Ese modo envía todo SOLO a ese correo con asunto [PRUEBA].
Trucos de correos de prueba: Gmail acepta alias `tucorreo+jugador1@gmail.com` (llegan todos a tu bandeja).
