import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from 'src/api'
import { Pipeline } from 'src/api/types'

export const fetchPipeline = createAsyncThunk('pipeline/fetchPipeline', async (id: string, thunkAPI) => {
  const { data } = await api.getPipelineById(id)
  return data
})

interface PipelineState {
  data: Pipeline
  loading: boolean
}

const initialState: PipelineState = {
  data: {},
  loading: true,
}

const pipelineSlice = createSlice({
  name: 'pipeline',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPipeline.fulfilled, (state, action: PayloadAction<Pipeline>) => {
      state.data = action.payload
    })
  },
})

export default pipelineSlice.reducer
