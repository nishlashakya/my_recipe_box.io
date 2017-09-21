export function addRecipe(data) {
    return {
      type: 'ADD_RECIPE',
      recipe: data
    }
}

export function deleteRecipe(data) {
    return {
      type: 'DELETE_RECIPE',
      recipe: data
    }
}

export function updateRecipe(data) {
    return {
      type: 'UPDATE_RECIPE',
      recipe: data
    }
}
