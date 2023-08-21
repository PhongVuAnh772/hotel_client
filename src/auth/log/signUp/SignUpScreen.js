import {StyleSheet, Text, View, Dimensions,KeyboardAvoidingView, Keyboard, Platform, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import loginImage from '../../../assets/auth/loginImage.png'

const SignUpScreen = () => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Image source={loginImage} style={[styles.image, {height: deviceHeight * 0.5}]}/>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginText}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={styles.otherDescriptionText}>

                </Text>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  inner: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    paddingVertical: 10,
  },
  buttonLogin: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(1, 149, 255)',
    borderRadius: 10,

  },
  buttonLoginText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },

  
});
