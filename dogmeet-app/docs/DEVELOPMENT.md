# Guía de Desarrollo - DogMeet

## 🏗️ Arquitectura del Proyecto

### Estructura de Archivos
```
dogmeet-app/
├── public/                 # Archivos estáticos servidos directamente
│   ├── css/
│   │   └── styles.css     # Estilos globales y componentes
│   ├── js/
│   │   └── app.js         # Lógica principal de la aplicación
│   ├── images/            # Imágenes y assets estáticos
│   └── index.html         # Punto de entrada de la aplicación
├── src/                   # Código fuente organizado (futuro)
│   ├── components/        # Componentes reutilizables
│   ├── services/          # Servicios y APIs
│   ├── utils/             # Utilidades y helpers
│   └── assets/            # Assets del proyecto
└── docs/                  # Documentación del proyecto
```

## 🎨 Sistema de Diseño

### Variables CSS
El proyecto utiliza un sistema de variables CSS para mantener consistencia:

```css
:root {
    --primary: #FF6B6B;      /* Color principal - Coral */
    --secondary: #4ECDC4;    /* Color secundario - Turquesa */
    --accent: #FFD166;       /* Color de acento - Amarillo */
    --dark: #1A535C;         /* Color oscuro - Azul marino */
    --light: #F7FFF7;        /* Color claro - Blanco roto */
    --gray: #E0E0E0;         /* Gris claro */
    --dark-gray: #757575;    /* Gris oscuro */
}
```

### Tipografía
- **Títulos**: Poppins (Google Fonts)
- **Texto**: Open Sans (Google Fonts)
- **Iconos**: Font Awesome 6.4.0

### Breakpoints Responsive
```css
/* Mobile First */
@media (max-width: 480px) { /* Móviles pequeños */ }
@media (max-width: 768px) { /* Móviles y tablets */ }
@media (min-width: 769px) { /* Desktop */ }
```

## 🧩 Componentes Principales

### 1. Navegación por Pestañas
```javascript
class DogMeetApp {
    setupTabNavigation() {
        // Maneja el cambio entre pestañas
    }
    
    switchTab(button) {
        // Cambia la pestaña activa
    }
}
```

### 2. Galería de Fotos
```javascript
function changeMainPhoto(element) {
    // Cambia la foto principal del perro
}
```

### 3. Sistema de Ocupación de Pipicanes
```javascript
setPipicanOccupationColor(item, occupation) {
    // Establece colores según ocupación
    // Verde: < 30%, Amarillo: 30-60%, Rojo: > 60%
}
```

## 🔧 Funcionalidades Implementadas

### Navegación
- ✅ Sistema de tabs funcional
- ✅ Transiciones suaves
- ✅ Estado persistente

### Perfil de Perro
- ✅ Galería de fotos
- ✅ Información básica
- ✅ Certificados
- ✅ Compatibilidad

### Mapa de Pipicanes
- ✅ Lista de pipicanes
- ✅ Indicadores de ocupación
- ✅ Check-in funcional

### Sistema de Match
- ✅ Interfaz tipo Tinder
- ✅ Botones de acción
- ✅ Filtros básicos

### Profesionales
- ✅ Catálogo de servicios
- ✅ Sistema de reservas
- ✅ Información detallada

### Revista Canina
- ✅ Contenido educativo
- ✅ Interactividad
- ✅ Tabla de criadores

### Eventos
- ✅ Lista de eventos
- ✅ Confirmación de asistencia
- ✅ Creación de eventos

## 🚀 Scripts de Desarrollo

### Iniciar Servidor de Desarrollo
```bash
npm run dev
```
Inicia live-server con recarga automática en puerto 3000.

### Servidor Estático
```bash
npm start
```
Inicia un servidor HTTP estático.

## 📝 Convenciones de Código

### HTML
- Usar elementos semánticos (`<section>`, `<nav>`, `<header>`, `<footer>`)
- Atributos `alt` en todas las imágenes
- Estructura accesible

### CSS
- Usar variables CSS para colores
- Mobile-first approach
- BEM methodology para clases complejas
- Flexbox y Grid para layouts

### JavaScript
- ES6+ syntax
- Clases para organización
- Funciones con nombres descriptivos
- Comentarios JSDoc para funciones complejas

## 🧪 Testing (Futuro)

### Estrategia de Testing
- Unit tests para funciones JavaScript
- Integration tests para componentes
- E2E tests para flujos completos

### Herramientas Planificadas
- Jest para unit testing
- Cypress para E2E testing
- Lighthouse para performance

## 🚀 Deployment (Futuro)

### Opciones de Hosting
- Netlify (recomendado para SPAs)
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Optimizaciones
- Minificación de CSS/JS
- Compresión de imágenes
- Lazy loading
- Service Workers para PWA

## 🔄 Flujo de Desarrollo

1. **Feature Branch**: Crear rama desde `main`
2. **Desarrollo**: Implementar funcionalidad
3. **Testing**: Verificar funcionamiento
4. **Code Review**: Revisión de código
5. **Merge**: Integrar a `main`
6. **Deploy**: Desplegar a producción

## 📚 Recursos Útiles

### Documentación
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Herramientas
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [ColorZilla](https://www.colorzilla.com/) - Herramientas de color
- [Figma](https://figma.com/) - Diseño de interfaces

## 🐛 Debugging

### Herramientas de Desarrollo
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector

### Problemas Comunes
1. **Rutas de archivos**: Verificar que las rutas CSS/JS sean correctas
2. **CORS**: Usar servidor local para desarrollo
3. **Responsive**: Probar en diferentes dispositivos

## 📞 Soporte

Para dudas sobre desarrollo:
- Crear issue en GitHub
- Contactar al equipo de desarrollo
- Revisar documentación existente
