import moviesData from '@/assets/data/movies.json';
import * as Linking from 'expo-linking';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function MovieDetail() {
  const { id } = useLocalSearchParams();
  const movie = moviesData.find((m: any) => m.id.toString() === id);

  if (!movie) return <Text>Movie not found</Text>;


    const handleBook = () => {
        Linking.openURL(movie.link).catch(err => {
            console.error("Failed to open URL:", err);
          });
    };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>{movie.title}</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginVertical: 4, marginTop: 8 }}>Rating: {movie.rating} | Category: {movie.franchise}</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginVertical: 4 }}>Release Date: {movie.releaseDate} | Duration: {movie.duration}</Text>
        <Text style={{ marginTop: 12 }}>{movie.synopsis}</Text>

        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 20 }}>Cast</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movie.cast}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ marginTop: 8 }}
          renderItem={({ item }) => (
            <View style={{ marginRight: 16, alignItems: 'center' }}>
              <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius: 40 }} />
              <Text style={{ marginTop: 8, fontSize: 12 }} numberOfLines={1}>{item.name}</Text>
              <Text style={{ marginTop: 8, fontSize: 12 }} numberOfLines={1}>{item.role}</Text>
            </View>
          )}
        />
      </ScrollView>

      <TouchableOpacity
        style={{ position: 'absolute', bottom: 20, left: 16, right: 16, backgroundColor: 'tomato', padding: 16, borderRadius: 12 }}
        onPress={() => handleBook()}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Open in {movie.platform}</Text>
      </TouchableOpacity>
    </View>
  );
}