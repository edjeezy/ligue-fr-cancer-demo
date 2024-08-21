import { Image, StyleSheet, Platform, Button, View, } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { FlashList } from '@shopify/flash-list';
import { Message } from '@/components/Message';
import POSTS from '@/data/posts';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (

      <View style={styles.container}>
      <FlashList
        data={POSTS}
        renderItem={({ item }) => <Message {...item} />}
        estimatedItemSize={150}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    marginTop: 32,
    backgroundColor: "#fff"
  },
});