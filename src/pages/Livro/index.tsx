import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Detalhe from "./components/Detalhe";
import Topo from "./components/Topo";

export default function Livro() {
  return <>
    
      <Topo/>

      <View style={estilos.livro}>
        <Detalhe/>
      </View>

    </>

  
}

const estilos = StyleSheet.create({
  livro: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  
  }
});
