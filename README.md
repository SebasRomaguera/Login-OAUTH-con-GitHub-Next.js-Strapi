# 🔐 Login OAuth con GitHub - Next.js + Strapi

Proyecto de demostración de autenticación social usando GitHub como proveedor OAuth en una arquitectura moderna con Next.js (frontend) y Strapi (backend).
## Demo

https://github.com/SebasRomaguera/Login-OAUTH-con-GitHub-Next.js-Strapi/blob/main/VideoStrapi.mp4

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Configuración de GitHub OAuth](#configuración-de-github-oauth)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Resumen Reflexivo](#resumen-reflexivo)

## ✨ Características

- ✅ Autenticación OAuth 2.0 con GitHub
- ✅ Inicio de sesión con un solo clic
- ✅ Gestión de sesiones segura con NextAuth.js
- ✅ Backend API con Strapi
- ✅ Interfaz moderna y responsive con Tailwind CSS
- ✅ TypeScript para type safety
- ✅ Dashboard personalizado con información del usuario

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework de React para producción
- **NextAuth.js** - Librería de autenticación para Next.js
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework CSS utility-first

### Backend
- **Strapi 4.15** - Headless CMS y API
- **SQLite** - Base de datos ligera
- **Plugin Users & Permissions** - Gestión de usuarios en Strapi

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.x o superior)
- **npm** o **yarn**
- Una cuenta de **GitHub**

## 🔑 Configuración de GitHub OAuth

### Paso 1: Crear una OAuth App en GitHub

1. Ve a tu perfil de GitHub → **Settings**
2. En el menú lateral, busca **Developer settings** (al final)
3. Click en **OAuth Apps** → **New OAuth App**

### Paso 2: Configurar la aplicación

Completa el formulario con los siguientes datos:

- **Application name**: `OAuth Login Demo` (o el nombre que prefieras)
- **Homepage URL**: `http://localhost:3000`
- **Application description**: `Proyecto de demostración OAuth con GitHub`
- **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`

### Paso 3: Obtener las credenciales

1. Haz click en **Register application**
2. Guarda el **Client ID** (se muestra directamente)
3. Haz click en **Generate a new client secret**
4. **⚠️ IMPORTANTE**: Copia el **Client Secret** inmediatamente (solo se muestra una vez)

### Ejemplo de cómo se ve:

```
Client ID: Iv1.a629723ccb3e46e7
Client Secret: 67e8b4c9a3f2d1e5b8a7c6d4f3e2a1b9c8d7e6f5
```

**🔒 Nunca compartas tus credenciales en repositorios públicos**

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/Login-OAUTH-con-GitHub-Next.js-Strapi.git
cd Login-OAUTH-con-GitHub-Next.js-Strapi
```

### 2. Configurar el Frontend (Next.js)

```bash
cd frontend
npm install
```

Copia el archivo de ejemplo y configura las variables de entorno:

```bash
cp .env.local.example .env.local
```

Edita el archivo `.env.local` y completa con tus credenciales:

```env
# GitHub OAuth App Credentials
GITHUB_ID=tu_client_id_de_github
GITHUB_SECRET=tu_client_secret_de_github

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=genera_un_secret_aleatorio

# Strapi Backend URL (opcional para esta demo)
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

**Generar NEXTAUTH_SECRET:**

```bash
# En Linux/Mac
openssl rand -base64 32

# En Windows (PowerShell)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Configurar el Backend (Strapi) - Opcional

**Nota:** Para este proyecto, Next.js maneja la autenticación directamente. Strapi está incluido como backend opcional para futuras extensiones.

```bash
cd ../backend
npm install
cp .env.example .env
```

Edita `.env` y genera las claves secretas necesarias:

```bash
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

## 🎮 Uso

### Iniciar el Frontend

```bash
cd frontend
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

### Iniciar el Backend (opcional)

En otra terminal:

```bash
cd backend
npm run develop
```

El panel de Strapi estará en: **http://localhost:1337/admin**

### Probar la aplicación

1. Abre tu navegador en `http://localhost:3000`
2. Verás la página de inicio con el botón "Iniciar sesión con GitHub"
3. Haz click en el botón
4. Serás redirigido a GitHub para autorizar la aplicación
5. Después de autorizar, volverás a la aplicación ya autenticado
6. Verás el dashboard con tu información de GitHub

