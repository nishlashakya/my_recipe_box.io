const initialState = {
	recipes: [
		{	id: '123',
			title: '123food.com',
			description: 'tastyyy food',
			photo: 'burger.jpg'
		},
		{	id: '456',
			title: '123food.com',
			description: 'tastyyy food',
			photo: 'burger.jpg'
		},
		{title: '123food.com',
			description: 'tastyyy food',
			photo: 'burger.jpg'
		},
		{title: '123food.com',
			description: 'tastyyy food',
			photo: 'burger.jpg'
		}
	]
};

export function recipeReducer(state=initialState, action) {

	switch(action.type) {
		case 'ADD_RECIPE':
			// state.recipes.push(action.recipe)
			return {
				...state,
				recipes: [...state.recipes, action.recipe]
				// recipes: state.recipes.concat(action.recipe)
			}

		default:
			return {...state};
	}
}
