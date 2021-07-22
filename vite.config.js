import * as path from 'path'
import { defineConfig } from 'vite'
import compress from 'vite-plugin-compress'

export default defineConfig({
    plugin:[compress()],
    root: path.resolve(__dirname, './src'),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    build:{
        outDir:path.resolve(__dirname,'./dist'),
        target:'es2015',
        sourcemap:false,
        polyfillDynamicImport:true,
        manifest:true
    },
    define:{
        buildTime: JSON.stringify(new Date().toTimeString())
    }
})
