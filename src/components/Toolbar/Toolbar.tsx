import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './ToolbarStyles';
import { TEST_IDS } from '../../config/constants';

interface Props {
  confirmText: string;
  titleText: string;
  confirmTextColor: string;
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
  titleText,
  confirmTextColor,
  toolbarBackground,
  toolbarBorderColor,
  onConfirm,
  onClose,
}: Props): ReactElement => (
  <View
    style={[
      styles.toolbarContainer,
      {
        backgroundColor: toolbarBackground,
        borderBottomColor: toolbarBorderColor,
      },
    ]}
  >
    <Text>
      color: {toolbarBackground}
    </Text>
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onClose}
      testID={TEST_IDS.CONFIRM_BUTTON}
      style={styles.closeButton}
    >
      <View>
        <Text style={[styles.toolbarConfirmText, { color: confirmTextColor, fontSize: 30 }]}>
          x
        </Text>
      </View>
    </TouchableOpacity>
    <View style={styles.toolbarTitleContainer}>
      <Text style={[styles.toolbarConfirmText, { color: confirmTextColor }]}>
        {titleText}
      </Text>
    </View>
  </View>
);
