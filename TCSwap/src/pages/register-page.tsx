import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View, StatusBar} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppDispatch, useAppSelector } from '../redux';
import { loginAsync, logout, selectUser, UserState } from '../redux/slices/user.slice'; 
import { useNavigation } from '@react-navigation/native';
import CustButton1 from '../components/CustButton1';

type Props = { navigation: any }

const LoginPage: React.FC<Props> = ({ navigation }) => {

  const user = useAppSelector<UserState>(selectUser);
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  //const [role, setRole] = useState<'player'|'store owner'| ''>('');
  const dispatch = useAppDispatch();


  const handleRegister= async()=>{
      let outMsg:string ='';
      if(!username){
          alert('enter a user name');
          return;
      }
      if(!password){
          alert('enter a password');
          return;
      }
      if(!firstName){
          alert('enter your first name');
          return;
      }
      if(!lastName){
          alert('enter your last name');
          return;
      }
      /*if(!role){
          alert('select your role');
          return;
      }*/

      //login if register is successful
      const newUser={
        username,
        password,
        firstname: firstName,
        lastname: lastName,
        role: 'player'
      };

      // register user
      alert(`registering {${newUser.username}}...}`);
  }

  return (
    <>

      <View style={styles.header}>
        <Text style={styles.headerText}>Register Here!</Text> 
      </View>
      <View style={{ width: '100%', padding: 25, }}>
        <Text >Username:</Text>
        <TextInput
          style={{ fontSize: 18, margin: 10, backgroundColor: 'white' }}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          defaultValue={username}
        />
        <Text >Password:</Text>
        <TextInput
          style={{ fontSize: 18, margin: 10, backgroundColor: 'white'  }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          defaultValue={password}
        />
        <Text >First Name:</Text>
        <TextInput
          style={{ fontSize: 18, margin: 10, backgroundColor: 'white'  }}
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
          defaultValue={firstName}
        />
        <Text >Last Name:</Text>
        <TextInput
          style={{ fontSize: 18, margin: 10, backgroundColor: 'white'  }}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
          defaultValue={lastName}
        />
        {/*<Picker
        selectedValue={role}
        style={{ height: 50, width: 150 }}
        onValueChange={(val, itemIndex) => {if(val==='player'||val==='store owner'||val===''){setRole(val);}}}
        >
            <Picker.Item label="Select Role" value={''} />
            <Picker.Item label="Player" value="player" />
            <Picker.Item label="Store Owner" value="store owner" />
        </Picker>*/}

        <CustButton1 onPress={handleRegister} title="Register"/>
      </View>
    </>
        
  );
}

const styles = StyleSheet.create ({
  header: {
    textAlign: 'center',
    backgroundColor: '#731F17',
    paddingTop: StatusBar.currentHeight
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
    color: '#D98E04',
    textAlign: 'center'
  }
})

export default LoginPage;