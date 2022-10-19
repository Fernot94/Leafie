import { insertNewProduct, deleteProductById, getProductById } from "../data/produtos";

//criar um novo produto
async function createNewProduct(pathToImage, name, price) {
    const product = await insertNewProduct({
        pathToImage,
        name,
        price
    })
    return product
}

//excluir produto pelo id
async function moveProductToTrashById(productId) {
    return deleteProductById(productId)
}

//mostrar produto pelo id
async function showProductById(productId) {
    const productOne = getProductById(productId)
    if (productOne === undefined) {
        return "código inexistente"
    }
    return productOne
}

export {
    createNewProduct,
    moveProductToTrashById,
    showProductById
}