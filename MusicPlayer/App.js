import TrackPlayer from 'react-native-track-player';
import { View, ProgressBarAndroid, Button } from 'react-native';
import React, { useState, Component } from 'react';
import { Text } from 'react-native';
import { useTrackPlayerEvent, TrackPlayerEvents, STATE_PLAYING, useTrackPlayerProgress } from 'react-native-track-player';
import MusicFiles from 'react-native-get-music-files';

export default class App extends Component{

  componentDidMount(){
TrackPlayer.setupPlayer().then(async() => {
  // The player is ready to be used
  await TrackPlayer.add({
      id: 'trackId',
      url: require('./Falling.mp3'),
      title: 'Falling',
      artist: 'Trevor Daniel',
      artwork: require('./falling.jpg')
  });


});


}

render(){


//In order to get blocks of songs, for fix performance issues at least in Android, use next
return(
  <View>
    <Button title="Play" onPress={this.TrackPlayer.play()}></Button>
  </View>
)
}
}