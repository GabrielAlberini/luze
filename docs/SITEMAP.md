# Sitemap - Luzé Rugs

## 📋 Estructura del Sitemap

### 🏠 Páginas Públicas

#### 1. **Página Principal** (`/`)
- **URL**: `https://www.luzerugs.com.ar/`
- **Prioridad**: 1.0 (máxima)
- **Frecuencia de cambio**: Semanal
- **Descripción**: Página principal con catálogo de alfombras, filtros y información de la empresa
- **Contenido**:
  - Hero Section
  - Sección del equipo
  - Filtros de búsqueda
  - Catálogo de alfombras
  - Información de la empresa
  - Footer

#### 2. **Página de Login** (`/login`)
- **URL**: `https://www.luzerugs.com.ar/login`
- **Prioridad**: 0.3 (baja)
- **Frecuencia de cambio**: Mensual
- **Descripción**: Página de acceso al panel de administración
- **Nota**: No indexada por motores de búsqueda (`noIndex={true}`)

### 🔒 Páginas Protegidas (No incluidas en sitemap)

#### Panel de Administración (`/admin`)
- **URL**: `https://www.luzerugs.com.ar/admin`
- **Acceso**: Requiere autenticación
- **Descripción**: Dashboard principal del admin
- **Bloqueado en robots.txt**

#### Agregar Alfombra (`/admin/add`)
- **URL**: `https://www.luzerugs.com.ar/admin/add`
- **Acceso**: Requiere autenticación
- **Descripción**: Formulario para agregar nuevas alfombras
- **Bloqueado en robots.txt**

#### Editar Alfombra (`/admin/edit/:id`)
- **URL**: `https://www.luzerugs.com.ar/admin/edit/:id`
- **Acceso**: Requiere autenticación
- **Descripción**: Formulario para editar alfombras existentes
- **Bloqueado en robots.txt**

## 🗂️ Archivos del Sitemap

### 1. **sitemap.xml** (Estático)
- **Ubicación**: `/public/sitemap.xml`
- **Tipo**: Sitemap estático básico
- **Contenido**: URLs principales del sitio

### 2. **robots.txt**
- **Ubicación**: `/public/robots.txt`
- **Función**: Control de acceso para crawlers
- **Configuración**:
  - Permite acceso a páginas públicas
  - Bloquea acceso al panel de administración
  - Bloquea archivos de configuración
  - Referencia al sitemap

### 3. **sitemapGenerator.js** (Utilidad)
- **Ubicación**: `/src/utils/sitemapGenerator.js`
- **Función**: Generación dinámica de sitemaps
- **Características**:
  - Generación de URLs dinámicas para alfombras
  - Soporte para categorías
  - Formato XML estándar

### 4. **api/sitemap.xml.js** (Endpoint API)
- **Ubicación**: `/api/sitemap.xml.js`
- **Función**: Endpoint dinámico para Vercel
- **Características**:
  - Generación en tiempo real
  - Cache de 1 hora
  - Fallback a sitemap estático

## 🔧 Configuración SEO

### Meta Tags por Página

#### Página Principal
```jsx
<Seo
  title="Luzé Rugs | Fabrica de alfombras artesanales"
  description="Explorá nuestra colección de alfombras tufting hechas a mano. Diseños únicos, arte textil y decoración moderna."
/>
```

#### Página de Login
```jsx
<Seo
  title="Iniciar Sesión | Luzé Rugs"
  description="Acceso al panel de administración de Luzé Rugs."
  noIndex={true}
/>
```

## 🚀 Implementación Futura

### Páginas Individuales de Alfombras
Si se implementan páginas individuales para cada alfombra:

```javascript
// Ejemplo de URL dinámica
/carpet/:id

// Ejemplo: /carpet/alfombra-andina-tradicional
```

### Páginas de Categorías
Si se implementan páginas de categorías:

```javascript
// Ejemplo de URL de categoría
/category/:categoryName

// Ejemplo: /category/tradicional
```

### Sitemap de Imágenes
Para optimizar imágenes en motores de búsqueda:

```xml
<url>
  <loc>https://www.luzerugs.com.ar/carpet/1</loc>
  <image:image>
    <image:loc>https://www.luzerugs.com.ar/images/alfombra-1.jpg</image:loc>
    <image:title>Alfombra Andina Tradicional</image:title>
    <image:caption>Alfombra artesanal hecha a mano</image:caption>
  </image:image>
</url>
```

## 📊 Monitoreo y Mantenimiento

### Herramientas Recomendadas
1. **Google Search Console**: Monitoreo de indexación
2. **Google Analytics**: Análisis de tráfico
3. **Screaming Frog**: Auditoría técnica de SEO

### Tareas de Mantenimiento
- [ ] Actualizar `lastmod` en sitemap estático mensualmente
- [ ] Verificar que robots.txt esté actualizado
- [ ] Monitorear errores 404 en Search Console
- [ ] Optimizar imágenes con alt tags descriptivos
- [ ] Revisar velocidad de carga del sitio

## 🔗 URLs Importantes

### Producción
- **Sitio Principal**: https://www.luzerugs.com.ar/
- **Sitemap**: https://www.luzerugs.com.ar/sitemap.xml
- **Robots**: https://www.luzerugs.com.ar/robots.txt

### Desarrollo
- **Sitemap Dinámico**: http://localhost:5173/api/sitemap.xml (si se implementa)

## 📝 Notas Técnicas

### Estructura de URLs
- **Formato**: Clean URLs sin parámetros
- **SEO-friendly**: URLs descriptivas y legibles
- **Responsive**: Optimizado para móviles

### Configuración de Vercel
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

### Headers de Cache
- **Sitemap**: Cache de 1 hora
- **Robots.txt**: Sin cache (siempre actualizado)
- **Recursos estáticos**: Cache largo plazo
