import { AdjustedPosition, EditorInstance, PipelineNodeType } from './types'

export const getAdjustedPosition = (editor: EditorInstance, pos_x: number, pos_y: number): AdjustedPosition => {
  pos_x =
    pos_x * (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) -
    editor.precanvas.getBoundingClientRect().x *
      (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom))
  pos_y =
    pos_y * (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) -
    editor.precanvas.getBoundingClientRect().y *
      (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom))
  return { x: pos_x, y: pos_y }
}

export const hasQueryNode = (editor: EditorInstance) => {
  const { data } = editor.drawflow.drawflow.Home
  return Object.values(data).find(({ name }) => name === PipelineNodeType.Query)
}
