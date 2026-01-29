# OAuth GitHub - Frontend

Frontend de la aplicación con Next.js 14 y NextAuth.js para autenticación OAuth con GitHub.

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus credenciales de GitHub OAuth:

```env
GITHUB_ID=tu_github_client_id
GITHUB_SECRET=tu_github_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secret_aleatorio
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📖 Características

- 🔐 Autenticación OAuth 2.0 con GitHub
- 🎨 UI moderna con Tailwind CSS
- 📱 Diseño responsive
- ⚡ TypeScript para type safety
- 🔒 Protección de rutas
- 👤 Dashboard personalizado

## 🏗️ Estructura

```
frontend/
├── app/
│   ├── api/auth/[...nextauth]/  # Configuración NextAuth
│   ├── dashboard/               # Dashboard protegido
│   ├── globals.css             # Estilos globales
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página de login
├── components/
│   └── SessionProvider.tsx     # Provider de sesión
└── .env.local.example          # Ejemplo de configuración
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📝 Notas

- Las sesiones se manejan automáticamente con NextAuth.js
- Los datos del usuario se obtienen directamente de la API de GitHub
- El token de acceso se almacena de forma segura en el JWT

## 🔗 Enlaces Útiles

- [NextAuth.js Docs](https://next-auth.js.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
