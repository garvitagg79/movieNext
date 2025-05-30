import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function ScreensTabLayout() {
  return (
    <Stack >
      <Stack.Screen name="movie/[id]" options={{
        headerTitleStyle: {
            color: "#ED1515",
        },
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ right: 10 }}>
                <Ionicons name="chevron-back" size={24} color="#ED1515" />
              </TouchableOpacity>
            );
          },
        }}/>
    </Stack>
  );
}
