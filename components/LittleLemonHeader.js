import React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.13 }}>
      <Text
        style={{
          padding: 15,
          fontSize: 26,
          color: 'white',
          textAlign: 'center',
          backgroundColor: '#ADD8E6',
        }}>
        HEADER
      </Text>
    </View>
  );
}
