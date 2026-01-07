import { View, Text,Button, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Cal() { 
    const router = useRouter()
    const [side,setSide] = useState(0)
    const [area,setArea] = useState(0)

    function CalSquare() {
        var result = side/1.609 
        setArea(result)
    }
    

  return (
    <SafeAreaView>
      <Text>กิโลเมตรเป็นไมล์</Text>
      <Text>กิโลเมตร: {side}ไมล์ : {area}</Text>
      <TextInput 
        style={{borderWidth:1}}
        placeholder='กรอกกิโลเมตร'
        value={side.toString()}
        onChangeText={(e) => setSide(Number(e))}
        />

        <Button title='คำนวณด้าน' onPress={()=> CalSquare()}/>
      <Button title='กลับหน้าหลัก' onPress={() => router.navigate("/")}/>
    </SafeAreaView>
  )
}