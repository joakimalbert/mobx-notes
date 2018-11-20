import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {observer, inject} from 'mobx-react';
import {observable, reaction} from 'mobx';
import PropTypes from "prop-types";
import StyleFactory from "src/styles";
import {ContentStoreFactory, ContentType} from '../../stores/contentStore/contentStore';

const theme = StyleFactory.getTheme();

@inject('exerciseState', 'keyboardState', 'navigation')
@observer
export default class TextFeedback extends Component {

    firstPool = ['Snyggt jobbat, kompis! 👊','Toppen! ✌','Way to go!! 🎉'];
    secondPool = ['Kämpa på! ❤', 'Nästan där!! 👊', 'Bra kämpat! ⭐']
    render() {

        let solvedByMyself = this.firstPool[Math.floor(Math.random() * Math.floor(this.firstPool.length - 1))];
        let albertHelp = this.secondPool[Math.floor(Math.random() * Math.floor(this.secondPool.length - 1))];

        let text = this.props.exerciseState.exerciseAnsweredCorrect
            ? solvedByMyself
            : albertHelp;

        return (
            <Text style={styles.text}>
                {text}
            </Text>
        );
    }
}

TextFeedback.propTypes = {
    exerciseState: PropTypes.object,
    keyboardState: PropTypes.object,
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fontFamily,
        fontSize: 17,
        color: 'white'
    }
});
