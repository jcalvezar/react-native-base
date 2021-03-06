import React from 'react';
import {StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const HomeScreen = ({navigation}) => {
  const _onDetalle = () => {
    console.log('Volver');
    navigation.navigate('DetailsScreen');
  };

  return (
    <Background>
      <Logo />

      <Header>App Home</Header>

      <Button mode="contained" onPress={_onDetalle}>
        Detail &gt;
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
});

export default HomeScreen;
