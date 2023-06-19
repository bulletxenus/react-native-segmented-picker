import React, { ReactElement, ReactNode } from 'react';
import { View } from 'react-native';
import styles from './SelectionMarkerStyles';

interface Props {
  backgroundColor: string;
  borderColor: string;
  SelectionComponent?: ReactNode;
}

/**
 * Horizontal bar used to indicate the current picker selections.
 */
export default ({
  backgroundColor,
  borderColor,
  SelectionComponent,
}: Props): ReactElement => (
  <View style={styles.selectionMarkerContainer}>
    {SelectionComponent || (
    <>
      <View
        style={[
          styles.selectionMarkerBorder,
          { backgroundColor: borderColor },
        ]}
      />
      <View style={[styles.selectionMarker, { backgroundColor }]} />
      <View
        style={[
          styles.selectionMarkerBorder,
          { backgroundColor: borderColor },
        ]}
      />
    </>
    )}
  </View>
);
