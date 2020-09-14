
import React, {useState} from 'react';
import { Button } from 'react-native';
import { NavigationContainer,  DrawerActions,
  getFocusedRouteNameFromRoute, } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LandingScreen from './screens/Landing';
import HomeScreen from './screens/Home';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import PasswordForgetScreen from './screens/PasswordForget';
import PasswordChangeScreen from './screens/PasswordChange';
import AccountScreen from './screens/Account';
import AdminScreen from './screens/Admin';

export type RootStackParamList = {
  Home: undefined;
  Landing:undefined;
  'Sign In': undefined;
  'Sign Up': undefined;
  "Password Forget":undefined
};


const Drawer = createDrawerNavigator();
 
const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen
        name="Password Forget"
        component={PasswordForgetScreen}
      />
      <Drawer.Screen
        name="Password Change"
        component={PasswordChangeScreen}
      />
      <Drawer.Screen name="Admin" component={AdminScreen} />
    </Drawer.Navigator>
  );
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
            component={HomeDrawer}
            options={({ route, navigation }) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerLeft: () => (
                <Button
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                  title="Menu"
                />
              ),
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              ),
            })}
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