import moviesData from '@/assets/data/movies.json';
import { useRouter } from 'expo-router';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 16 padding on both sides + 16 between cards

export default function HomeScreen() {
  const router = useRouter();

  return (
    <FlatList
      data={moviesData}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/movie/${item.id}`)}
          style={{ width: CARD_WIDTH }}
        >
          <View style={{ position: 'relative' }}>
            <Image
              source={{ uri: item.poster }}
              style={{ width: CARD_WIDTH, height: CARD_WIDTH * 1.45, borderRadius: 16 }}
              resizeMode="cover"
            />
            <View style={{ position: 'absolute', top: 8, left: 8, backgroundColor: '#0009', padding: 4, borderRadius: 8 }}>
              <Text style={{ color: 'white', fontSize: 12 }}>{item.rating}</Text>
            </View>
            <View style={{ position: 'absolute', top: 8, right: 8, backgroundColor: '#0009', padding: 4, borderRadius: 8 }}>
              <Text style={{ color: 'white', fontSize: 12 }}>{item.franchise}</Text>
            </View>
            <View style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: '#0008',
              padding: 8,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}>
              <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>{item.status}</Text>
            </View>
          </View>
          <Text style={{ marginTop: 8, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>

        </TouchableOpacity>
      )}
    />
  );
}
