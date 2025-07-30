import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const __dirname = path.dirname(__filename);
const resolvePath = (dir: string) => path.join(__dirname, dir);

export default defineConfig({
  plugins: [react()],
	css: {
		preprocessorOptions: {
			less: {
				additionalData:
					`@import "@/styles/global.less";@import "@/styles/mixin.less";@import "@/styles/variable.less";`,
				javascriptEnabled: true,
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
