import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
            borderTopWidth: 1,
            borderColor: 'black',
            paddingTop: 5,
          height: 70,
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
            tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
            },
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: 'Explore',
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
            },
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons name={focused ? 'globe' : 'globe-outline'} size={25} />
          ),
        }}
      />
    </Tabs>
  );
}
