import { StackNavigationProp } from '@react-navigation/stack'

export type propsNavigationStack = {
  Home: undefined
  Feed: undefined
  NewPost: undefined
  Profile: { PostId: number } | undefined
  Edit: { PostId: number } | undefined
}

export type propsStack = StackNavigationProp<propsNavigationStack>