## 📁 Estructura del Proyecto

```
Login-OAUTH-con-GitHub-Next.js-Strapi/
├── frontend/                    # Aplicación Next.js
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts    # Configuración NextAuth
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Página del dashboard
│   │   ├── globals.css             # Estilos globales
│   │   ├── layout.tsx              # Layout principal
│   │   └── page.tsx                # Página de inicio/login
│   ├── components/
│   │   └── SessionProvider.tsx     # Provider de sesión
│   ├── .env.local.example          # Ejemplo de variables de entorno
│   ├── next.config.js              # Configuración de Next.js
│   ├── package.json
│   ├── tailwind.config.ts          # Configuración Tailwind
│   └── tsconfig.json
│
├── backend/                     # Backend Strapi (opcional)
│   ├── config/                  # Configuraciones de Strapi
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
└── README.md                    # Este archivo
```

## 📝 Resumen Reflexivo

Durante el desarrollo de este proyecto, he aprendido a integrar un sistema de autenticación OAuth moderno utilizando GitHub como proveedor. La experiencia me ha permitido comprender mejor cómo funciona el flujo OAuth 2.0 y la importancia de gestionar correctamente las credenciales y tokens de seguridad.

Next.js con NextAuth.js simplifica enormemente el proceso de autenticación, ofreciendo una solución robusta y segura sin necesidad de implementar toda la lógica desde cero. La integración con GitHub fue directa gracias a la documentación clara de ambas plataformas.

Strapi se incluyó como backend opcional, demostrando cómo podría escalarse el proyecto para incluir almacenamiento de datos de usuarios, roles y permisos más complejos. Aunque para este caso de uso específico, Next.js puede manejar la autenticación de forma independiente, tener un CMS headless como Strapi abre las puertas a funcionalidades más avanzadas.

Los mayores retos fueron entender el flujo de callbacks de OAuth y configurar correctamente las URLs de redirección. También aprendí la importancia de proteger las rutas adecuadamente y manejar los estados de carga durante la autenticación para mejorar la experiencia del usuario.

Este proyecto es una base sólida que puede extenderse para incluir más proveedores OAuth (Google, Facebook, etc.), roles de usuario, y funcionalidades protegidas por autenticación.

## 🎥 Demo en Video

Para grabar tu video de demostración:

1. Inicia la aplicación (`npm run dev` en la carpeta frontend)
2. Graba tu pantalla mostrando:
   - La página de inicio
   - Click en "Iniciar sesión con GitHub"
   - La autorización en GitHub
   - El regreso a la app y el dashboard con tus datos
   - Cerrar sesión

**Herramientas recomendadas para grabar:**
- Windows: Xbox Game Bar (Win + G)
- Mac: QuickTime Player
- Linux: SimpleScreenRecorder, OBS Studio
- Online: Loom

## 🔒 Seguridad

- ⚠️ Nunca subas archivos `.env` o `.env.local` al repositorio
- ⚠️ Usa `.gitignore` para excluir archivos sensibles
- ⚠️ Genera claves secretas fuertes y únicas
- ⚠️ En producción, usa HTTPS y URLs seguras

## 🐛 Troubleshooting

### Error: "Client authentication failed"
- Verifica que el `GITHUB_ID` y `GITHUB_SECRET` sean correctos
- Asegúrate de que no haya espacios extras en el archivo `.env.local`

### Error: "Callback URL mismatch"
- Verifica que la URL de callback en GitHub sea: `http://localhost:3000/api/auth/callback/github`
- Asegúrate de que `NEXTAUTH_URL` esté configurado como `http://localhost:3000`

### La sesión no persiste
- Genera un nuevo `NEXTAUTH_SECRET` usando el comando indicado
- Limpia las cookies del navegador y vuelve a intentar

## 📚 Recursos Adicionales

- [Documentación de NextAuth.js](https://next-auth.js.org/)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Strapi](https://docs.strapi.io/)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado como proyecto educativo para demostrar la integración de OAuth con arquitecturas modernas.

---

⭐ Si este proyecto te ha sido útil, no olvides darle una estrella en GitHub!
