import Axios from 'axios'
import mock from './mock'
import { APIEndpoint } from './types'

import * as pipelineService from './services/pipelineService'

const baseAPI = Axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
})

if (['local', 'test'].includes(`${process.env.REACT_APP_ENV}`)) {
  mock(baseAPI)
}

export const buildPath = (endpoint: APIEndpoint, routeParams?: Record<string, string | number>) => {
  if (!routeParams) {
    return endpoint
  }
  return Object.entries(routeParams).reduce((acc, [key, value]) => {
    return acc.split(`:${key}`).join(String(value)) as APIEndpoint
  }, endpoint)
}

const api = {
  ...pipelineService,
}

export default api

export { baseAPI }
