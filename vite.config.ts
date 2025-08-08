import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path'

const __dirname = path.dirname(__filename);
const resolvePath = (dir: string) => path.join(__dirname, dir);

export default defineConfig({
  plugins: [
		react(),
		AutoImport({
			imports: ['react'],
			dts: true, // 生成 TypeScript 声明
			eslintrc: {
				enabled: true, // <-- this
			},
		}),
	],
	css: {
		preprocessorOptions: {
			less: {
				additionalData:
					`@import "@/styles/global.less";@import "@/styles/mixin.less";@import "@/styles/variable.less";`,
				javascriptEnabled: true,
			},
		},
	},
	build: {
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		rollupOptions: {
			output: {manualChunks(id: string) {
					if (id.includes('src/root.tsx')) {
						return 'root';
					}
					if (id.includes('src/components')) {
						return 'components';
					}
					if (id.includes('src/utils')) {
						return 'utils';
					}
					if (id.includes('src/constants')) {
						return 'constants';
					}
					if (id.includes('src/typings')) {
						return 'typings';
					}
					if (id.includes('src/styles')) {
						return 'styles';
					}
				}
			},
		},
	},
	resolve: {
		// 自动解析确定的扩展，可以在引入模块时不带扩展
		extensions: ['.js', '.jsx', '.json', '.less', '.ts', '.tsx', '.mjs'],
		// 路径别名
		alias: {
			'@': resolvePath('src'),
		},
	},
})
