import mongoose from 'mongoose'

const OrdersDaySchema = new mongoose.Schema({
  date: Date,
  value: Number
})

export default mongoose.model('OrdersDay', OrdersDaySchema)