El Proyecto 00
    Es Sobre como inicializar un proyecto de React con Vite
    Instalando lo minimo de Vite y Configurandolo
    (Usando Vanilla) - (Javascript)

    ** Instalar Plugin de Vite**
    npm install @vitejs/plugin-react -E

    ** Instalar Dependencia de React y ReactDOM **
    npm install react react-dom -E

    ** Instalar el Inter **
    npm install standard -D

    ** Configurar el Inter en package.json**
    [
        ,
        "eslintConfig" : {
            "estends" : './node_modules/standard/eslintrc.json'
        }
    ]

    ** Crear la Configuracion de Vite en vite.config.js**
    [
        import {defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        export default defineConfig({
            plugins: [react()],
        })
    ]

    ** En el main.js **
    [
        import { createRoot } from 'react-dom/client';
        import { App } from './src/App.jsx';

        const root = createRoot(document.getElementById('app'));
        root.render(< App/>);
    ]

    ** En el index.js **
    Agregar la Linea 
    [
        <script type="module" src="/main.jsx"></script>
    ]

    ** Crear el archivo App.jsx **
    [
        export function App(){
            return <h1>Hello World App</h1>
        }
    ]

