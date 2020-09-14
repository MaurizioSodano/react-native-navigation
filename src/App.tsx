
import React, {useState} from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
 
import LandingScreen from './screens/Landing';
import HomeScreen from './screens/Home';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import PasswordForgetScreen from './screens/PasswordForget';
export type RootStackParamList = {
  Home: undefined;
  Landing:undefined;
  'Sign In': undefined;
  'Sign Up': undefined;
  "Password Forget":undefined
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignIn = () => {
    // TODO implement real sign in mechanism
 
    setIsAuthenticated(true);
  };
  const handleSignOut = () => {
    // TODO implement real sign out mechanism
 
    setIsAuthenticated(false);
  };
  const handleSignUp = () => {
    // TODO implement real sign in mechanism
 
    setIsAuthenticated(true);
  };
  console.log(isAuthenticated);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
      {isAuthenticated ? (
          <RootStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              ),
            }}
          />
        ) : (
        <>
          <RootStack.Screen 
            name="Landing" 
            component={LandingScreen}
            options={{
              animationTypeForReplace: 'pop',
            }}
          />
          <RootStack.Screen name="Sign In">
            {(props) => (
              <SignInScreen {...props} onSignIn={handleSignIn} />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="Sign Up">
              {(props) => (
                <SignUpScreen {...props} onSignUp={handleSignUp} />
              )}
          </RootStack.Screen>
          <RootStack.Screen
              name="Password Forget"
              component={PasswordForgetScreen}
            />
        </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}