import { Button, StyleSheet, Text, View, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Switch, TouchableOpacity } from 'react-native-gesture-handler';
import { Section } from '../Data/Section';
import VectorIcons from '../components/VectorIcons';


const Profile = ({ navigation }) => {
    const [userName, setUsername] = useState('')

    const [form, setForm] = useState({
        language: 'English',
        darkMode: true,
        wifi: false
    })
    const LogOut = async () => {
        try {
            console.log('working')
            await AsyncStorage.setItem('userName', '')
            await AsyncStorage.setItem('password', '')
            navigation.navigate('SplashScreen')

        }
        catch (e) {
            Alert.alert('Something Went Wrong', e)
        }


    }
const UserInfo = async ()=>{
     const email = await AsyncStorage.getItem('userName');
    setUsername(email);

}
    const User = ()=>{
        return(
            <View style={styles.profilecontainer}>
                <Image source={require('../assets/user5.jpg')} style={styles.profileimg}/>
                <Text style={styles.profilename}>{userName}</Text>
                <Text style={styles.profileemail}>{userName}@gmail.com</Text>
                <TouchableOpacity style={styles.editbtn}>
                    <Text style={styles.editbtntxt}>Edit Profile</Text>
                    <VectorIcons type='Feather' name='edit' color="#fff" size={12} />
                </TouchableOpacity>
            </View>
        )
    }
    useEffect(()=>{
        UserInfo()
    },[])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
            <ScrollView contentContainerStyle={styles.container}>
                    <View style={{flexDirection:'row', alignItems:'center', marginLeft:16}} onPress={()=>navigation.goBack()}>
                    <VectorIcons type='Ionicons' name='chevron-back' color="#f2ff" size={28} style={{marginRight:9}} onPress={()=>navigation.goBack()}/>
                    <Text style={styles.title}>Profile</Text>
                    </View>
                <View style={styles.header}>
                    <Text style={styles.subtitle}>Update your preference here</Text>
                </View>
                <User/>
                {
                    Section.map(({ header, item }, sectionIndex) => (
                        <View style={styles.section} key={`section_${sectionIndex}`}>
                            <View style={styles.sectionheader}>
                                <Text style={styles.sectionheadertxt}>{header}</Text>
                            </View>
                            <View style={styles.sectionbody}>
                                {
                                    item.map(({ label, id, type, icon }, itemIndex) => (
                                        <View style={[styles.rowWrapper,
                                            itemIndex === 0 && { borderTopWidth: 0 }
                                        ]} key={`item_${sectionIndex}_${itemIndex}`}>
                                            <TouchableOpacity
                                                onPress={() => {

                                                }}
                                            >
                                                <View style={styles.row}>
                                                    <VectorIcons type='Feather' name={icon} color="#616161" size={22} style={{ marginRight: 12 }} />
                                                    <Text style={styles.rowlabel}>{label}</Text>
                                                    <View style={styles.rowSpacer} />

                                                    {
                                                        type === 'select' && (
                                                            <Text style={styles.rowValue}>{form[id]}</Text>
                                                        )
                                                    }
                                                    {
                                                        type === 'toggle' && <Switch value={form[id]} onValueChange={(value) => setForm({ ...form, [id]: value })} />
                                                    }
                                                    {
                                                        ['select', 'link'].includes(type) && (
                                                            <VectorIcons type='Feather' name='chevron-right' color="#ababab" size={22} />
                                                        )
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    ))
                }
                <View style={styles.sectionheader}>
                    <Text style={styles.sectionheadertxt}>LogOut</Text>
                </View>
                    <TouchableOpacity onPress={()=>LogOut()}>
                            
                            <View style={styles.rowLogout}>
                                <VectorIcons type='MaterialIcons' name={'logout'} color="#616161" size={22} style={{ marginRight: 12 }} />
                                <Text style={styles.rowlabel}>Log Out</Text>

                            </View>
                    </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292'
    },
    section: {
        paddingTop: 12
    },
    sectionheader: {
        paddingHorizontal: 24,
        paddingVertical: 8
    },
    sectionheadertxt: {
        fontSize: 14,
        fontWeight: '600',
        color: '#a7a7a7',
        textTransform: 'uppercase',
        letterSpacing: 1.2
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: '#fff'
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24
    },
    rowlabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000'
    },
    rowSpacer: {
        flex: 1,
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4
    },
    rowLogout:{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#fff',
        paddingLeft:24
    },
    profilecontainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        marginVertical:10,
        padding:20
    },
    profileimg:{
        height:90,
        width:90,
        borderRadius:50,
        
    },
    profilename:{
        fontWeight:'700',
        fontSize:23,
        color:'#000',
        textTransform:'capitalize',
        marginTop:5
    },
    profileemail:{
        fontWeight:'400',
        fontSize:17,
        color:'#a7a7a7',
        textTransform:'lowercase',
        marginTop:5
    },
    editbtn:{
        backgroundColor:'#2d7ffa',
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        borderRadius:10,
        elevation:10,
        marginTop:10
    },
    editbtntxt:{
        fontWeight:'500',
        fontSize:12,
        paddingRight:5,
        color:'#fff'

    }


})