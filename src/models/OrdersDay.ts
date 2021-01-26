import mongoose from 'mongoose'

const OrdersDaySchema = new mongoose.Schema({
  date: String,
  value: Number
})

export default mongoose.model('OrdersDay', OrdersDaySchema)