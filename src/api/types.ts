import { DrawflowNode } from 'drawflow'

export enum APIEndpoint {
  Pipelines = '/pipelines',
  PipelineById = '/pipelines/:id',
}

export type PipelineItem = DrawflowNode

export type Pipeline = Record<string, PipelineItem>

export type PipelineResponse = {
  data: Pipeline
}
