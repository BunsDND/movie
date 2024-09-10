import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const Index = () => {
  return (

    <ImageBackground
      source={require("../assets/pg1.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/unnamed.png")} />
        <Text style={styles.welcomeText}>Movie Anywhere</Text>
        <Text style={styles.kuan}>Anytime Anywhere</Text>
        <TouchableOpacity style={styles.button}>
          <Link href="./login" style={styles.linkText}>LOG - IN</Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Link href="./signup" style={styles.linkText}>SIGN - IN</Link>
        </TouchableOpacity>

        <View style={styles.ubos}> 
        <Text style={styles.terms}>Terms and Services</Text>
        <Text style={styles.about}>About</Text>
        </View>
      </View>
    </ImageBackground>
    // </Stack>
  );
};

const styles = StyleSheet.create({
  about:{
    color: rgb='#1C3269',
    fontWeight: 700,
    textDecorationLine: 'underline',
    
  },
  terms:{
    color: rgb='#1C3269',
    fontWeight: 700,
    textDecorationLine: 'underline',
    textAlign: 'center',
    
  }, 
  ubos:{
    paddingTop: 100, // Adjust space from other elements if needed
    justifyContent: 'center', // Center contents vertically
    alignItems: 'center', // Center contents horizontally
    width: '100%',
  },




  backgroundImage: {

    flex: 1, // This ensures the background image covers the whole screen
    resizeMode: 'cover', // This makes the image cover the screen while maintaining its aspect ratio
    justifyContent: 'center', // Centering content in the ImageBackground
    alignItems: 'center', // Centering content in the ImageBackground
  },
  kuan: {
    marginBottom: 50, // Use numbers for spacing
    color: '#fff', // Adjust text color for visibility on background
  },
  logo: {
    borderRadius: 10,
    width: 200, // Use numbers for dimensions
    height: 200,
  },
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    color: '#fff', // Ensure text is visible on the background
    fontSize: 28,
    fontWeight: '700',
    
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4B0082', // Indigo (violet hue)
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15, // Slightly rounded corners
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1, // Light shadow for subtle depth
    shadowRadius: 4,
    elevation: 2, // Adds shadow on Android
    elevation: 2,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 10 }, // Increased height for more pronounced shadow
    shadowOpacity: 0.5, // Increased opacity for a more noticeable shadow
    shadowRadius: 15, // Larger radius for a softer shadow
    elevation: 8, // Increased elevation for Android shadow
  },
  buttonSecondary: {
    backgroundColor: '#1E90FF', // Dodger Blue
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 10 }, // Increased height for more pronounced shadow
    shadowOpacity: 0.5, // Increased opacity for a more noticeable shadow
    shadowRadius: 15, // Larger radius for a softer shadow
    elevation: 8, // Increased elevation for Android shadow   
  },
  linkText: {
    color: '#fff', // White text for contrast
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Avenir',
  },
});

export default Index;
