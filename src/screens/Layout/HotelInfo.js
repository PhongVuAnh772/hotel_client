import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import SwiperReservation from '../main/View/SwiperReservation';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import avatar from '../../assets/main/black.jpg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MapView, {Marker} from 'react-native-maps';

const screenWidth = Dimensions.get('window').width;

const HotelInfo = ({premiumHome = true, rare = true, verified = true}) => {
  const navigation = useNavigation();
  const [modalVisibleMap, setModalVisibleMap] = useState(false);
  return (
    <>
      <ScrollView style={styles.container}>
        <SwiperReservation
          imageSources={[
            require('../../assets/main/artishotel.png'),
            require('../../assets/main/hotel1.jpg'),
            require('../../assets/main/hotel1.jpg'),
            require('../../assets/main/hotel1.jpg'),
          ]}
          navigation={navigation}
        />
        <View style={styles.inner}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.titleHotel}>Traditional Windmill-Milos</Text>
            <View style={styles.contentWrapHotel}>
              <FontAwesome name="star" size={15} color="black" />
              <Text style={styles.starRate}>4,99</Text>
              <Text style={styles.dottedSeperate}>.</Text>
              <TouchableOpacity>
                <Text style={styles.reviewStarText}>89 đánh giá</Text>
              </TouchableOpacity>
              <Text style={styles.dottedSeperate}>.</Text>
              {premiumHome && <Entypo name="medal" size={17} color="black" />}
              {premiumHome && (
                <Text style={styles.starRate}>Chủ nhà siêu cấp</Text>
              )}
              <Text style={styles.dottedSeperate}>.</Text>
              <Text style={styles.locationSpecified}>Kroutas, Hy Lạp</Text>
            </View>
            {rare && (
              <View style={styles.rareRoom}>
                <Text style={styles.rareRoomText}>
                  <Text style={styles.rareRoomTextDecorate}>
                    Nơi này rất hiếm khi còn chỗ.
                  </Text>{' '}
                  Chỗ ở của Pyhoc trên Airbnb thường kín phòng
                </Text>
                <FontAwesome
                  name="diamond"
                  size={25}
                  color="rgb(255, 107, 104)"
                  style={{flex: 0.7}}
                />
              </View>
            )}
            <View style={styles.hotelTypeContainer}>
              <View style={styles.titleHotelType}>
                <Text style={styles.hotelTypeText}>
                  Phòng trong lều mái vòm bằng băng, Chủ nhà Antti
                </Text>
                <View style={styles.avatarImageContainer}>
                  <Image source={avatar} style={styles.avatarImage} />
                </View>
                {premiumHome && (
                  <Entypo
                    name="medal"
                    size={18}
                    color="rgb(255, 107, 104)"
                    style={styles.medalHomeUser}
                  />
                )}
              </View>
              <View style={styles.hotelHavingContainer}>
                <View style={styles.hotelTypeHaving}>
                  <MaterialIcons
                    name="bed"
                    size={20}
                    color="black"
                    style={{flex: 1}}
                  />
                  <Text style={styles.contentTypeHaving}>1 giường đôi</Text>
                </View>
                <View style={styles.hotelTypeHaving}>
                  <FontAwesome
                    name="shower"
                    size={20}
                    color="black"
                    style={{flex: 1}}
                  />
                  <Text style={styles.contentTypeHaving}>
                    Phòng vệ sinh chung
                  </Text>
                </View>
                <View style={styles.hotelTypeHaving}>
                  <Ionicons
                    name="home-outline"
                    size={20}
                    color="black"
                    style={{flex: 1}}
                  />

                  <Text style={styles.contentTypeHaving}>
                    Những khách khác có thể hiện diện tại đây
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.hotelTypeContainer]}>
              <View style={styles.hotelSpecifiedContentWidget}>
                <MaterialIcons
                  name="bed"
                  size={20}
                  color="black"
                  style={{width: '10%'}}
                />
                <View style={styles.specifiedHomeContainer}>
                  <Text style={styles.specifiedHomeTitle}>
                    Phòng trong lều mái vòm bằng băng
                  </Text>
                  <Text style={styles.specifiedHomeDescription}>
                    Bạn sẽ có phòng riêng trong một ngôi nhà và được sử dụng khu
                    vực chung
                  </Text>
                </View>
              </View>
              <View style={styles.hotelSpecifiedContentWidget}>
                <MaterialIcons
                  name="door-front"
                  size={20}
                  color="black"
                  style={{width: '10%'}}
                />
                <View style={styles.specifiedHomeContainer}>
                  <Text style={styles.specifiedHomeTitle}>Tự nhận phòng</Text>
                  <Text style={styles.specifiedHomeDescription}>
                    Tự nhận phòng với hộp khóa an toàn
                  </Text>
                </View>
              </View>
              <View style={styles.hotelSpecifiedContentWidget}>
                <MaterialIcons
                  name="edit-calendar"
                  size={20}
                  color="black"
                  style={{width: '10%'}}
                />
                <View style={[styles.specifiedHomeContainer]}>
                  <Text style={styles.specifiedHomeTitle}>
                    Hủy miễn phí trước 16 thg 11
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* <ContentHost /> */}
          <View style={styles.hostInformationContainer}>
            <Text style={styles.hostInformationTitle}>Gặp gỡ Chủ nhà</Text>
            <Pressable style={[styles.card, styles.elevation]}>
              <View style={styles.hostInformationBasic}>
                <View style={styles.hostInformationImageContainer}>
                  <Image source={avatar} style={styles.hostInformationImage} />
                  {verified && (
                    <View style={styles.verifiedIconsContainer}>
                      <MaterialIcons
                        name="verified-user"
                        size={18}
                        color="white"
                        // style={styles.medalHomeUser}
                      />
                    </View>
                  )}
                </View>
                <Text style={styles.hostInformationName}>Antti</Text>
                <Text style={styles.hostInformationIntroduction}>
                  Chủ nhà/Người tổ chức
                </Text>
              </View>
              <View style={styles.hostInformationReview}>
                <View style={styles.hostReviewContent}>
                  <Text style={styles.hostReviewContentTitle}>423</Text>
                  <Text style={styles.hostReviewContentText}>Đánh giá</Text>
                </View>
                <View style={styles.hostReviewContent}>
                  <View style={styles.hostReviewContentTitleStar}>
                    <Text style={styles.hostReviewContentTitle}>4,74</Text>
                    <FontAwesome
                      name="star"
                      size={14}
                      color="black"
                      style={{paddingHorizontal: 3}}
                    />
                  </View>
                  <Text style={styles.hostReviewContentText}>Xếp hạng</Text>
                </View>
                <View style={styles.hostReviewContentOther}>
                  <Text style={styles.hostReviewContentTitle}>10</Text>
                  <Text style={styles.hostReviewContentText}>
                    Năm kinh nghiệm đón tiếp khách
                  </Text>
                </View>
              </View>
            </Pressable>
            <View style={styles.hostReviewContentInformationReview}>
              <Octicons
                name="briefcase"
                size={20}
                color="black"
                style={{width: '10%'}}
              />
              <Text style={styles.hostReviewContentInformationReviewText}>
                Công việc của tôi: owner of Lucky Ranch company
              </Text>
            </View>
            <View style={styles.hostReviewContentInformationReview}>
              <FontAwesome
                name="language"
                size={20}
                color="black"
                style={{width: '10%'}}
              />
              <Text style={styles.hostReviewContentInformationReviewText}>
                Nói tiếng Phần Lan, tiếng Đức, Tiếng Tây Ban Nha và tiếng Thụy
                Điển
              </Text>
            </View>
            <View style={styles.hostReviewContentInformationReview}>
              <MaterialIcons
                name="room-service"
                size={20}
                color="black"
                style={{width: '10%'}}
              />
              <Text style={styles.hostReviewContentInformationReviewText}>
                Đối với khách tôi luôn: Chăm sóc tốt
              </Text>
            </View>
            <TouchableOpacity
              style={styles.hostReviewContentInformationReviewBtn}>
              <Text style={styles.hostReviewContentInformationReviewBtnText}>
                Hiển thị thêm <Text>&gt;</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.hostReviewContentInformationReviewMessageBtn}>
              <Text
                style={styles.hostReviewContentInformationReviewMessageBtnText}>
                Nhắn tin cho chủ nhà
              </Text>
            </TouchableOpacity>
            <View style={styles.separatedWarning}>
              <Text style={styles.separatedWarningText}>
                Để bảo vệ khoản thanh toán của bạn, tuyệt đối không chuyển tiền
                hoặc liên lạc bên ngoài trang web hoặc ứng dụng của bạn
              </Text>
            </View>
          </View>
          <View style={[styles.hotelTypeContainer, {marginHorizontal: 20}]}>
            <Text style={styles.hotelTypeText}>Nơi bạn sẽ ngủ nghỉ</Text>
            <View
              style={[
                styles.hotelTypeHaving,
                {width: '35%', height: 130, marginTop: '5%'},
              ]}>
              <MaterialIcons
                name="bed"
                size={25}
                color="black"
                style={{flex: 1}}
              />
              <Text style={[styles.contentTypeHaving, {paddingTop: '40%'}]}>
                Không gian chung
              </Text>
              <Text style={styles.informationTotalMoneyText}>1 giường đôi</Text>
            </View>
          </View>
          <View style={[styles.hotelTypeContainer, {marginHorizontal: 20}]}>
            <Text style={styles.hotelTypeText}>
              Nơi này có những gì cho bạn
            </Text>

            <View style={styles.hostReviewContentInformationReview}>
              <FontAwesome name="cutlery" size={20} color="black" />
              <Text style={styles.hostReviewContentInformationReviewText}>
                Công việc của tôi: owner of Lucky Ranch company
              </Text>
            </View>
          </View>
          <View style={[styles.hotelTypeContainer, {marginHorizontal: 20}]}>
            <Text style={styles.hotelTypeText}>Nơi bạn sẽ đến</Text>
            <Pressable
              style={{
                borderRadius: 10,
                width: '100%',
                height: 200,
                overflow: 'hidden',
                alignSelf: 'center',
                marginVertical: 20,
              }}
              onPress={() => setModalVisibleMap(true)}>
              <MapView
                style={{
                  width: '100%',
                  height: '100%',
                }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                // customMapStyle={mapStyle}
              >
                <Marker
                  coordinate={{latitude: 37.78825, longitude: -122.4324}}
                  title="Địa điểm bạn sẽ đến"
                  description="Nhấn biểu tượng Google Maps để dẫn đường"
                  
                />
              </MapView>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonAddHotelContainer}>
        <View style={styles.locationInformation}>
          <Text style={styles.informationTotalMoney}>$200</Text>
          <Text style={styles.informationTotalMoneyText}>Tổng trước thuế</Text>

          <Text style={styles.informationTrip}>Ngày 20 - Ngày 25 tháng 8</Text>
        </View>
        <TouchableOpacity style={styles.buttonAddHotel}>
          {/* onPress={() => navigation.navigate("")} */}
          <Text style={styles.buttonAddHotelText}>Đặt phòng</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisibleMap}
        onRequestClose={() => {
          setModalVisibleMap(!modalVisibleMap);
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <MapView
            style={{
              width: '100%',
              height: '100%',
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            // customMapStyle={mapStyle}
          >
            <Marker
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              title="Địa điểm bạn sẽ đến"
              description="Nhấn biểu tượng Google Maps để dẫn đường"
            />
          </MapView>
          <TouchableOpacity 
            style={[styles.cardModal, styles.elevationModal]}
            
            onPress={() => setModalVisibleMap(false)}>
            <MaterialIcons name="close" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
      
    </>
  );
};

export default HotelInfo;

const styles = StyleSheet.create({
  inner: {
    paddingVertical: 15,
    marginBottom: '15%',
  },
  hostReviewContentInformationReviewBtnText: {
    textDecorationLine: 'underline',
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  introduceHotelTypeContainer: {
    paddingVertical: 10,
    borderBottomColor: 'rgb(229, 229, 229)',
    borderBottomWidth: 2,
  },
  hotelImageContentTypeTitle: {},
  introduceHotelTypeText: {
    color: 'black',
    paddingBottom: 5,
  },
  separatedWarning: {
    width: '100%',
    borderTopColor: 'rgb(219, 218, 211)',
    borderTopWidth: 1,
    paddingVertical: 15,
  },
  separatedWarningText: {
    color: 'gray',
    fontSize: 13,
  },
  hostReviewContentInformationReviewMessageBtn: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: '50%',
    backgroundColor: 'rgb(34, 34, 34)',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  hostReviewContentInformationReviewMessageBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  hostReviewContentInformationReviewBtn: {
    paddingVertical: 15,
  },
  hostReviewContentTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  hostReviewContentText: {
    color: 'black',
    fontSize: 10,
  },
  hostReviewContentOther: {
    paddingVertical: 7,
  },
  hostReviewContentInformationReview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  hostReviewContentInformationReviewText: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 15,
  },
  hostReviewContent: {
    paddingVertical: 7,
    borderBottomColor: 'rgb(229, 229, 229)',
    borderBottomWidth: 1,
  },
  hostReviewContentTitleStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hostInformationBasic: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hostInformationReview: {},
  hostInformationName: {
    paddingVertical: 5,
    fontSize: 28,
    fontWeight: '500',
    color: 'black',
  },
  verifiedIconsContainer: {
    position: 'absolute',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    backgroundColor: 'rgb(229, 29, 86)',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    right: 0,
  },
  hostInformationIntroduction: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  hostInformationReview: {flex: 1},
  hostInformationContainer: {
    width: '100%',
    backgroundColor: 'rgb(240, 230, 230)',
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  hostInformationImageContainer: {height: 100, width: 100},
  hostInformationImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  hostInformationTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  specifiedHomeContainer: {
    flex: 9,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: 'rgb(57, 51, 45)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  cardModal: {
    position: 'absolute',
    top: '3%',
    left: '3%',
    backgroundColor: 'white',

    width: 45,
    height: 45,

    borderRadius: 10,
  },
  elevationModal: {
    elevation: 10,
    shadowColor: 'rgb(57, 51, 45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hotelSpecifiedContentWidget: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  specifiedHomeTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  specifiedHomeDescription: {
    fontSize: 15,
    color: 'rgb(190, 190, 190)',
  },
  informationTotalMoneyText: {
    color: 'rgb(63, 63, 63)',
    fontSize: 12,
    fontFamily: 'Poppins-Thin',
  },
  buttonAddHotelText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  informationTotalMoney: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  informationTripSpacing: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  buttonAddHotel: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: 'rgb(243, 48, 94)',
    borderRadius: 10,
  },
  informationTrip: {
    color: 'black',
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  buttonAddHotelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgb(235, 235, 235)',
    alignItems: 'center',
  },
  titleHotelType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHotel: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
  },
  contentWrapHotel: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    borderBottomColor: 'rgb(229, 229, 229)',
    borderBottomWidth: 2,
    paddingBottom: 30,
  },
  medalHomeUser: {
    position: 'absolute',
    bottom: 0,
    right: '3%',
  },
  starRate: {
    fontSize: 13,
    color: 'rgb(121, 121, 121)',
    paddingLeft: 5,
  },
  reviewStarText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    color: 'black',
  },
  dottedSeperate: {
    paddingBottom: 5,
    color: 'black',
    paddingHorizontal: 5,
  },
  locationSpecified: {
    fontSize: 13,
    color: 'rgb(121, 121, 121)',
  },
  avatarImage: {
    resizeMode: 'cover',
    width: '80%',
    height: '95%',
    borderRadius: 40,
  },
  avatarImageContainer: {
    height: 55,
    width: 30,
    flex: 1,
  },
  rareRoom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomColor: 'rgb(229, 229, 229)',
    borderBottomWidth: 2,
  },
  hotelTypeContainer: {
    paddingVertical: 20,
    borderBottomColor: 'rgb(229, 229, 229)',
    borderBottomWidth: 2,
  },
  rareRoomText: {
    fontSize: 15,
    color: 'rgb(59, 59, 59)',
    flex: 6,
    paddingRight: '10%',
  },
  rareRoomTextDecorate: {
    color: 'black',
    fontWeight: '500',
  },
  hotelTypeText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    flex: 4.5,
    marginRight: '5%',
  },
  hotelTypeHaving: {
    width: '30%',
    height: 120,
    borderColor: 'rgb(233, 233, 233)',
    borderWidth: 2,
    marginTop: '10%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  hotelHavingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentTypeHaving: {
    flex: 1,
    color: 'black',
    fontWeight: '700',
    flexWrap: 'wrap',
    fontFamily: 'Poppins-ExtraLight',
  },
  centeredViewTicket: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignSelf: 'center',

    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  centeredViewTicketDeep: {
    bottom: '40%',
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '70%',
    height: '30%',
    borderRadius: 10,
  },
  modalView: {
    paddingVertical: 15,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.4,
  },
});
