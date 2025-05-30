import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const determineInitialRoute = async () => {
      setTimeout(() => {
        setInitialRoute('/screens/home');
      }, 1000);
    };

    determineInitialRoute();
  }, []);

  if (initialRoute === null) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={'black'} />
      </View>
    );
  }

  return <Redirect href={initialRoute as any} />;
}
