import mongoose from 'mongoose'

const UsrSchema = new mongoose.Schema({
  username: String,
  password: String
});
UsrSchema.pre('add', function (next) {

});
UsrSchema.statics = {
  fetch(cb) {
  },
  findByUsername(username, cb) {
    return new Promise((resolve, reject) => {
      this.findOne({
        username: username
      }, (error, doc) => {
        resolve(doc === null ? false : {
          username: doc.username,
          password: doc.password
        })
      })
    })
  }
};
export default UsrSchema
