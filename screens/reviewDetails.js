import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { images } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    const rating = navigation.getParam('rating', 1);

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
                <Text>Title : {navigation.getParam('title', 'NO-TITLE')}</Text>
                <Text>Body: {navigation.getParam('body', 'NO-BODY')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});