import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Detalhe from "./components/Detalhe";

import Topo from "./components/Topo";
import livro from '../../mocks/livro';


export default function Livro() {
  return <>
    
      <Topo/>

      <View style={estilos.livro}>

        <Detalhe 
        titulolivro= {livro.detalhes.titulolivro}
        nomeBibliotca = {livro.detalhes.nomeBibliotca}
        descricao = {livro.detalhes.descricao}
        nomeLivros = {livro.detalhes.nomeLivros}
        descricaolivro = {livro.detalhes.descricaolivro}
        preco = {livro.detalhes.preco}
        />
      </View>

    </>

  
}

const estilos = StyleSheet.create({
  livro: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  
  }
});
