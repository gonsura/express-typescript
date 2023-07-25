import { Schema, model } from 'mongoose'
import { INotes } from '@interfaces/models'

const notesSchema = new Schema<INotes>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

const Notes = model<INotes>('Notes', notesSchema)

export default Notes
