import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cities = ({route, navigation}: any) => {
  const data = [
    {
      id: 1,
      countryId: 1,
      name: 'Karachi',
    },
    {
      id: 2,
      countryId: 2,
      name: 'Lahore',
    },
    {
      id: 3,
      countryId: 2,
      name: 'New York',
    },
    {
      id: 4,
      countryId: 2,
      name: 'Lost Angeles',
    },
  ];

  console.log({route});

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item, index, separators}) => (
          <View style={{padding: 16}}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Cities;
