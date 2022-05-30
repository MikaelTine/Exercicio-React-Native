import React from 'react'
import { 
  StatusBar,
  Button,
  Image, 
  View 
  } from 'react-native'

import gengar from "./assets/gengar.png"
import mewtwo from "./assets/mewtwo.png"
import lucario from "./assets/lucario.png"

export default class App extends React.Component {

  state = {
    imagem : gengar

  }
  
  render() {
    return (

      <View style={{marginTop: 10, marginVertical: 30}}>

        <StatusBar style="auto"/>
        
        <View>
          <Image
            source={this.state.imagem}
            style={{ width: 200, height: 200, alignSelf: "center", resizeMode: 'center'}} />
        </View>


        <View style={{margin: 10, marginVertical: 5}}>
          <Button
            title='Gengar'
            onPress={()=>this.setState({imagem: gengar })}
          />
        </View>
        
        <View style={{margin: 10, marginVertical: 5}}>
          <Button
            title='Mewtwo'
            onPress={()=>this.setState({imagem: mewtwo })}
          />
        </View>

        <View style={{margin: 10, marginVertical: 5}}>
          <Button
            title='Lucario'
            onPress={()=>this.setState({imagem: lucario })}
          />
        </View>

      </View>
    )
  }
}