import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";



class HousesService {
    async getAll() {
        return await dbContext.Houses.find({}).populate('creator', 'picture name')
    }

    async getById(id) {
        const house = await dbContext.Houses.findById(id).populate('creator', 'picture name')
        if (!house) {
            throw new BadRequest('Invalid ID')
        }
        return house
    }

    async create(body) {
        const house = await dbContext.Houses.create(body)
        await house.populate('creator', 'picture name')
        return house
    }

    async edit(update) {
        const original = await this.getById(update.id)
        if (original.creatorId.toString() !== update.creator.Id) {
            
        }
    }
}