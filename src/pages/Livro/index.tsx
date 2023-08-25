import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';
 
import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';

const widht = Dimensions.get('screen').width;

export default function Livro(){
    return<>

    <Image source={topo} style={estilos.topo}/>
    <Text>Livros</Text>
    </>


}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * widht
    }

})