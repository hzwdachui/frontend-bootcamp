import React from 'react';
import { Store } from '../store';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { loadTheme } from 'office-ui-fabric-react';

loadTheme({
  palette: {
    themePrimary: '#045b91',
    themeLighterAlt: '#f1f7fb',
    themeLighter: '#c9dfed',
    themeLight: '#9dc5de',
    themeTertiary: '#4f93bd',
    themeSecondary: '#176b9f',
    themeDarkAlt: '#045283',
    themeDark: '#03456e',
    themeDarker: '#023351',
    neutralLighterAlt: '#afe1e9',
    neutralLighter: '#acdee5',
    neutralLight: '#a5d5dc',
    neutralQuaternaryAlt: '#9ac6cd',
    neutralQuaternary: '#93bdc4',
    neutralTertiaryAlt: '#8db6bc',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#b4e8f0'
  }
});

interface TodoFooterProps {
  clear: () => void;
  todos: Store['todos'];
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  // TODO: play around with the DefaultButton component below with a "styles" prop
  // - try it with an object: styles={{ ... }}
  // - try it with a function: styles={props => ({ ... })}
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => props.clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};
