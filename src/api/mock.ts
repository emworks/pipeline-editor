import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { APIEndpoint } from './types'

const buildMatcher = (endpoint: APIEndpoint) => {
  return new RegExp(`${endpoint.replace(/:[^/]+/, '[^/]+')}$`)
}

export const sendResponse = <T>(fileName: string, statusCode = 200): Promise<[number, T]> => {
  return new Promise(async (resolve) => {
    const result = await import(`src/api/__mocks__/${fileName}`)
    resolve([statusCode, result.default])
  })
}

const setup = (mockAdapter: MockAdapter) => {
  mockAdapter.onGet(buildMatcher(APIEndpoint.PipelineById)).reply(() => {
    return sendResponse('getPipelineById')
  })
}

const mock = (axiosInstance: AxiosInstance) => {
  const mockAdapter = new MockAdapter(axiosInstance)
  setup(mockAdapter)
}

export default mock
