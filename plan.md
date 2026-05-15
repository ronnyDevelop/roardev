mi-portafolio/
├── .github/workflows/deploy.yml   # CI/CD para GitHub Pages
├── public/                        # Imágenes estáticas, favicon
├── src/
│   ├── components/                # Componentes reutilizables
│   │   ├── Header.astro           # Navegación
│   │   ├── Footer.astro          # Footer con redes
│   │   ├── ProjectCard.astro     # Tarjeta de proyecto
│   │   └── PostCard.astro         # Tarjeta de blog
│   ├── content/                   # Contenido (Collections)
│   │   ├── blog/                 # Posts técnicos (MDX)
│   │   └── projects/             # Proyectos (MDX)
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Layout principal
│   │   ├── BlogPost.astro        # Layout para posts
│   │   └── Project.astro         # Layout para proyectos
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── about.astro           # Sobre ti
│   │   ├── blog/index.astro      # Listado de posts
│   │   ├── blog/[...slug].astro  # Post individual
│   │   ├── projects/index.astro  # Portafolio
│   │   └── rss.xml.js            # Feed RSS
│   └── styles/
│       └── global.css             # Estilos globales
├── astro.config.mjs              # Configuración Astro
└── tailwind.config.mjs           # Configuración Tailwind