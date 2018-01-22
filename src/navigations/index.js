import { StackNavigator } from 'react-navigation';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Todo from '../components/Todo';

const RootNavigation = StackNavigator({
  Main:{
    screen: Todo,
    title: 'Todo'
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
},
{   
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
  navigationOptions: {
    headerStyle:{
      backgroundColor: '#2B2836',
    }
  },
  initialRouteName: 'Login'
}
);

export default RootNavigation;