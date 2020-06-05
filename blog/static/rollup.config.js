import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import babel from "rollup-plugin-babel";

const production = process.env.NODE_ENV === "production";

console.log(`Production: ${production}`)

export default {
	input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'dist/svelte.min.js'
	},
	plugins: [

		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('dist/svelte.min.css');
			}
		}),

        babel({
			extensions: ['.js', '.mjs', '.html', '.svelte'],
			runtimeHelpers: true,
			exclude: [
				'node_modules/**'
			],
			presets: [
				[
					'@babel/preset-env',
					{
						targets: '> 0.25%, not dead, IE 11',
						useBuiltIns: 'usage',
						corejs: 3
					}
				]
			],
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				[
					'@babel/plugin-transform-runtime',
					{
						useESModules: true
					}
				]
			]
		}),


		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `src` directory and refresh the
		// browser on changes when not in production
		!production && livereload('src'),

		// If we're building for production (npm run dist
		// instead of npm run dev), minify
		production && terser(),

        copy({
            targets: [
                {
                    src: 'node_modules/noty/lib/**/*',
                    dest: 'lib/noty'
                }
            ]
        }),

	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
