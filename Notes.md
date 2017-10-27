# Notes
---
(13')
PPT content
---
(4'30")
Crear proyecto basico sin npm install
    yo @microsoft/sharepoint --skip-install
Comentar ficheros principales del proyecto (packages.json, gulp.config, WP manifest, WP code)
Comentar npm install para resolver dependencias (5 mins o max descargando pacjages)
---
(7')
Abrir proyecto con node_modules
Comentar toolchain y carpetas autogeneradas:

    gulp build
        /lib: pure JS files and maps for debugging
        /temp: tslist config
        - types CSS Modules: .scss.ts

    gulp serve
        /dist: JS bundle and manifest (JS is not minified)

    gulp bundle --ship (JS minified)

    gulp package-solution
        /sharepoint: .sppkg file and debug folder with .sppkg content before zipping it

    gulp clean -> deletes all previous folder except /sharepoint

Comentar local workbench (comentar cuando ejecute el 'gulp serve')
---
(3')
Abrir proyecto HelloBcnFinal
Comentar SP Workbench y mostrar funcionalidad
Debug and breakpoints (mencion para el add-in de debug en VSCode)
---
Abrir proyecto HelloBcnLive
Rellenar Modelo
Comentar Mock provider
Rellenar getItems del SP provider
Rellenar cargar un provider u otro segun environment en el WebPart
Comentar React components (container, smart, dumb components, mostrar link: https://medium.com/@delveeng/react-and-flux-in-production-best-practices-c87766c57cb6)
Comentar Office fabric react components
Rellenar componentDidMount, initState
Comentar .map de las imagenes devueltas
Ejecutar
---
Real world problems slide: 6'
Cierre: 2'