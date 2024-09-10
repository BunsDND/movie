import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { StyleSheet,Text } from 'react-native';

const MainLayout = () => {
  return (
    <Stack>
   
      <Stack.Screen name="index" options={{ headerShown: false }} /> 

      
    </Stack>
  );

}
export default MainLayout


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
