import { TouchableOpacity } from 'react-native';
import { ChatTeardrop } from 'phosphor-react-native'

import { styles } from './styles';
import { theme } from '../../theme';
import React = require('react-native/node_modules/@types/react');

export function Widget() {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <ChatTeardrop
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
    </>
  )
}