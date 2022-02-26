import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Feed from '../screens/Feed'
import Home from '../screens/Home'
import NewPost from '../screens/NewPost'
import { propsNavigationStack } from './Models'
import Profile from '../screens/Profile'
import EditPost from '../screens/EditPost'

const { Navigator, Screen } = createStackNavigator<propsNavigationStack>()

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Feed" component={Feed} />
        <Screen name="NewPost" component={NewPost} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Edit" component={EditPost} />
      </Navigator>
    </NavigationContainer>
  )
}
