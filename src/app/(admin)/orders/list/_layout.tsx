import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Tabs, withLayoutContext } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator)
const ListLayout = () => {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <TopTabs />
    </SafeAreaView>
  )
}

export default ListLayout
