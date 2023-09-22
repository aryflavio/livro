import React from "react"; 
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';

import logo from '../../../../assets/logo.png';
import boxharry from "../../../../assets/boxharry.png";
import hdalivro from "../../../../assets/hdalivro.png";
import acotarlivro from "../../../../assets/acotarlivro.png";

const widht = Dimensions.get('screen').width;

export default function Detalhe() {
    return <>

<Text style={estilos.titulolivro}>Os Livros Mais Acessados</Text>

        <View style={estilos.biblioteca}>
          <Image style={estilos.imgBiblioteca} source={logo}></Image>
          <Text style={estilos.nomeBiblioteca}> Biblioteca</Text>
        </View>

        <Text style={estilos.descricao}>
          {" "}
          Bem-vindo à nossa loja de bibliotecas online, um paraíso literário
          onde o conhecimento e a imaginação se encontram em perfeita harmonia.
          Navegar por nossos corredores virtuais é como passear por uma coleção
          interminável de tesouros literários, todos ao alcance de seus dedos. {'\n'}
        </Text>

        <View style={estilos.biblioteca}>
          <Image style={estilos.imgLivros} source={boxharry}></Image>
          <Text style={estilos.nomeLivros}> Box Harry Potter</Text>
        </View>

        <Text style={estilos.descricaolivro}>
          {" "}
          Box Harry Potter – Série Completa: perfeito para todos que cresceram
          acompanhando a saga do jovem bruxo e para as novas gerações de fãs que
          anseiam por conhecê-la!
        </Text>

        <Text style={estilos.preco}>R$ 120,00 {'\n'}</Text>


        <View style={estilos.biblioteca}>
          <Image style={estilos.imgLivros} source={hdalivro}></Image>
          <Text style={estilos.nomeLivros}> Hipótese do Amor</Text>
        </View>

        <Text style={estilos.descricaolivro}>
          {" "}
          Olive Smith é uma estudante de doutoramento em Biologia e não acredita
          em namoros de longa data. Após terminar seu relacionamento com Jeremy,
          percebe que sua amiga, Anh, gosta dele e decide fazer o possível para
          uni-los.
        </Text>

        <Text style={estilos.preco}>R$ 69,90 {'\n'}</Text>

        <View style={estilos.biblioteca}>
          <Image style={estilos.imgLivros} source={acotarlivro}></Image>
          <Text style={estilos.nomeLivros}> Box Acotar</Text>
        </View>

        <Text style={estilos.descricaolivro}>
          O livro Corte de Espinhos e Rosas (Acotar) traz uma envolvente
          história fictícia entre duas espécies, humanos e seres místicos
          chamados feéricos. Há muitos anos na história, uma guerra entre ambas
          as espécies foi declarada e por fim, os humanos conseguiram se
          libertar.
        </Text>

        <Text style={estilos.preco}>R$ 132,00</Text>
        </>
}

const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: (578 / 768) * widht,
    },
  
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 26,
      width: "100%",
      textAlign: "center",
      color: "black",
      position: "absolute",
      padding: 16,
    },
  
    titulolivro: {
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
      fontFamily: "MontserratBold",
    },
  
    nomeBiblioteca: {
      fontSize: 18,
      lineHeight: 40,
      marginLeft: 12,
      fontWeight: "bold",
    },
  
    nomeLivros: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 5,
      fontWeight: "bold",
    },
  
    imgBiblioteca: {
      width: 45,
      height: 45,
    },
  
    imgLivros: {
      width: 32,
      height: 32,
    },
  
    biblioteca: {
      flexDirection: "row",
      paddingVertical: 12,
    },
  
    descricao: {
      color: "black",
    },
  
    descricaolivro: {
      color: "#4682B4",
    },
  
    preco: {
      fontSize: 26,
      lineHeight: 42,
      color: "#4682B4",
      marginTop: 8,
    },
  });
  