import TrackPlayer from 'react-native-track-player';

TrackPlayer.setupPlayer().then(async() => {
    // The player is ready to be used
    await TrackPlayer.add({
        id: 'trackId',
        url: require('./Falling.mp3'),
        title: 'Falling',
        artist: 'Trevor Daniel',
        artwork: require('./falling.jpg')
    });
 
    // Starts playing it
    TrackPlayer.play();
});