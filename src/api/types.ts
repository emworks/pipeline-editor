export enum APIEndpoint {
  Pipelines = '/pipelines',
  PipelineById = '/pipelines/:id',
}

export type Pipeline = {
  id: string
}