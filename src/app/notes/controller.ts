import { Middleware } from '@interfaces/main'
import notes from '../../model/notes'
import ValidatError from '../../utils/validatError'
import HttpError from '../../utils/httpError'
import { INotes } from '@interfaces/models'


export const getNotes: Middleware = async (_req, res, next) => {
  try {
    const data = await notes.find()
    if (!data) throw new HttpError('notes is empty', 204)
    res.json(data)
  } catch (error) {
    next(error)
  }
}

export const getNoteById: Middleware = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await notes.findById(id)
    if (!data) throw new HttpError('note not found', 404)
    res.json(data)
  } catch (error) {
    next(error)
  }
}

export const postNotes: Middleware = async (req, res, next) => {
  try {
    new ValidatError(req.body.title, 'title').undef().is('string')
    new ValidatError(req.body.content, 'content').undef().is('string')
    const payload: INotes = req.body
    const data: INotes = await notes.create(payload)
    res.json({ status: 'note created', data })
  } catch (error) {
    next(error)
  }
}

export const deleteNotes: Middleware = async (req, res, next) => {
  try {
    const { id } = req.params
    await notes.findByIdAndDelete(id)
    res.json({ status: 'note deleted' })
  } catch (error) {
    next(error)
  }
}

export const updateNotes: Middleware = async (req, res, next) => {
  try {
    const { id } = req.params
    await notes.findByIdAndUpdate(id, req.body)
    res.json({ status: 'note updated' })
  } catch (error) {
    next(error)
  }
}