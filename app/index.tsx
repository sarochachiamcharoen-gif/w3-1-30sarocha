import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function App() {
    const router= useRouter()
  return (
    <View>
      <Text>index</Text>
      <Button title='หน้าคำนวณพื้นที่สี่เหลี่ยมจัตุรัส' onPress={() => router.navigate("/Cal")}/>
      <Button title='หน้าคำนวณกิโลเมตรเป็นไมล์' onPress={() => router.navigate("/Link")}/>
    </View>
  )
}