import React from 'react';
import {ScrollView, StatusBar, SafeAreaView } from 'react-native';
import Livro from './src/pages/Livro';

export default function App() {

  return (
    <ScrollView>
    <SafeAreaView>
      <StatusBar/>
        <Livro/>
    </SafeAreaView>
    </ScrollView>
  );

}

