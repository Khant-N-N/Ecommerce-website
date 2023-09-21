export const initialState = {
    dark: localStorage.getItem('dark') === 'off' ? false : true, // darkmode toggler
    display: false,  // scroll to top button display
    favItems: [], //to store added fav items
    cartItems: {},
    signUp: false,
    isRegister: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DARK':
            localStorage.setItem('dark', action.payload ? 'on' : 'off');
            document.body.classList[action.payload ? 'add' : 'remove']('darkTheme');
            return { ...state, dark: action.payload };

        case 'TOGGLE_DISPLAY':
            return { ...state, display: action.payload };

        case 'TOGGLE_FAV':
            const itemId = action.payload.slice(1);
            const isFavorite = state.favItems.includes(itemId);
            const updatedFavItems = isFavorite
                ? state.favItems.filter((item) => item !== itemId)
                : [...state.favItems, itemId];
            return { ...state, favItems: updatedFavItems };

        case 'CART_ITEMS':
            return { ...state, cartItems: { ...action.payload } }

        case 'CART_ADD':
            const addItem = {
                ...state.cartItems, [action.payload]: (state.cartItems[action.payload] || 0) + 1
            }
            return { ...state, cartItems: addItem };

        case 'CART_REMOVE':
            const removeItem = { ...state.cartItems, [action.payload]: (state.cartItems[action.payload]) - 1 }
            return { ...state, cartItems: removeItem };

        case 'CART_UPDATE':
            const updateItem = { ...state.cartItems, [action.id]: action.amount }
            return { ...state, cartItems: updateItem };

        case 'SIGNUP_BAR':
            return { ...state, signUp: action.payload };

        case 'REGISTER':
            return { ...state, isRegister: action.payload }
        default:
            return state;
    }
};