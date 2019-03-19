import React from "react"
import {View, StyleSheet, Text } from "react-native"

class Block extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>
            AMRIC1
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: 'powderblue',
   width: 100,
   height: 100
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default Block
