import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

// ใช้ Dimensions เพื่อดึงขนาดหน้าจอ
const { width, height } = Dimensions.get('window');

const FlexboxExample = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/image.png')} 
        style={[styles.image, { width: width * 0.3, height: width * 0.3 }]}  // ขนาดภาพที่ปรับตามขนาดหน้าจอ
      />
      <Image 
        source={require('../assets/image.png')}  
        style={[styles.image, { width: width * 0.3, height: width * 0.3 }]}  // ขนาดภาพที่ปรับตามขนาดหน้าจอ
      />
      <Image 
        source={require('../assets/image.png')} 
        style={[styles.image, { width: width * 0.3, height: width * 0.3 }]}  // ขนาดภาพที่ปรับตามขนาดหน้าจอ
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // ให้ View ขยายเต็มพื้นที่
    flexDirection: 'row',  // จัดภาพในแถว
    justifyContent: 'center',  // จัดภาพให้อยู่ตรงกลางแนวนอน
    alignItems: 'center',  // จัดภาพให้อยู่ตรงกลางแนวตั้ง
  },
  image: {
    margin: 10,  // ระยะห่างระหว่างภาพ
  }
});

export default FlexboxExample;
