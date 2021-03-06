import React, { useState, useEffect } from 'react';

import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
    SectionList
  } from 'react-native';
  import styles from '../../style/styles'

  import {resultado} from '../../api_back'

  export default function Resultado({navigation}) {

    const [data, setData] = useState({hits:[]});
    //const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await resultado.get('')
            setData(response.data)
            
                console.log(response.data)
            };
        fetchData();
    },[]);
   

       return (
           <ScrollView>
               <View>
                   </View> 
           <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
                <View style= {styles.container}>
                <View>                    
               </View>
                 <Text style= {styles.h2}> Resultado </Text>
                </View>
               <View style={{display: 'flex', flexDirection:'row', justifyContent: "space-evenly" , margin: 16}}>
                <View>
                    <Text style={styles.bodyText}> Média 3S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> {data.Answer_average_3s}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.bodyText}> Média 5S:</Text>
                    <View style={{borderWidth:1, borderColor: '#000', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}> {data.Answer_average_5s}</Text>
                    </View>
                </View>
                </View>
                
                <View style={{display: 'flex'}}>
                <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate ("ResultadoDetalhes")}>
                    <Text style={styles.secondaryButtonText}>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate ("Resultado")}>
                    <Text style={styles.primaryButtonText}>Salvar</Text>
                </TouchableOpacity>
                </View>
           </View>
           </ScrollView>
           
         

      )

  }