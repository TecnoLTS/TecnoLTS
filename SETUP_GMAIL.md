# Configuración de Gmail para el Formulario de Contacto

## Paso 1: Habilitar verificación en 2 pasos

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. En el menú izquierdo, selecciona **Seguridad**
3. En la sección "Cómo inicias sesión en Google", haz clic en **Verificación en 2 pasos**
4. Sigue los pasos para habilitarla (si no la tienes activada)

## Paso 2: Crear Contraseña de Aplicación

1. Una vez que tengas la verificación en 2 pasos activa, ve a: https://myaccount.google.com/apppasswords
2. En "Seleccionar aplicación", elige **Correo**
3. En "Seleccionar dispositivo", elige **Otro (nombre personalizado)**
4. Escribe un nombre como "Formulario de Contacto Web"
5. Haz clic en **Generar**
6. Google te mostrará una contraseña de 16 caracteres (algo como: `abcd efgh ijkl mnop`)
7. **Copia esta contraseña** (sin espacios)

## Paso 3: Configurar Variables de Entorno

Edita el archivo `.env` en la raíz del proyecto:

```env
GMAIL_USER=tu-email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
EMAIL_TO=donde-quieres-recibir@email.com
```

**Importante:**
- `GMAIL_USER`: Tu dirección de Gmail completa
- `GMAIL_APP_PASSWORD`: La contraseña de 16 caracteres SIN espacios
- `EMAIL_TO`: El email donde quieres recibir las consultas (puede ser el mismo u otro)

## Paso 4: Redesplegar la Aplicación

```bash
sudo docker compose --profile development down
sudo docker compose --profile development up -d --build
```

## Verificar que funciona

1. Abre tu sitio en http://localhost:3008
2. Ve al formulario de contacto
3. Llena los campos y envía
4. Revisa tu bandeja de entrada (y spam por si acaso)

## Límites de Gmail

- **500 emails por día** para cuentas gratuitas
- **2,000 emails por día** para cuentas de Google Workspace

## Solución de Problemas

### Error: "Invalid login"
- Verifica que la contraseña de aplicación esté correcta (sin espacios)
- Asegúrate de tener la verificación en 2 pasos activada

### Error: "Less secure apps"
- Usa **Contraseña de Aplicación**, no tu contraseña normal de Gmail

### No llegan los correos
- Revisa la carpeta de spam
- Verifica que el email en `EMAIL_TO` sea correcto
- Revisa los logs del contenedor: `sudo docker logs tecnolts-app-dev`

## Alternativa: Gmail con OAuth2

Para mayor seguridad en producción, considera usar OAuth2 en lugar de contraseña de aplicación.
