import * as  React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Switch, TextInput } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App = () =>{
  return(
    <View>
      <View>
        <Text>
          Sign In
        </Text>
      </View>
      <View>
        <Image 
          source={require('./img/background.png')}
          style={{backgroundColor:'#dce0e6',alignSelf:'center',flexDirection:'column'}}
          resizeMode='cover'/>
        <Image
          source={require('./img/shadow.png')}
          style={{}}/>
        
        <Image
          source={require('./img/smartphone.png')}
          style={{position:'absolute',backgroundColor:'red',top:30,left:250,borderRadius:5}}/>
        
        <Image
          source={require('./img/Vector.png')}
          style={{position:'absolute',backgroundColor:'red',top:30,left:250,borderRadius:2}}/>
        <Image
          source={require('./img/endbar.png')}
          style={{position:'absolute',top:30,left:265,backgroundColor:'white'}}/>
        <Image
          source={require('./img/secondbar.png')}
          style={{position:'absolute',top:30,left:282}}/>
        <Image
          source={require('./img/endbar.png')}
          style={{position:'absolute',top:30,left:330}}/>
        <Image
          source={require('./img/hori1.png')}
          style={{position:'absolute',top:110,left:250}}/>
        <Image
          source={require('./img/hori2.png')}
          style={{position:'absolute',top:90,left:250}}/>
        <Image
          source={require('./img/hori2.png')}
          style={{position:'absolute',top:60,left:250}}/>
        <Image
          source={require('./img/hori2.png')}
          style={{position:'absolute',top:170,left:250}}/>
        <Image 
          source={require('./img/car.png')}
          style={{position:'absolute',top:110,left:100}}/>
        <Image
          source={require('./img/character.png')}
          style={{position:'absolute',top:80,left:250}}
        />
        <Image
          source={require('./img/pin.png')}
          style={{position:'absolute',top:50,left:290}}
        />
      <View>
        <Text style={{alignSelf:'center',fontSize:25,color:'black',fontWeight:'bold'}}>
          Login to Your Account
        </Text>
        <Image
          source={require('./img/Facebook.png')}
          style={{left:"33%",position:'absolute',top:"80%"}}
        />
        <Image
          source={require('./img/google.png')}
          style={{left:"35%",top:"80%",left:"46%",position:'absolute'}}
        />
        <Image
          source={require('./img/apple.png')}
          style={{left:"40%",top:'80%',left:"59%",position:"absolute"}}
        />
        
        <View>

          <Text style={{position:'relative',top:"200%",left:"30%"}}>
            or use your email account 
          </Text>
        </View>
        <View>
        <TextInput
          placeholder='   Email'
          underlineColorAndroid='transparent'
          autoCorrect={false}
          style={{
            backgroundColor:"white",
            position:'absolute',
            top:55,
            left:40,
            borderWidth:1,
            borderColor:'#dedede',
            width:"80%",
            height:50,
            borderTopLeftRadius:25,
            borderBottomRightRadius:25,
            borderRadius:25,
            borderTopRightRadius:25,
          }}
        />
        <TextInput
          placeholder='   Password'
          style={{
            backgroundColor:"white",
            position:'absolute',
            top:120,
            left:40,
            borderWidth:1,
            borderColor:'#dedede',
            width:"80%",
            height:50,
            borderTopLeftRadius:25,
            borderBottomRightRadius:25,
            borderRadius:25,
            borderTopRightRadius:25,
          }}
        />
        <View style={{position:'absolute'}}>
          <Switch
          style={{top:"400%",right:"20%"}}
          />
          <Text style={{top:"350%",left:"80%"}}>
            Remember Me?
          </Text>
          <Text style={{top:"400%",left:"300%",position:'absolute',color:'red'}}>
            Forgot Password?
          </Text>
        </View>
        <View style={{position:'absolute'}}>
        <TouchableOpacity style={{
          top:250,
          left:60,
          width:300,
          borderColor:'grey',
          borderRadius:25,
          backgroundColor:'red',
          height:40
          
          }}>
          <Text style={{textAlign:'center',
          textAlignVertical:'bottom',
          top:6,
          fontSize:18,
          fontWeight:'bold',
          color:'white'
        }}>
            Login
          </Text>
        <View>
          <Text style={{top:18,left:20}}>
            Dont have an account?
          </Text>
          <Text style={{top:-2,left:167,color:'red',fontWeight:'bold'}}>
            Register here
          </Text>
        </View>
        </TouchableOpacity>
        </View>
        </View>
      </View>    
      </View> 
    </View>

  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
