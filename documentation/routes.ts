// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
import { Router } from '@layer0/core/router'
import { nextRoutes } from '@layer0/next'

export default new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
  .use(nextRoutes) // automatically adds routes for all files under /pages
