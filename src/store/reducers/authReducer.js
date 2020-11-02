const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('eerro');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login dale');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('logout');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('dale');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log(action.err.message);
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer