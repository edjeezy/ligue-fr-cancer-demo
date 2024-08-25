import { Image, StyleSheet, Platform, Button, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { FlashList } from '@shopify/flash-list';
import { Message } from '@/components/Message';
import ABOUT from '@/data/about';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledCard } from '@/components/StyleCard';

export default function HomeScreen() {
  const aiLogo = require("@/assets/images/ai-chatbot.png");
  return (
    <>
      <View style={styles.container}>
        <StyledCard
          avatar="https://media.licdn.com/dms/image/v2/C5103AQFsNI8F8Pt_cg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517075005471?e=1730332800&v=beta&t=QCgODU1cFQ4lt_kZzk70BACeZioLis7iJm6Netzqk9s"
          title='A propos de moi'
          showHelloWave={true}
          description="Mouhamed Edouard J. Mar"
        >
         <View style={{minHeight: 100, height: 'auto'}}>
            <FlashList
              data={ABOUT}
              renderItem={({ item }) => <View style={{flex: 1,marginVertical: 1,}}> 
                                          <Text> {item.text} </Text>
                                        </View>}
              ItemSeparatorComponent={() => <View style={{height: 2}} />}
              estimatedItemSize={4}
            />
          </View>
        </StyledCard>
        <StyledCard
          avatar={aiLogo}
          isLocalAvatar={true}
          title='Hello'
          description="Hello World"
          backgroundColors={['#f12711', '#f5af19']}
        >
          <Text>Hello</Text>
        </StyledCard>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 36,
    backgroundColor: "#fff"
  },
});