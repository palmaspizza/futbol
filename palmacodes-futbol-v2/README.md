# Sistema de entrenamientos · Palma Codes (v2)
Todo el sistema es `index.html`. Base de datos: Realtime Database (Spark, $0).

## Ponerlo a andar (10 min)
1. Firebase Console > **Authentication** > Sign-in method > activa **Correo/Contraseña**.
2. **Realtime Database** > Crear base de datos. Copia su URL exacta a `databaseURL` en `index.html`.
3. Pestaña **Reglas** > pega `database.rules.json` > Publicar.
4. Publicar: Hosting (`firebase deploy`) o para probar local, VS Code > Live Server (localhost ya está autorizado).
5. Abre `tusitio/#admin` **tú primero**: pide crear cuenta. Esa cuenta queda como administradora.
6. Authentication > Settings > User actions: desactiva el registro de nuevos usuarios (opcional).

## Correos gratis (EmailJS, 200/mes)
1. Cuenta en emailjs.com > Email Services > Add (Gmail) > copia el **Service ID**.
2. Email Templates > New: To Email `{{to_email}}`, Subject `{{subject}}`, Content `{{message}}`, From Name `{{from_name}}`. Copia el **Template ID**.
3. Account > **Public Key**.
4. Pega los 3 en `MAIL` dentro de `index.html`. Aparece el botón "Probar correo".
5. Los recordatorios (3 días antes, hoy, ya vencido) salen solos cuando el entrenador abre el panel, una sola vez por etapa.

## Envío 100% sin abrir el panel (opcional)
Carpeta `recordatorios/` + `.github/`: GitHub Actions diario. Se configura una vez y luego corre solo. Si lo usas, deja `MAIL` vacío para no duplicar.
