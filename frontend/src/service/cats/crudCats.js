import { apiFetch } from "@/api.js";

export async function getAllCats(){
    return await apiFetch("/cats", {
        method: "GET"
    });
}

export async function createCat(catData) {
    return await apiFetch("/cats", {
        method: "POST",
        body: JSON.stringify(catData)
    });
}

export async function updateCat(id, catData){
    return await apiFetch(`/cats/${id}`, {
        method: "PATCH",
        body: JSON.stringify(catData)
    });
}

export async function deleteCat(id){
    return await apiFetch(`/cats/${id}`, {
        method: "DELETE"
    });
}




