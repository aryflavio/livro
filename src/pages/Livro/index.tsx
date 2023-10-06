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

        nomeLivros2 = {livro.detalhes.nomeLivros2}
        descricaolivro2 = {livro.detalhes.descricaolivro2}
        preco2 = {livro.detalhes.preco2}

        nomeLivros3 = {livro.detalhes.nomeLivros3}
        descricaolivro3 = {livro.detalhes.descricaolivro3}
        preco3 = {livro.detalhes.preco3}


        
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
