const initialState = {
	categories: [],
	categoryAddSuccess: false,
	categoryAddError: null
};

export function categoryReducer(state=initialState, action) {

	switch(action.type) {
		case 'CATEGORY_ADD_SUCCESS':
			return {
				...state,
        categories: state.categories.concat(action.res),
				categoryAddSuccess: true,
				categoryAddError: null,
			}

		case 'CATEGORY_ADD_ERROR':
			return {
				...state,
				categoryAddSuccess: false,
				categoryAddError: action.error
			}

		default:
			return {...state};
	}
}
