import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { TouchableOpacity, Animated, Easing, View, StyleSheet, Platform } from 'react-native';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import { Theme } from '../native-base-theme/default_theme';

/** constantes * */

const center = {
  top: 8,
  left: 30,
};

const topCenter = {
  top: -90,
  left: 25,
};

const topLeft = {
  top: -60,
  left: -45,
};

const topRight = {
  top: -60,
  left: 100,
};

const bigBubbleSize = 100;
const smallBubbleSize = 50;

const animateTime = 800;
const easingType = Easing.out(Easing.exp);
const delay = 200;

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
  smallBubble: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.palette.secondary,
    height: smallBubbleSize,
    width: smallBubbleSize,
    borderRadius: smallBubbleSize / 2,
  },
});

/** class * */
class AddButton extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.topLeftValue = new Animated.Value(0);
    this.topCenterValue = new Animated.Value(0);
    this.topRightValue = new Animated.Value(0);
    this.state = {
      pressed: false,
    };
  }

  handleAddButtonPress = () => {
    const { pressed } = this.state;
    if (pressed) {
      this.animateReverse(0);
    } else {
      this.animate(1);
    }
    this.setState({ pressed: !pressed });
  };

  animate = toValue => {
    Animated.stagger(delay, [
      Animated.parallel([
        Animated.timing(this.animatedValue, {
          toValue,
          duration: animateTime,
          easing: Easing.exp,
        }),
        Animated.timing(this.topLeftValue, {
          toValue,
          duration: animateTime,
          easing: easingType,
        }),
      ]),
      Animated.timing(this.topCenterValue, {
        toValue,
        duration: animateTime,
        easing: easingType,
      }),
      Animated.timing(this.topRightValue, {
        toValue,
        duration: animateTime,
        easing: easingType,
      }),
    ]).start();
  };

  animateReverse = toValue => {
    Animated.stagger(delay, [
      Animated.timing(this.topRightValue, {
        toValue,
        duration: animateTime,
        easing: easingType,
      }),
      Animated.timing(this.topCenterValue, {
        toValue,
        duration: animateTime,
        easing: easingType,
      }),
      Animated.parallel([
        Animated.timing(this.animatedValue, {
          toValue,
          duration: animateTime,
          easing: easingType,
        }),
        Animated.timing(this.topLeftValue, {
          toValue,
          duration: animateTime,
          easing: easingType,
        }),
      ]),
    ]).start();
  };

  render() {
    const { navigation } = this.props;
    const { pressed } = this.state;

    const goToCreatePlayListEditorRoom = () => {
      navigation.navigate('PlayListEditor');
    };

    const goToCreateMusicVoteTrackRoom = () => {
      navigation.navigate('MusicTrackVote');
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
              backgroundColor: pressed ? Theme.palette.secondary : Theme.palette.primary,
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
            onPress={
              Platform.OS === 'ios' ? this.handleAddButtonPress : goToCreateMusicVoteTrackRoom
            }
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
        {Platform.OS === 'ios' && (
          <React.Fragment>
            <Animated.View
              style={[
                style.smallBubble,
                {
                  position: 'absolute',
                  transform: [
                    {
                      translateX: this.topLeftValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [center.left, topLeft.left],
                      }),
                    },
                    {
                      translateY: this.topLeftValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [center.top, topLeft.top],
                      }),
                    },
                    {
                      rotateZ: this.topLeftValue.interpolate({
                        inputRange: [0, 0.6, 1],
                        outputRange: ['-90deg', '-45deg', '0deg'],
                      }),
                    },
                    {
                      scaleY: this.topLeftValue.interpolate({
                        inputRange: [0, 0.8, 0.9, 1],
                        outputRange: [1, 1.5, 1.5, 1],
                      }),
                    },
                  ],
                  opacity: this.topLeftValue,
                  zIndex: -1,
                },
              ]}
            >
              <TouchableOpacity onPress={goToCreateMusicVoteTrackRoom}>
                <FAwesomeIcon name="headphones" size={20} color="#FFF" />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={[
                style.smallBubble,
                {
                  position: 'absolute',
                  transform: [
                    {
                      translateX: this.topCenterValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [center.left, topCenter.left],
                      }),
                    },
                    {
                      translateY: this.topCenterValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [center.top, topCenter.top],
                      }),
                    },
                    {
                      scaleY: this.topCenterValue.interpolate({
                        inputRange: [0, 0.8, 0.9, 1],
                        outputRange: [1, 1.5, 1.5, 1],
                      }),
                    },
                  ],
                  opacity: this.topCenterValue,
                  zIndex: -1,
                },
              ]}
            >
              <TouchableOpacity onPress={goToCreateMusicVoteTrackRoom}>
                <FAwesomeIcon name="list-ol" size={20} color="#FFF" />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={[
                style.smallBubble,
                {
                  position: 'absolute',
                  transform: [
                    {
                      translateX: this.topRightValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [center.left, topRight.left],
                      }),
                    },
                    {
                      translateY: this.topRightValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [center.top, topRight.top],
                      }),
                    },
                    {
                      rotateZ: this.topRightValue.interpolate({
                        inputRange: [0, 0.6, 1],
                        outputRange: ['90deg', '45deg', '0deg'],
                      }),
                    },
                    {
                      scaleY: this.topRightValue.interpolate({
                        inputRange: [0, 0.8, 0.9, 1],
                        outputRange: [1, 1.5, 1.5, 1],
                      }),
                    },
                  ],
                  opacity: this.topRightValue,
                  zIndex: -1,
                },
              ]}
            >
              <TouchableOpacity onPress={goToCreatePlayListEditorRoom}>
                <FAwesomeIcon name="music" size={20} color="#FFF" />
              </TouchableOpacity>
            </Animated.View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

AddButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(AddButton);
