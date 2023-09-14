## El Proyecto 00 Inicializacion de un Proyecto en React con Vite

Este Proyecto es sobre como podemos inicializar un proyecto en React con Vite
Instalando lo minimo de Vite y configurandolo
(Vanilla y Javascript)

### Instalar Plugin de Vite 
Primero Instalamos el Plugin de React
`npm install @vitejs/plugin-react -E`

### Instalar Dependencia de React y ReactDOM
Instalamos React y ReactDom
`npm install react react-dom -E`

### Instalar el Inter
Instalamos el Inter
`npm install standard -D`

Configuramos el Inter agregandolo en el proyecto, en el package.json

    ,
    "eslintConfig": {
        "estends": "./node_modules/standard/eslintrc.json"
    }

### Creamos la Configuracion del Plugin de Vite creando un fichero vite.config.js
    import {defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
    plugins: [react()],
    })

### Creamos el punto de entrada en el main.jsx
    import { createRoot } from 'react-dom/client';
    import { App } from './src/App.jsx';

    const root = createRoot(document.getElementById('app'));
    root.render(< App/>);

### Creamos el fichero App.jsx
    export function App(){
    	return <h1>Hello World App</h1>
    }

