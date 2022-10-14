import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const name = 'dist/string-validators';

const bundle = config => ({
	...config,
	input: 'src/index.ts',
	external: id => !/^[./]/.test(id),
})


export default [
	bundle({
		plugins: [esbuild()],
		output: [
			{
				file: `${name}.js`,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: `${name}.mjs`,
				format: 'es',
				sourcemap: true,
			},
		],
	}),
	bundle({
		plugins: [dts()],
		output: {
			interop: 'auto',
			generatedCode: 'es2015',
			file: `${name}.d.ts`,
			format: 'es',
		},
	}),
]
