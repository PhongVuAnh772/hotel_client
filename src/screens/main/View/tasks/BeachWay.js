import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView
} from 'react-native';
import React from 'react';
import TopTabScreen from '../TopTabScreen';
import {useAppSelector, useAppDispatch} from '../../../../../app/hooks/hooks';
import {enable_cost} from '../../../../../features/state_enabled/totalCostSlice';
import {Switch} from 'react-native-switch';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const BeachWay = () => {
  const dispatch = useAppDispatch();
  const switchTotalCostState = useAppSelector(
    state => state.totalCost.ENABLE_TOTALCOST_STATUS,
  );
  const toggleSwitch = () => {
    dispatch(enable_cost(!switchTotalCostState));
    console.log(switchTotalCostState);
  };
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.inner}>
          <View style={styles.toggleSwitchContainer}>
            <View style={styles.toggleSwitchTitle}>
              <Text style={styles.toggleSwitchTitleText}>Hiển thị tổng giá</Text>
              <Text style={styles.toggleSwitchDescription}>Bao gồm mọi khoản phí, trước thuế</Text>
            </View>
            <Switch
              value={!switchTotalCostState}
              onValueChange={toggleSwitch}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={30}
              circleBorderWidth={2}
              backgroundActive={'black'}
              backgroundInactive={'rgb(191, 192, 190)'}
              renderInsideCircle={() => (
                <View style={styles.circleSwitch}>
                  <FontAwesome name="check" size={16} color="black" />
                </View>
              )}
              circleActiveColor={'white'}
              circleInActiveColor={'black'}
              changeValueImmediately={true}
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              outerCircleStyle={{}}
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2}
              switchRightPx={2}
              switchWidthMultiplier={2}
              switchBorderRadius={20}
            />
          </View>
          <View style={styles.contentContainer}>
            <TopTabScreen />
                        <TopTabScreen />

          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default BeachWay;

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  toggleSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'rgb(233, 233, 233)',
    borderWidth: 1.5,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  inner: {
    marginBottom: '19%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingVertical: 10

  },
  toggleSwitchTitleText: {
     fontSize: 16,
     fontWeight: 'bold',
     color: 'black'
  },
  toggleSwitchDescription: {
    fontSize: 15,
    color: 'rgb(174, 174, 174)'
  }
});
