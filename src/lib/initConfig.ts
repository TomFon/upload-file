import { join, posix, basename, extname } from 'path'
import { existsSync, lstatSync } from 'fs'
import Config from '../interface/config'
import yargs from 'yargs'

yargs.options({
  p: {
    alias: 'port',
    demandOption: false,
    default: '22',
    describe: 'ssh2 port',
    type: 'number'
  },
  h: {
    alias: 'host',
    demandOption: true,
    describe: 'server ip address',
    type: 'string'
  },
  u: {
    alias: 'username'
  }
})
console.log(yargs.argv)
const config:Config = {
  host: '',
  port: 22,
  username: 'ltf',
  password: '',
  localPath: './src/lib/',
  remotePath: '/home/ltf/',
  inCludeDirectory: true,
  isFile: false,
  isDirectory: false,
  basename: '',
  realRemotePath: '',
  realLocalPath: '',
  tmpPath: join(__dirname, '../../tmp/release-package.zip')
}
// absolute path
config.realLocalPath = join(process.cwd(), config.localPath)

config.realRemotePath = posix.join(config.remotePath, 'release-package.zip')

if (existsSync(config.realLocalPath)) {
  const stat = lstatSync(config.realLocalPath)
  config.isFile = stat.isFile()
  config.isDirectory = stat.isDirectory()
  config.basename = basename(config.realLocalPath)
  config.extname = extname(config.realLocalPath)
} else {
  throw new Error('localPath does not exist')
}

export default config