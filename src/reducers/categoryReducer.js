const initialState = {
	categories: [],
	category: {},
	categoryAddSuccess: false,
	categoryAddError: null,
	categoryViewSuccess: false,
	categoryViewError: null
};

export function categoryReducer(state=initialState, action) {

	switch(action.type) {
		case 'CATEGORY_ADD_SUCCESS':
		console.log('.............add', action.res);
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

		case 'CATEGORY_VIEW_SUCCESS':
			return {
				...state,
				categories: action.res,
				categoryViewSuccess: true,
				categoryViewError: null
			}

		case 'CATEGORY_VIEW_ERROR':
			return {
				...state,
				categoryViewSuccess: false,
				categoryViewError: action.err
			}

		case 'CATEGORY_DELETE_SUCCESS':
			return {
				...state,
				categories: state.categories.filter((category) => category._id !== action.res.id),
			}

		case 'CATEGORY_GET_SUCCESS':
			return {
				...state,
				category: action.res
			}
		default:
			return {...state};
	}
}
