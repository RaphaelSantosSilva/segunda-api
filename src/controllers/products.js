const ProductsModel = require('../models/products')

async function get(req,res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)


    res.send(products)
}

async function post(req,res){
    const {
        name,
        brand,
        price,
    } = req.body

    const products = new ProductsModel({
        name,
        brand,
        price
    })

    products.save()

    res.send({
        message: 'Dados salvos com sucesso'
    })
}

async function put(req,res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({_id:id}, req.body, {new: true})

    res.send({
        message: 'Produto alterado com sucesso',
        product,
    })

   /*  const product = await ProductsModel.findOne({_id: id})

    await product.updateOne(req.body)

    res.send({
        message: 'Produto alterado com sucesso',
        product,
    }) */
}

async function remove(req,res){
    const { id } = req.params

    const remove = await ProductsModel.deleteOne( {_id : id })

    const message = remove.ok ? 'Sucess' : 'Error'

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}