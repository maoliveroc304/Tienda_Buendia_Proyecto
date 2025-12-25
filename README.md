# La Despensa de la Mascota - Tienda Online

Este es el repositorio para la tienda online "La Despensa de la Mascota", un proyecto full-stack construido con Next.js, Tailwind CSS, Drizzle ORM y NextAuth.js.

## Características

- **Frontend:** Interfaz de usuario completa con páginas de inicio, categorías, productos, carrito de compras, checkout y perfiles de usuario.
- **Backend:** API robusta para gestionar productos, pedidos y usuarios.
- **Autenticación:** Sistema de registro e inicio de sesión para clientes y administradores.
- **Panel de Administración:** Una interfaz dedicada para la gestión de inventario, ventas y analíticas.
- **Integraciones:** Sincronización de inventario con Google Sheets y múltiples pasarelas de pago.

## Cómo Empezar

### 1. Prerrequisitos

- Node.js (versión 20.x o superior)
- npm o yarn
- Una base de datos PostgreSQL

### 2. Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/la-despensa-de-la-mascota.git
    cd la-despensa-de-la-mascota
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

### 3. Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables:

```env
# Base de Datos (PostgreSQL)
DATABASE_URL="postgresql://usuario:contraseña@host:puerto/basededatos"

# NextAuth.js
AUTH_SECRET="tu_secreto_aqui" # Genera uno con `openssl rand -base64 32`
AUTH_URL="http://localhost:3000"

# Google Sheets API
GOOGLE_SHEET_ID="tu_id_de_hoja_de_calculo"
GOOGLE_CLIENT_EMAIL="tu_email_de_servicio@proyect.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\ntu_clave_privada\n-----END PRIVATE KEY-----\n"
```

### 4. Migraciones de la Base de Datos

Aplica el esquema inicial a tu base de datos:

```bash
npm run db:push
```

### 5. Ejecutar en Desarrollo

Inicia el servidor de desarrollo de Next.js:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Despliegue en Vercel

1.  **Sube tu código a un repositorio de GitHub.**

2.  **Importa el proyecto en Vercel:**
    - Desde tu dashboard de Vercel, haz clic en "Add New... > Project".
    - Selecciona tu repositorio de GitHub.

3.  **Configura las variables de entorno:**
    - En la configuración del proyecto en Vercel, añade las mismas variables de entorno que definiste en `.env.local`.

4.  **Despliega:**
    - Vercel detectará automáticamente que es un proyecto Next.js y lo desplegará. La base de datos deberá estar accesible públicamente para que Vercel pueda conectarse a ella.
