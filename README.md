# TecnoLTS Landing Corporativo 🤖

Página estática bilingüe basada en hiper-velocidad con Next.js y Tailwind CSS.

## 🏭 1. Entorno de Producción
Arranque con build de producción (generación de assets compilados).

```bash
cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-production.sh
```

---

## 🛠️ 2. Entorno de Desarrollo
Plegado nativo con capacidad de hot-reload con `.env.development`.

```bash
cd /home/admincenter/contenedores/tecnolts
./scripts/deploy-development.sh
```

*(Si precisas silenciar el peso de JavaScript en dev por lentitud extenuante de carga, puedes anularlo al setear: `FRONTEND_DEV_RUNTIME=stable` en tu archivo `.env`).*

---

## 📌 3. Datos Relevantes y Contexto a Tomar en Cuenta

*   **Integración Autocontenida (Nodemailer y correos):**
    A diferencia de Paramascotas que usa el Backend PHP para toda transacción formal, esta landing gestiona contactos orgánicamente en sus _API Routes_ de Next.js invocando Nodemaler y enrutando los mensajes a través del transporte de correo.
*   **Variables Específicas Requeridas (E-mail):**
    Para que el componente funcione no debe faltarte su configuración propia, de lo contrario dará *fail*:
    `EMAIL_TO`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, etc.
