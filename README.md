# Embutidos Saludables - Sitio Web de Comercio Electrónico de Alimentos Saludables

Esta es una aplicación web de comercio electrónico basada en React construida con Vite, enfocada en promover y vender productos alimenticios saludables, particularmente "embutidos saludables" (salchichas saludables) que son amigables con el corazón, naturales, bajos en sodio y altos en proteína.

## Características

### 🏠 Página de Inicio
- Sección de bienvenida con imagen de fondo y mensaje principal sobre salchichas saludables
- Información nutricional en tabla mostrando calorías y contenido de proteína de los productos
- Sección de blog con recetas de desayuno e ideas de comidas

### 🛒 Catálogo de Productos
- Exhibición de diversos productos alimenticios saludables incluyendo:
  - Salchichas de Atún
  - Salchicha Mixta
  - Opciones vegetarianas y veganas
  - Comidas de desayuno y almuerzo
  - Opciones sin gluten
- Tarjetas de productos con imágenes, descripciones y precios
- Funcionalidad de búsqueda para filtrar productos

### 🛍️ Carrito de Compras
- Funcionalidad para agregar productos al carrito
- Persistencia del carrito usando localStorage
- Visualización de artículos del carrito con imágenes y precios
- Cálculo del precio total
- Realización de pedidos con redirección al registro para pago

### 👤 Gestión de Usuarios
- Página de registro de usuarios
- Página de inicio de sesión
- Página de perfil de usuario
- Panel de administración

### 💳 Proceso de Pago
- Página de pago del carrito para completar pedidos
- Integración con backend para procesamiento de pedidos

## Tecnologías Utilizadas

- **Frontend**: React 19, React Router DOM 7
- **Herramienta de Construcción**: Vite
- **Estilos**: Módulos CSS
- **Backend**: JSON Server para API simulada
- **Gestión de Estado**: Hooks de React, localStorage
- **Iconos**: Lucide React

## Cómo Empezar

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/hillary150702006/miprojectvite.git
cd miprojectvite
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. En una terminal separada, inicia el servidor JSON para la API simulada:
```bash
npm start
```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del Proyecto

```
src/
├── components/          # Componentes de UI reutilizables
│   ├── Inicio.jsx       # Componente de página de inicio
│   ├── Catalogopag.jsx  # Catálogo de productos
│   ├── Carrito.jsx      # Carrito de compras
│   ├── Navbar.jsx       # Barra de navegación
│   ├── Footer.jsx       # Componente de pie de página
│   └── ...
├── pages/               # Componentes de páginas
│   ├── PagInicio.jsx    # Página de inicio
│   ├── PagLogin.jsx     # Página de inicio de sesión
│   ├── PagRegistro.jsx  # Página de registro
│   ├── PagPerfil.jsx    # Página de perfil
│   ├── PagAdmin.jsx     # Página de administrador
│   └── ...
├── routes/              # Configuración de rutas
│   └── Routing.jsx      # Enrutador principal
├── services/            # Servicios de API
│   ├── fetch.js         # Funciones de fetch de API
│   └── db.json          # Base de datos simulada
├── styles/              # Hojas de estilo CSS
└── assets/              # Activos estáticos
```

## Integración de API

La aplicación utiliza una API simulada impulsada por JSON Server. El archivo `src/services/fetch.js` contiene funciones para realizar llamadas a la API, y `src/services/db.json` sirve como base de datos simulada para productos, usuarios y pedidos.

## Contribuyendo

1. Haz un fork del repositorio
2. Crea una rama de características (`git checkout -b feature/CaracteristicaIncreible`)
3. Confirma tus cambios (`git commit -m 'Agrega alguna CaracteristicaIncreible'`)
4. Sube a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.
