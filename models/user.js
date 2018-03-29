import mongoose from 'mongoose'
import UsrSchema from '../schemas/user'

const UsrModel = mongoose.model('Usr', UsrSchema)

export default UsrModel
