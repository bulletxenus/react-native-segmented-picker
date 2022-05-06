import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './BottomBarStyles';
import { TEST_IDS } from '../../config/constants';

interface Props {
  confirmText: string;
  toolbarBackground: string;
  toolbarBorderColor: string;
  onConfirm: () => void;
  onClose: () => void;

}

/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default ({
  confirmText,
  toolbarBackground,
  toolbarBorderColor,
  onConfirm,
}: Props): ReactElement => (
  <View
    style={[
      styles.toolbarContainer,
      {
        backgroundColor: toolbarBackground,
        borderColor: toolbarBorderColor,
      },
    ]}
  >
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onConfirm}
      testID={TEST_IDS.CONFIRM_BUTTON}
      style={[styles.toolbarConfirmContainer]}
    >
      <Text style={[styles.toolbarConfirmText, { color: '#5f85bc' }]}>
        {confirmText}
      </Text>
    </TouchableOpacity>
  </View>
);
