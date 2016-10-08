# angular-1.5-components-seed
Seed project for Angular 1.5.


#### Whats inside:

- Basic app structure to get you started with component architecture
- Gulp tasks for
  - bundling
  - serving and live reloading
  - tamplate cache
  
  
#### How to run

Clone the repo

Run `npm install`

Run `npm start`


#### Directory Structure:

```
.
├── src
│   ├── app
│   │   ├── common
│   │   │   ├── app.component.html
│   │   │   ├── app.component.js
│   │   │   ├── app.component.scss
│   │   │   ├── app.controller.js
│   │   │   └── app.module.js
│   │   ├── components
│   │   │   ├── auth
│   │   │   │   ├── login
│   │   │   │   │   ├── login.component.html
│   │   │   │   │   ├── login.component.js
│   │   │   │   │   ├── login.component.scss
│   │   │   │   │   └── login.controller.js
│   │   │   │   ├── register
│   │   │   │   │   ├── register.component.html
│   │   │   │   │   ├── register.component.js
│   │   │   │   │   ├── register.component.scss
│   │   │   │   │   └── register.controller.js
│   │   │   │   ├── auth.config.js
│   │   │   │   ├── auth.module.js
│   │   │   │   └── auth.service.js
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.js
│   │   │   │   ├── dashboard.component.scss
│   │   │   │   └── dashboard.module.js
│   │   │   └── components.module.js
│   │   ├── _variables.scss
│   │   ├── root.component.html
│   │   ├── root.component.js
│   │   └── root.module.js
│   └── index.html
├── gulpfile.babel.js
├── gulpfile.config.js
├── jsconfig.json
├── package.json
└── typings.json
```
