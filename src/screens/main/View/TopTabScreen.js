import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import SwiperComponent from './SwiperComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const TopTabScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <SwiperComponent
        imageSources={[
          require('../../../assets/main/artishotel.png'),
          require('../../../assets/main/hotel1.jpg'),
          require('../../../assets/main/hotel1.jpg'),
          require('../../../assets/main/hotel1.jpg'),
        ]}
      />

      <TouchableOpacity style={styles.heartFavorite}>
        <FontAwesome name="heart" color="white" size={22} />
      </TouchableOpacity>
      <View style={styles.locationInformationContainer}>
        <View style={styles.locationInformation}>
          <Text style={styles.locationName}>Mù căng chải,Việt Nam</Text>
          <Text style={styles.locationDistance}>Cách 193km</Text>
          <Text style={styles.informationTrip}>
            5 đêm<Text style={styles.informationTripSpacing}>.</Text>
            <Text style={styles.informationTrip}>
              Ngày 20 - Ngày 25 tháng 8
            </Text>
          </Text>
          <Text style={styles.informationTotalMoneyText}>
            <Text style={styles.informationTotalMoney}>$200</Text> tổng trước
            thuế
          </Text>
        </View>
        <View style={styles.starRateContainer}>
          <View style={styles.starRateTextContainer}>
            <FontAwesome name="star" color="black" size={16} />

            <Text style={styles.starRateText}>5.0</Text>
          </View>
          <TouchableOpacity style={styles.buttonReservation} onPress={() => {navigation.navigate("HotelInfo")}}>
            <Text style={styles.buttonText}>Đặt phòng ngay</Text>
            <FontAwesome
              name="arrow-right"
              color="white"
              size={12}
              style={styles.iconButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopTabScreen;

const styles = StyleSheet.create({
  informationTripSpacing: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  informationTrip: {color: 'rgb(121, 121, 121)', paddingBottom: 5},
  locationInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informationTotalMoneyText: {
    color: 'rgb(63, 63, 63)',
    textDecorationLine: 'underline',
    paddingVertical: 10,
  },
  informationTotalMoney: {
    fontWeight: 'bold',
  },
  container: {paddingVertical: 10},
  locationName: {
    fontWeight: 'bold',
    color: 'black',
  },
  locationDistance: {
    color: 'rgb(121, 121, 121)',
  },
  starRateText: {
    color: 'black',
    paddingLeft: 5,
  },
  starRateTextContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  starRateContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonReservation: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    height: 35,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',
  },
  iconButton: {
    paddingLeft: 10,
    alignSelf: 'center',
    marginTop: 3,
  },
  heartFavorite: {
    position: 'absolute',
    top:'7%',
    right:'4%',
  },
});
