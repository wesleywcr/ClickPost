import { StackNavigationProp } from '@react-navigation/stack'

export type propsNavigationStack = {
  Home: undefined
  Feed: undefined
  NewPost: undefined
  Profile: undefined
  Edit: undefined
}

export type propsStack = StackNavigationProp<propsNavigationStack>
