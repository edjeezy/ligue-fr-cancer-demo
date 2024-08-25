import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import {  Text, StyleSheet, Image } from 'react-native';
import { HelloWave } from "./HelloWave";

export function StyledCard ({ 
    avatar, 
    title, 
    description, 
    isLocalAvatar = false,
    backgroundColors = ['#FDC830', '#F37335'], 
    borderRadius = 0,
    showHelloWave = false,
    children 
  }: any) {
    return (
        <LinearGradient
        colors={[...backgroundColors]}
        style={[styles.cardContainer, { borderRadius }]}
      >
        <View style={[styles.overlay, { borderRadius }]}>
          <View style={styles.headerContainer}>
            <Image source={isLocalAvatar ? avatar : { uri: avatar }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title} {showHelloWave && <HelloWave />}  </Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.buttonContainer}>
            {children}
          </View>
        </View>
      </LinearGradient>
    );
};
const styles = StyleSheet.create({
    cardContainer: {
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 8,
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      padding: 20,
      borderRadius: 15,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 15,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
      marginBottom: 5,
    },
    description: {
      fontSize: 16,
      color: '#555',
      textShadowColor: 'rgba(0, 0, 0, 0.1)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
    },
    divider: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: 15,
    },
    buttonContainer: {
      marginTop: 10,
      alignSelf: 'stretch',
    },
  });