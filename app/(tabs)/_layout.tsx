import { Tabs, useRootNavigationState } from 'expo-router'; // Import useRootNavigationState
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const fadeAnim = useRef(new Animated.Value(1)).current; 
  const navigationState = useRootNavigationState(); // Use useRootNavigationState


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Set the active tab's tint color
        headerShown: false, // Hide the header for all tabs
        tabBarStyle: {
          backgroundColor: 'white', // Set the tab bar's background color
          borderTopWidth: 0, // Remove the top border
          height: 80, // Set the tab bar's height
          paddingHorizontal: 10, // Add horizontal padding
          paddingBottom: 2, // Add bottom padding to elevate icons
        },
        tabBarItemStyle: {
          borderRadius: 10, // Add rounded corners to the active tab
          margin: 10, // Add margin between tab items
        },
        tabBarActiveBackgroundColor: '#EE7025', // Set the active tab's background color
        tabBarLabelStyle: {
          fontSize: 12, // Set the tab label's font size
          marginBottom: 2, // Add space between icon and label
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => ( 
            // Renders the icon and label for this tab
            <Animated.View
              style={[
                styles.tabIconContainer, // Basic container styles
                focused && styles.activeTabIconContainer, // Additional styles when tab is active
                { opacity: fadeAnim }, // Applies the fade-in animation
              ]}
            >
              <TabBarIcon 
                name={focused ? 'home' : 'home-outline'} // Different icon based on focus state
                color={color} // Icon color, usually inherited from tabBarActiveTintColor
                size={24} 
              />
            </Animated.View>
          ),
        }}
      />
     
      <Tabs.Screen
        name="chat"
        options={{
          title: 'AI Chat', 
          tabBarIcon: ({ color, focused }) => ( 
            <Animated.View
              style={[
                styles.tabIconContainer, 
                focused && styles.activeTabIconContainer, 
                { opacity: fadeAnim }, 
              ]}
            >
              <TabBarIcon 
                name={focused ? 'chatbox' : 'chatbox-outline'} 
                color={color} 
                size={24} 
              />
            </Animated.View>
          ),
        }}
      />
      {/* Add more Tabs.Screen components as needed */}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
  },
  activeTabIconContainer: {
    backgroundColor: '#EE7025',
    padding: 10,
    borderRadius: 10,
  },
  tabLabel: {
    fontSize: 12,
  },
});