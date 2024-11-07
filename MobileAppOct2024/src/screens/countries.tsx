import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Countries = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const countries = [
    {
      id: 1,
      name: 'Pakistan',
    },
    {id: 2, name: 'USA'},
  ];
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    StatusBar.setBackgroundColor(backgroundStyle.backgroundColor);
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  }, []);

  const showCities = (data: any) => {
    navigation.navigate('Cities', data);
  };

  return (
    <SafeAreaView>
      <FlatList
        style={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 2,
        }}
        ItemSeparatorComponent={() => {
          return <Text>=========</Text>;
        }}
        data={countries}
        renderItem={({item, index, separators}) => (
          <TouchableOpacity key={index} onPress={event => showCities(item)}>
            <View style={{backgroundColor: 'white', padding: 16}}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Countries;
