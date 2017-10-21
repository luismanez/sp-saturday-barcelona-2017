
# Notes

## Main index
- Develop from any OS
- Keep calm and be modern
- WPs samples from Community
- New languages, tools, libraries, frameworks, words
- Learning roadmap
- spfx project anatomy and toolchain
- Webparts: wp, property pane, external libraries, log & debug
- extensions
- deployment
- Real world problems
    * Getting SharePoint data
    * Getting MS Graph data
    * Calling Azure AD custom API
    * ALM
    * Provisioning
    * Jobs
    * Run with elevated privileges
- Community resources

## Random stuff
Create a spfx project without running _npm install_
```
yo @microsoft/sharepoint --skip-install
```

Just after a npm install:
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

--

Crear proyecto basico sin npm install
Comentar ficheros principales del proyecto (packages.json, gulp.config, WP manifest, WP code)
Comentar npm install para resolver dependencias (5 mins o max descargando pacjages)
---
Abrir proyecto con node_modules
Comentar toolchain y carpetas autogeneradas y css modules typings
Comentar local workbench
---
Abrir proyecto ImageCardList
Comentar SP Workbench y mostrar funcionalidad
Debug and breakpoints (mencion para el add-in de debug en VSCode)
---
Abrir proyecto ImageCardListLive
Rellenar Modelo
Comentar Mock provider
Rellenar getItems del SP provider
Rellenar cargar un provider u otro segun environment en el WebPart
Comentar React components (container, smart, dumb components)
Comentar Office fabric react components
Rellenar componentDidMount, initState
Comentar .map de las imagenes devueltas
Ejecutar
Deploy package con localhost como CDN (segun tiempo)