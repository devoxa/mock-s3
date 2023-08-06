import fs from 'fs'
import S3MockServer from 's3rver'

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8092
const BUCKET_NAMES = (process.env.BUCKET_NAMES || 'default').split(',')

const bucketConfigs = [
  fs.readFileSync(require.resolve('s3rver/example/cors.xml')),
  fs.readFileSync(require.resolve('s3rver/example/website.xml')),
]

const app = new S3MockServer({
  port: PORT,
  address: '0.0.0.0',
  directory: '/tmp/mock-s3',
  vhostBuckets: false,
  configureBuckets: BUCKET_NAMES.map((name) => ({ name, configs: bucketConfigs })),
})

void app.run(() => console.log(`Server listening on :${PORT}`))
