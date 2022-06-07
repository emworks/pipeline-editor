import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from 'src/api'
import { Pipeline } from 'src/api/types'

export const fetchPipeline = createAsyncThunk(
  'pipeline/fetchPipeline',
  async (id: string, thunkAPI) => {
    const response = await api.getPipelineById(id)
    return response
  }
)

interface PipelineState {
  items: Pipeline[]
  loading: boolean
}

const initialState: PipelineState = {
  items: [],
  loading: true,
}

const pipelineSlice = createSlice({
  name: 'pipeline',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPipeline.fulfilled, (state, action: PayloadAction<Pipeline[]>) => {
      state.items = action.payload
    })
  },
})

export default pipelineSlice.reducer