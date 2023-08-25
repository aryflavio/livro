import React from 'react';
import {View, StatusBar, SafeAreaView } from 'react-native';
import Livro from './src/pages/Livro';

export default function App() {

  return (
    <SafeAreaView>
      <StatusBar/>
        <Livro/>
    </SafeAreaView>
  );

}

