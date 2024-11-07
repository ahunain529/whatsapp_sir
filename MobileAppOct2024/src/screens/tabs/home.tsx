import {useNavigation} from '@react-navigation/native';
import {Button, SafeAreaView, ScrollView, View} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const gotoCountries = () => {
    navigation.navigate('Countries' as never);
  };

  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Button onPress={gotoCountries} title="Show Countries" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
