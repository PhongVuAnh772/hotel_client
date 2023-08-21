import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    height: 400,
  },
});

export default class SwiperComponent extends Component {
  render() {
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;
    const {imageSources} = this.props;

    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination
          dotStyle={{
            backgroundColor: 'gray',
            borderWidth: 1,
            borderColor: 'white',
          }}
          paginationStyle={{bottom: 50}}
          activeDotStyle={{backgroundColor: 'white'}}>
          {imageSources.map((source, index) => (
            <View style={styles.slide2} key={index} >
              <Image key={index} style={styles.image} source={source} />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);
