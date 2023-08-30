import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';
 
import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';
import boxharry from '../../../assets/boxharry.png';

const widht = Dimensions.get('screen').width;

export default function Livro(){
    return<>

    <Image source={topo} style={estilos.topo}/>
  
    <View style={estilos.livro}>
        
        <Text style={estilos.titulolivro}>Os Livros Mais Acessados</Text>

        <View style={estilos.biblioteca}>
            <Image style={estilos.imgBiblioteca} source={logo}></Image>
            <Text style={estilos.nomeBiblioteca}> Biblioteca</Text>
        </View>

    <Text style = {estilos.descricao}> Bem-vindo à nossa loja de bibliotecas online, um paraíso literário
         onde o conhecimento e a imaginação se encontram em perfeita harmonia.
          Navegar por nossos corredores virtuais é como passear por uma coleção 
          interminável de tesouros literários, todos ao alcance de seus dedos.</Text>

          
        <View style={estilos.biblioteca}>
            <Image style={estilos.imgLivros} source={boxharry}></Image>
            <Text style={estilos.nomeLivros}> Box Harry Potter</Text>
        </View>

        <Text style = {estilos.descricaolivro}> Box Harry Potter – Série Completa: perfeito para todos que cresceram 
        acompanhando a saga do jovem bruxo e para as novas gerações de fãs que anseiam por conhecê-la!
</Text>
    
          <Text style={estilos.preco}>R$ 120,00</Text>

    </View>
    </>


}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * widht
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 26,
        width: "100%",
        textAlign: "center",
        color: "black",
        position: "absolute",
        padding: 16
    },
    
    titulolivro: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
    },

    livro: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    nomeBiblioteca: {
        fontSize: 18,
        lineHeight: 40,
        marginLeft: 12,
        fontWeight: "bold"
       
    },

    nomeLivros: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 5,
        fontWeight: "bold"
       
    },
    
    imgBiblioteca: {
        width: 45,
        height: 45
    
    },

    imgLivros: {
        width: 32,
        height: 32
    },
    
    biblioteca: {
        flexDirection: "row",
        paddingVertical: 12
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
        marginTop: 8
    }

})