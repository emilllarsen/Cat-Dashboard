import { Cats } from "../models/cats.js";
import { BusinessLogicError } from '../utils/errors.js';
/**
 * What we need
 * Get all cats
 * Get one cat
 * Create a new cat
 * Modify the existing cat
 * Delete an cat
 */

export async function getallCatsService(){
    const cat = await Cats.find();
    if(!cat){
        throw new BusinessLogicError("Could not find any cats", 400);
    }
    return cat;
}

export async function getOneCatService(id) {
    const cat = await Cats.findById(id);
    if(!cat){
        throw new BusinessLogicError("Could not find this cat", 400);
    }
    return cat;
}

export async function createCatService(catData) {
    const newCat = await Cats.create(catData);
    if(!newCat){
        throw new BusinessLogicError("Could not create a new cat, try again later", 400);
    }
    return newCat;
}

export async function updateCatService(catData){
    const existingCat = await Cats.findByIdAndUpdate(catData);
}

export async function deleteCat(id){
    const removeCat = await Cats.findByIdAndDelete(id);
    if(!removeCat){
        throw new BusinessLogicError("Could not delete this cat", 400);
    }
    return removeCat;
}

