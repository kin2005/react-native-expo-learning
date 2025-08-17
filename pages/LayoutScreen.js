import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const LayoutExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.bodyText}>Body Content</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // จัดแต่ละส่วนให้ชิดบน-กลาง-ล่าง
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'green',
    padding: 80,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 50,
    color: '#fff',
  },
  footer: {
    backgroundColor: 'tomato',
    padding: 80,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 80,
  },
});

export default LayoutExample;
