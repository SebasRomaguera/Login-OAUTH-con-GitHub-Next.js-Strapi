# Strapi Backend - OAuth GitHub

Este es el backend Strapi para el proyecto de autenticación OAuth con GitHub.

## Configuración

1. Instalar dependencias:
```bash
npm install
```

2. Copiar el archivo de variables de entorno:
```bash
cp .env.example .env
```

3. Generar las claves secretas para Strapi:
```bash
# Puedes usar este comando para generar claves aleatorias
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

4. Actualizar el archivo `.env` con tus credenciales de GitHub OAuth y las claves generadas.

## Configuración de GitHub OAuth en Strapi

Una vez que el servidor esté corriendo:

1. Accede al panel de administración: http://localhost:1337/admin
2. Crea tu cuenta de administrador
3. Ve a Settings -> Users & Permissions plugin -> Providers
4. Habilita GitHub y configura:
   - **Client ID**: Tu GitHub Client ID
   - **Client Secret**: Tu GitHub Client Secret
   - **Callback URL**: http://localhost:1337/api/connect/github/callback

## Ejecutar el servidor

```bash
# Modo desarrollo
npm run develop

# Modo producción
npm run build
npm start
```

El servidor estará disponible en http://localhost:1337
