import * as actions from '../action/actions';

const InitialState = {
    isLogin: false,
}

const Auth = (state = InitialState , action) => {
  switch (action.type){
    case 'SIGN_IN_SUCCESS':
      return{
        ...state,
        isLogin: true,
        
      }
    default: {
      return {
        ...state
      }
    }
  }
}


export default Auth