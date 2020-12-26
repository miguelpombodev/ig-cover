import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/IG_Cover', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
