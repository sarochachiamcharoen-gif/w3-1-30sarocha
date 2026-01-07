import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
    const router= useRouter()
  return (
    <SafeAreaView style={{gap:5,marginTop:20,alignItems:'center'}}>
      <Text>index</Text>
      <Button title='หน้าคำนวณพื้นที่สี่เหลี่ยมจัตุรัส' onPress={() => router.navigate("/Cal")}/>
      <Button title='หน้าคำนวณกิโลเมตรเป็นไมล์' onPress={() => router.navigate("/Link")}/>
    </SafeAreaView>
  )
}