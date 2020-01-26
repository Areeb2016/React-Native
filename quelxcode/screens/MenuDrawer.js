import React, {useContext} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {drawer} from '../constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import ChangeProfilePicture from './ChangeProfilePicture';
import {Context as AuthContext} from '../context/AuthContext';
import {withNavigation} from 'react-navigation';

const MenuDrawer = ({navigation}) => {
    const {state, signout} = useContext(AuthContext);

    function navLink(nav, text, icon) {
        return(
            <TouchableOpacity style={drawer.drawerItemContainerStyle} onPress={() => navigation.navigate(nav)}>
                <View style={drawer.drawerIconContainerStyle}>
                    <MaterialCommunityIcons name={icon} size={25} color='#707FA5' />
                </View>
                <Text style={drawer.drawerTextStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <>
            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['#000d2f', '#00113f']}
                style={{flex: 1}}
            >
                <SafeAreaView forceInset={{top: 'always'}} style={drawer.container}>
                    <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                        <ChangeProfilePicture inDrawer={true} />

                        <Text style={drawer.avatarTextStyle}>ART A.</Text>
                    </View>

                    <View style={{flex: 7}}>
                        <View style={{marginBottom: 10}}>
                            <Text style={drawer.headings}>Settings</Text>
                            {navLink('ChangeEmail', 'Change Email', 'email-outline')}
                            {navLink('ChangePassword', 'Change Password', 'email-outline')}
                            {navLink('UpdateProfile', 'Change Personal Info', 'account-outline')}
                            {navLink('Preferences', 'Preferences', 'tune')}
                            {navLink('TwoFactorAuth', 'Two Factor Authentication', 'security')}
                        </View>

                        <View style={{marginBottom: 10}}>
                            <Text style={drawer.headings}>Transactions</Text>
                            {navLink('Outgoing', 'Outgoing', 'arrow-top-right')}
                            {navLink('Incoming', 'Incoming', 'arrow-bottom-left')}
                        </View>

                        <TouchableOpacity
                            style={drawer.signOutContainerStyle}
                            onPress={() => signout(state.token)}
                        >
                            <View style={drawer.drawerIconContainerStyle}>
                                <MaterialCommunityIcons name='power' size={30} color='white' />
                            </View>
                            <Text style={[drawer.drawerTextStyle, {color: 'white'}]}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </>
    );
};

export default withNavigation(MenuDrawer);