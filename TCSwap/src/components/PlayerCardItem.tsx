import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, TouchableHighlight } from 'react-native';

type Props = {
  item: any,
  onPress: any,
  navigation: any
}

const PlayerCardItem: React.FC<Props> = ({ item, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg',
        }}
      />
      <View style={styles.details}>
        <Text style={[styles.title]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
  
};

export default PlayerCardItem

const styles = StyleSheet.create ({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 75,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
})
