import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const App = () => {
  const navbarPos = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: navbarPos.value * 100 }],
    };
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: 'pink' }} />
      <ScrollView
        style={{
          backgroundColor: 'pink',
          flex: 1,
          position: 'relative',
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            (navbarPos.value =
              navbarPos.value === 0 ? withSpring(1) : withSpring(0))
          }>
          <View
            style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
            <Text>Toggle NavBar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Animated.View
        style={[
          {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 30,
            alignSelf: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          },
          animatedStyle,
        ]}>
        <Text>Navbar</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
