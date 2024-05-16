import { View, Text} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TopBar() {
  return (
    <View className='bg-slate-300 p-4 flex flex-col items-center'>
  <View className="flex-row justify-between w-full">
    <View><Ionicons name='settings' size={30}/></View>
    <View><Text>Overall Balance</Text></View>
    <View><Text>R</Text></View>
  </View>
  <View className='item-center mt-2'><Text>Rs 2300</Text></View>
</View>

    
  )
}
