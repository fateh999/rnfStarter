import React from 'react';
import {Appbar, Headline} from 'react-native-paper';
import {StackHeaderProps} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {useActiveTheme} from 'rnfui';
import {StyleSheet} from 'react-native';

function AppHeader(props: StackHeaderProps) {
  const {goBack, styles, headerTitle} = useAppHeader(props);

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack}></Appbar.BackAction>
      <Appbar.Content
        title={
          <Headline style={styles.titleStyle}>{headerTitle}</Headline>
        }></Appbar.Content>
    </Appbar.Header>
  );
}

function useAppHeader({scene, navigation}: StackHeaderProps) {
  const headerTitle = scene.descriptor.options.headerTitle;
  const Theme = useActiveTheme();

  const styles = StyleSheet.create({
    titleStyle: {
      color: Theme.color.white,
    },
  });

  const goBack = () => {
    navigation.pop();
  };

  return {
    headerTitle,
    styles,
    goBack,
  };
}

export default AppHeader;
