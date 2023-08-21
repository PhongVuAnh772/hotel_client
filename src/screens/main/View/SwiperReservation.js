import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  container: {
    height: 250,
  },
  pageText: {
    color: 'white',
    position: 'absolute',
    bottom: '5%',
    right: '3%',
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    backgroundColor: 'rgb(61, 48, 38)',
  },
  allButtonContainer: {
    position: 'absolute',
    top: '5%',
    paddingHorizontal: 15,
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonWrap: {
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgb(246, 246, 246)',
  },
  buttonRightContainer: {
    flexDirection: 'row',

  }
});

export default class SwiperReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  handleIndexChanged = index => {
    this.setState({currentPage: index});
  };

  render() {
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;
    const {imageSources,navigation} = this.props;
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          onIndexChanged={this.handleIndexChanged}
          showsPagination={false}>
          {imageSources.map((source, index) => (
            <View style={styles.slide2} key={index}>
              <Image key={index} style={styles.image} source={source} />
            </View>
          ))}
        </Swiper>
        <View style={styles.allButtonContainer}>
          <TouchableOpacity style={styles.buttonWrap} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={15} color="rgb(61, 59, 60)" />
          </TouchableOpacity>
          <View style={styles.buttonRightContainer}>
            <TouchableOpacity style={styles.buttonWrap}>
              <FontAwesome name="share-alt" size={15} color="rgb(61, 59, 60)" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonWrap,{marginLeft: 10}]}>
              <Feather name="heart" size={15} color="rgb(61, 59, 60)" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.pageText}>
          {this.state.currentPage + 1} / {imageSources.length}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperReservation);
