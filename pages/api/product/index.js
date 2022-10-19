import { createNewProduct } from "../../../src/services/produtos";

if (req.method === "POST") {
    const { product } = req.body

    if (product) {
        const NewProduct = await createNewProduct(product)
        res.status(200).json(NewProduct)
    } else {
        res.status(404).json("Não foi possível inserir um novo produto")
    }
}

/*
 //adicionar um closet a base de dados
    if (req.method === "POST") {

        const token = req.headers["authorization"]
        const user = await findUserByToken(token)

        console.log(user)
        const objCloset = await createCloset(user._id)

        if (objCloset != undefined) {
            res.status(200).json(objCloset)
        } else {
            res.status(404).json("Não foi possível inserir um novo closet")
        }

    } 

*/