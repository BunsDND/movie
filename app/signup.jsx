import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/pg1.png")} style={styles.backgroundImage} blurRadius={6}>
        <View style={styles.innerContainer}>

          <TouchableOpacity style={styles.buttonb}>
            <Image href='./' style={styles.back} source={require("../assets/icons/left-arrow.png")} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonb}>
            
          <Image href='./' style={styles.logo} source={require("../assets/unnamed.png")} />
          </TouchableOpacity>
          
          
          <Text style={styles.headerText}>Sign Up</Text>
          
          <TextInput 
            placeholder="Username" 
            style={styles.input} 
            placeholderTextColor="#aaa" 
          />
          
          <TextInput 
            placeholder="Password" 
            style={styles.input} 
            secureTextEntry 
            placeholderTextColor="#aaa" 
          />
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#DEFCF9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C48C5',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#6C48C5',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#1230AE',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonb: {
   
    width: '100%',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 50, 
    height: 50, 
    borderRadius: 10,
    marginTop: -40, 

  },
});
