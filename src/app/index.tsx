import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'
import Button from '../components/Button'
import { useAuth } from '../providers/AuthProvider'
import { supabase } from '../lib/supabase'

const index = () => {
  const { loading, session, isAdmin } = useAuth()
  console.log(isAdmin)

  if (loading) return <ActivityIndicator />
  if (!session) {
    return <Redirect href={'/signin'} />
  }
  if (!isAdmin) {
    return <Redirect href={'(user)'} />
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={'/(user)'} asChild>
        <Button text='User' />
      </Link>
      <Link href={'/(admin)'} asChild>
        <Button text='Admin' />
      </Link>
      <Button onPress={() => supabase.auth.signOut()} text='SignOut' />
    </View>
  )
}

export default index
