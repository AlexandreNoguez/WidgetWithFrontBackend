import React from 'react';
import { Image, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

export default class IsAppLoading extends React.Component {
  state = {
    isReady: false,
  };

  
  async _cacheResourcesAsync() {
    const images = [require('./assets/snack-icon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }
}