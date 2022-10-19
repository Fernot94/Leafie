import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "Leafie"
const COLLECTION_NAME = "reservas"


//adiciona uma reserva ao banco de dados
async function insertNewReserve(reserve) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(reserve)).insertedId
}

//deletar uma reserva
async function deleteOneReserveById(reserveId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.delete({ _id: new ObjectId(reserveId) })
}

//obter reserva pelo id
async function getProductById(reservetId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(reserveId) })
}



export {
    insertNewReserve,
    deleteOneReserveById

}