import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HeaderTopTab = () => {
  return (
    <View style={[styles.card, styles.elevation]}>
            <View style={styles.searchContainer}>
              <FontAwesome name="search" color="black" size={20} />
            </View>
            <View style={styles.searchTextContainer}>
              <Text style={styles.searchTextTitle}>Bạn sẽ đi đâu ?</Text>
              <Text style={styles.searchTextDescription}>Địa điểm bất kỳ</Text>
            </View>
            <View style={styles.searchFormatContainer}>
              <FontAwesome name="tasks" color="black" size={20} />
            </View>
          </View>
  )
}

export default HeaderTopTab

const styles = StyleSheet.create({
    card: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    width: '90%',
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
  },
   searchTextTitle: {
    color: 'rgb(44, 44, 44)',
    fontWeight: 'bold',
  },
  searchTextDescription: {
    color: 'rgb(116, 116, 116)',
    fontSize: 13
  },
  searchTextContainer: {
    flex: 8,
  },
  searchFormatContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: 'rgb(224, 224, 224)',
    borderWidth: 1,
    borderRadius: 20,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
})