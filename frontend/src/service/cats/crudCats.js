import { apiFetch } from "@/api.js";

export async function createCat(catData) {
    return await apiFetch("/cats", {
        method: "POST",
        body: JSON.stringify(catData)
    });
}

export async function updateCat(id){
    return await apiFetch(`/cats/${id}`, {
        method: "PATCH"
    });
}

export async function deleteCat(id){
    return await apiFetch(`/cats/${id}`, {
        method: "DELETE"
    });
}




