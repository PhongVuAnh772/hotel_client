import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import loginImage from '../../../assets/auth/loginImage.png';
import google from '../../../assets/auth/googleIcon.png';
import facebook from '../../../assets/auth/fbIcon.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View
            style={[
              styles.imageContainer,
              {height: deviceHeight * 0.6, width: deviceWidth * 0.9},
            ]}>
            <Image source={loginImage} style={styles.image} />
            <Text style={styles.textLoginImage}>Tìm Địa Điểm Yêu Thích & Tham Gia Với Tôi</Text>
          </View>
          <TouchableOpacity
            style={[styles.buttonLogin, {width: deviceWidth * 0.4}]}>
            <Text style={styles.buttonLoginText}>Đăng nhập</Text>
          </TouchableOpacity>
          <Text style={styles.otherDescriptionText}>- hoặc -</Text>
          <View style={styles.otherButtonContainer}>
            <TouchableOpacity style={styles.loginGoogleContainer}>
              <FontAwesome name="google" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginFacebookContainer}>
              <FontAwesome name="facebook" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.ForgotAndRegisterContainer}>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Quên mật khẩu ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerContainer}>
              <Text style={styles.registerText}>Đăng kí</Text>
              <Text style={styles.registerTextSpecified}>tại đây</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 239, 245)',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    borderRadius: 20,
    marginVertical: '15%',
    overflow: 'hidden',
  },
  buttonLogin: {
    paddingVertical: 10,
    backgroundColor: 'rgb(1, 149, 255)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLoginText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 10,
  },
  otherDescriptionText: {
    color: 'rgb(94, 94, 94)',
    paddingVertical: 20,
    fontSize: 23,
  },
  otherButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  loginGoogleContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(237, 85, 100)',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  loginFacebookContainer: {
    paddingVertical: 7,
    paddingHorizontal: 13,
    backgroundColor: 'rgb(11, 134, 238)',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  ForgotAndRegisterContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  forgotPasswordText: {
    fontSize: 18,
    color: 'rgb(94, 94, 94)',
  },
  registerText: {
    fontSize: 18,
    color: 'rgb(94, 94, 94)',
  },
  registerTextSpecified: {
    fontSize: 18,
    color: 'rgb(54, 169, 252)',
    paddingLeft: 5
  },
  registerContainer: {
    flexDirection: 'row'
  },
  textLoginImage:{
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '15%',
    fontSize: 18,
    paddingHorizontal: 50,
    textAlign: 'center'
  }
});
