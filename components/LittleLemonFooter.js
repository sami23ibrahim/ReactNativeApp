import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LittleLemonFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        All rights reserved by Sami, 2024 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default LittleLemonFooter;
