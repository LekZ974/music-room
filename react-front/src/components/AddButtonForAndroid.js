import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { TouchableOpacity, Animated, View, StyleSheet } from 'react-native';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import { Theme } from '../native-base-theme/default_theme';

/** constantes * */

const bigBubbleSize = 100;

/** Style * */
const style = StyleSheet.create({
  bigBubble: {
    justifyContent: 'center',
    alignItems: 'center',
    height: bigBubbleSize,
    width: bigBubbleSize,
    borderRadius: bigBubbleSize / 2,
    top: -30,
  },
});

/** class * */
class AddButtonForIos extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.topLeftValue = new Animated.Value(0);
    this.topCenterValue = new Animated.Value(0);
    this.topRightValue = new Animated.Value(0);
  }

  render() {
    const { navigation } = this.props;

    const goToCreateRoom = () => {
      navigation.navigate('CreateRoomScreen');
    };

    const springValue = Animated.add(
      Animated.add(this.topLeftValue, this.topRightValue),
      this.topCenterValue,
    );

    return (
      <View>
        <Animated.View
          style={[
            style.bigBubble,
            {
              backgroundColor: Theme.palette.primary,
              transform: [
                {
                  rotateZ: springValue.interpolate({
                    inputRange: [0, 1, 2, 3],
                    outputRange: ['-45deg', '-45deg', '0deg', '45deg'],
                  }),
                },
                {
                  scaleY: springValue.interpolate({
                    inputRange: [0, 0.65, 1, 1.65, 2, 2.65, 3],
                    outputRange: [1, 1.1, 1, 1.1, 1, 1.1, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity
            hitSlop={{
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            }}
            onPress={goToCreateRoom}
          >
            <Animated.View
              style={{
                transform: [
                  {
                    rotateZ: springValue.interpolate({
                      inputRange: [0, 1, 2, 3],
                      outputRange: ['45deg', '45deg', '45deg', '0deg'],
                    }),
                  },
                ],
              }}
            >
              <FAwesomeIcon name="plus" size={35} color="#FFF" />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

AddButtonForIos.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(AddButtonForIos);
