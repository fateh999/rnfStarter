import React from 'react';
import {Appbar, Headline, useTheme} from 'react-native-paper';
import {StackHeaderProps} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import {useActiveTheme} from 'rnfui';
import {StyleSheet} from 'react-native';

function AppHeaderMain({scene}: StackHeaderProps) {
  const headerTitle = scene.descriptor.options.headerTitle;
  const Theme = useActiveTheme();

  const styles = StyleSheet.create({
    titleStyle: {
      color: Theme.color.white,
    },
  });

  return (
    <Appbar.Header>
      <Appbar.Action icon={'menu'} onPress={() => {}}></Appbar.Action>
      <Appbar.Content
        title={
          <Headline style={styles.titleStyle}>{headerTitle}</Headline>
        }></Appbar.Content>
    </Appbar.Header>
  );
}

export default AppHeaderMain;
