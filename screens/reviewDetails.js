import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';

export default function ReviewDetails({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1 },
        { title: 'Gotta Catch Them All (again)', rating : 4, body: 'lorem ipsum', key: 2 },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3}
    ]);

    const pressHandler = () => {
        navigation.goBack();
    }
    const ratings = images.ratings;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
                <Text>Title : {navigation.getParam('title', 'NO-TITLE')}</Text>
                <Text>Body: {navigation.getParam('body', 'NO-BODY')}</Text>
                <Image source={ratings[navigation.getParam('rating', 0)]} />
                <Button
                    title="back to home screen"
                    onPress={pressHandler}
                />
            </Card>
        </View>
    );
}
