
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