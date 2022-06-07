import Drawflow from 'drawflow'

export type EditorInstance = Drawflow & {
  precanvas: HTMLElement
  hasQueryNode?: boolean
}

export enum PipelineNodeType {
  Query = 'query',
  Retriever = 'retriever',
  Reader = 'reader',
}

export type AdjustedPosition = {
  x: number
  y: number
}
