import React from 'react';
import {View,Text,Image,Button,Linking,ScrollView,TextInput,TouchableOpacity} from 'react-native';

const tekanDong = () => alert('Rawrrr... ');

const Wa = () => {
  const url = 'https://wa.me/6285802963522?text=Halo,%20salam%20kenal%20ka'
  Linking.openURL(url);
}
const Ig = () => {
  const url = 'https://www.instagram.com/ravanda___/?next=%2F'
  Linking.openURL(url);
}

const Tugas = ()=>{
  return(
    <ScrollView>
      <View>
        <View style={{backgroundColor: 'black'}}>
          <Text style={{color: 'white', textAlign:'center', padding:10, fontWeight: 'bold'}}>PORTOFOLIO</Text>
        <View style={{backgroundColor: 'white'}}>
        <Image style={{width:200, height:200, borderRadius: 15, alignSelf:'center', marginTop: 20}} source={require('../assets/rafi.jpg')} />
    <Text style={{padding: 10, fontWeight:'bold', textAlign: 'center'}}> Fadly Javanda Auliarafi </Text>
     <Text style={{textAlign:'center'}}> Halo,kenalin namaku Fadly Javanda Auliarafi. Biasa dipanggil Rafi. Umurku sekarang 17 tahun. Aku berasal dari Kota Purbalingga. Saya sekolah di SMK Telkom Purwokerto. </Text>
       <View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <Image style={{width:35, height:28, alignSelf:'center', marginTop: 18}} source={require('../assets/wa-removebg-preview.png')} />
      <TouchableOpacity
      style={{backgroundColor:'white', width:100, height:30, borderRadius:5, alignSelf: 'center', marginTop: 15}} onPress={Wa}>
        <Text style={{padding:5, fontWeight:'bold', textAlign:'center', color: 'green'}}>Contact Me</Text>
      </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <Image style={{width: 60, height: 28, alignSelf:'center', marginTop: 18}} source={require('../assets/ig.png')} />
      <TouchableOpacity
      style={{backgroundColor:'white', width:100, height:30, borderRadius:5, alignSelf: 'center', marginTop: 15}} onPress={Ig}>
        <Text style={{padding:5, fontWeight:'bold', color: 'orange'}}>Follow Me</Text>
      </TouchableOpacity>
      </View>
      
        <Text style={{marginTop: 20, marginBottom: 10, fontWeight:'bold', textAlign: 'center', fontSize: 20}}> My Recent Project </Text>
        <View style={{backgroundColor: 'grey', height: 200, width: 280, alignSelf: 'center', borderRadius: 15}}>
        <Image style={{width: 270, height: 190, borderRadius: 15, alignSelf:'center', marginTop: 6}} source={require('../assets/login.png')} />
        <Text style={{marginTop: 10, textAlign: 'center'}}> Tampilan login project SMS Gateway </Text>
          <View style={{backgroundColor: 'grey', height: 200, width: 280, alignSelf: 'center', borderRadius: 15, marginTop: 20}}>
        <Image style={{width: 270, height: 190, borderRadius: 15, alignSelf:'center', marginTop: 6}} source={require('../assets/isi.png')} />
        <Text style={{marginTop: 10, textAlign: 'center'}}> Tampilan Dashboard project SMS Gateway </Text>
          <View style={{backgroundColor: 'grey', height: 200, width: 280, alignSelf: 'center', borderRadius: 15, marginTop: 20}}>
        <Image style={{width: 270, height: 190, borderRadius: 15, alignSelf:'center', marginTop: 6}} source={require('../assets/erp.png')} />
         <Text style={{marginTop: 10, textAlign: 'center'}}> Tampilan Dashboard project ERP Finance </Text>
          <TextInput placeholder='Kritik dan Saran' style={{backgroundColor:'black', color: 'white', padding: 10, marginVertical: 20, borderRadius: 10}} />
              </View>
              </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tugas;