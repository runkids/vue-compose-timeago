import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import alias from 'rollup-plugin-alias'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import rimraf from 'rimraf'
import pascalcase from 'pascalcase'

const cwd = process.cwd()
// eslint-disable-next-line
const pkg = require(path.join(cwd, 'package.json'))

rimraf.sync(path.join(cwd, './dist'))

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} Willy Hong
  * @license MIT
  */`

const exportName = pascalcase(pkg.name)

function createEntry(
  {
    format, // Rollup format (iife, umd, cjs, es)
    external = ['vue', '@vue/composition-api'],
    input = 'src/index.js', // entry point
    env = 'development', // NODE_ENV variable
    minify = false,
    isBrowser = false, // produce a browser module version or not
  } = {
    input: 'src/index.js',
    env: 'development',
    minify: false,
    isBrowser: false,
  }
) {
  // force production mode when minifying
  if (minify) env = 'production'

  const config = {
    input,
    plugins: [
      replace({
        __VERSION__: pkg.version,
        'process.env.NODE_ENV': `'${env}'`,
      }),
      alias({
        // entries: [{ find: 'firebase', replacement: path.join(__dirname, './stub') }],
      }),
    ],
    output: {
      banner,
      globals: {
        '@vue/composition-api': 'VueCompositionApi',
      },
      file: `dist/${pkg.name}.UNKNOWN.js`,
      format,
    },
  }

  if (format === 'iife') {
    config.output.file = pkg.unpkg
    config.output.name = exportName
  } else if (format === 'es') {
    config.output.file = isBrowser ? pkg.browser : pkg.module
  } else if (format === 'cjs') {
    config.output.file = pkg.main
  }

  if (!external) {
    config.plugins.push(resolve(), commonjs())
  } else {
    config.external = external
  }

  if (minify) {
    config.plugins.push(
      terser({
        module: format === 'es',
        output: {
          preamble: banner,
        },
      })
    )
    config.output.file = config.output.file.replace(/\.js$/i, '.min.js')
  }

  return config
}

const builds = [createEntry({ format: 'es', isBrowser: true })]

if (pkg.unpkg)
  builds.push(
    createEntry({ format: 'iife' }),
    createEntry({ format: 'iife', minify: true }),
    createEntry({ format: 'es', isBrowser: true, minify: true })
  )

export default builds
