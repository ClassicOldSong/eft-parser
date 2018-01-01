// Import base config
import base from './rollup.base'
// Import browsersync config
import bsConfig from './bs-config'
// Import dev plugins
import browsersync from 'rollup-plugin-browsersync'

base.output.file = base.devDest
base.plugins.push(browsersync(bsConfig))
base.watch = {
	chokidar: true,
	include: 'src/**'
}

delete base.bundle
delete base.devPath
delete base.devDest
delete base.proPath
delete base.proDest

export default base
