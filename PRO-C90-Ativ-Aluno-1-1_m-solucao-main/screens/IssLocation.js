import React, { Component } from 'react';
import {Text,View,StyleSheet,ImageBackground,StatusBar,SafeAreaView,Image,Alert,Platform,} from 'react-native';
//importe MapView e Marker do react-native-maps
import IssInfo from './IssInfo';
//importe axios

export default class IssLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     //inicialize o primeiro estado de location
    };
  }

  componentDidMount() {
    //chamar a função que vai montar o componente
  }

  getIssLocation = () => {
    //configure axios
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/bg.png')}
            style={styles.backgroundImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Localização da EEI</Text>
            </View>
            <View style={styles.mapContainer}>
              {/* configure MapView */}

                {/*  configure Marker*/}
                  <Image
                    source={require('../assets/iss_icon.png')}
                    style={{ height: 50, width: 50 }}
                  />
                {/* feche Marker */}
              {/* feche mapView*/}
            </View>
            <IssInfo />
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  mapContainer: {
    flex: 0.7,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  infoText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
