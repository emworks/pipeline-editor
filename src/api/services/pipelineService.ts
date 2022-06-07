import { baseAPI, buildPath } from '..'
import * as types from '../types'

export const getPipelineById = async (id: string) => {
  const path = buildPath(types.APIEndpoint.PipelineById, { id })
  const { data } = await baseAPI.get<types.Pipeline[]>(path)
  return data
}
