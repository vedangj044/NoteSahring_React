import React from "react"
import { Appbar } from 'react-native-paper';
import { Picker, View } from 'react-native'

class TitleAppBar extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <View style={{backgroundColor: "orange"}}>
        <Appbar.Header style={{backgroundColor: "orange"}}>
          <Appbar.Action icon="menu"/>
          <Appbar.Content
            title="CS"
            subtitle="2 sem"
          />
        </Appbar.Header>
        <Picker style={{marginLeft: 10, width: 150, backgroundColor: 'brown', borderRadius: 2, marginBottom: 5}}>
          <Picker.Item label="Notes" value="note" />
          <Picker.Item label="Question Paper" value="note" />
          <Picker.Item label="Books" value="note" />

        </Picker>
      </View>
    )
  }
}

export default TitleAppBar
