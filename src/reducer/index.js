
const InitialState = {
  isLogin: false,
  info: {}
}

const Auth = (state = InitialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        isLogin: true,
        info: action.info
      }
    default:
      return state;
  }
}
export default Auth;
