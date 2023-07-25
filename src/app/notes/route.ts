import { Router } from 'express'
import { deleteNotes, getNoteById, getNotes, postNotes, updateNotes } from './controller'

const router = Router()

router.get('/', getNotes)

router.get('/:id', getNoteById)

router.post('/', postNotes)

router.delete('/:id', deleteNotes)

router.put('/:id', updateNotes)

export default router