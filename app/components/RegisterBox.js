// SPDX-FileCopyrightText: 2020, AG Projects
// SPDX-License-Identifier: GPL-3.0-only

import React from 'react';
import { View, Text  } from 'react-native';
import PropTypes from 'prop-types';

import RegisterForm from './RegisterForm';
import Logo from './Logo';
import styles from '../assets/styles/blink/_RegisterBox.scss';

const RegisterBox = (props) => {
    let containerClass;

    if (props.isTablet) {
        containerClass = props.orientation === 'landscape' ? styles.landscapeTabletRegisterBox : styles.portraitTabletRegisterBox;
    } else {
        containerClass = props.orientation === 'landscape' ? styles.landscapeRegisterBox : styles.portraitRegisterBox;
    }


    return (
        <View style={containerClass}>
            <View>
                <Logo
                    orientation={props.orientation}
                    isTablet={props.isTablet}
                />

            </View>
            <View>
                <RegisterForm
                    registrationInProgress={props.registrationInProgress}
                    handleRegistration={props.handleRegistration}
                    autoLogin={props.autoLogin}
                    orientation={props.orientation}
                    isTablet={props.isTablet}
                    phoneNumber={props.phoneNumber}
                />

            </View>

        </View>
    );
};

RegisterBox.propTypes = {
    handleRegistration     : PropTypes.func.isRequired,
    registrationInProgress : PropTypes.bool,
    autoLogin              : PropTypes.bool,
    orientation            : PropTypes.string,
    isTablet               : PropTypes.bool,
    phoneNumber            : PropTypes.string
};

export default RegisterBox;
