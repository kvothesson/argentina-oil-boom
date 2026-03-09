# Argentina Oil Boom

App informativa sobre oportunidades en el sector energético argentino (Vaca Muerta, acciones, sectores, ahorros).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173/argentina-oil-boom/ (el path es el mismo que en GitHub Pages).

## Subir a GitHub Pages

1. **Crear el repositorio en GitHub**  
   Crea un repo llamado `argentina-oil-boom` (o el nombre que quieras). Si usás otro nombre, cambiá `base` en `vite.config.ts` y `homepage` en `package.json`.

2. **Inicializar Git y subir el código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/kvothesson/argentina-oil-boom.git
   git push -u origin main
   ```

3. **Publicar en GitHub Pages**
   ```bash
   npm run deploy
   ```
   Esto hace un build y sube la carpeta `dist` a la rama `gh-pages`.

4. **Activar GitHub Pages en el repo**  
   En GitHub: **Settings → Pages → Source**: elegí la rama **gh-pages** y la carpeta **/ (root)**. Guardá.

La app quedará en: **https://kvothesson.github.io/argentina-oil-boom/**
