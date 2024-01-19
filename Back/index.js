import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from "cors"
const app = express()
const port = 7000

app.use(express.json())
app.use(cors())


const newSchema = new Schema({
    name: String,
    desc: String,
    price: Number
});

const NewModel = mongoose.model('New', newSchema);



app.get('/', async (req, res) => {
    try {
        const product = await NewModel.find({})
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await NewModel.findById(id)
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.post('/', async (req, res) => {
    try {
        const {name,desc,price} = req.body
        const product =  new NewModel({name,desc,price})
        await product.save()
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {name,desc,price} = req.body
        const product =  await NewModel.findByIdAndUpdate(id,{name,desc,price})
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await NewModel.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        console.log(error.message);
    }
})


mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Coonected !'))
    .catch(() => console.log('Not Coonected !'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})