import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
  GUTTER_WIDTH,
  GUTTER_HEIGHT,
  ITEM_HEIGHTS,
  TEXT_CORRECTION,
} from '../../config/constants';

const ITEM_HEIGHT = Platform.select(ITEM_HEIGHTS);

export default StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    flexDirection: 'column',
    padding: '8%',
  },

  closeableContainer: {
    flex: 1,
    width: '100%',
  },

  pickerContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },

  selectableArea: {
    flex: 1,
    alignSelf: 'stretch',
  },

  pickerColumns: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: GUTTER_HEIGHT * 2.2,
    paddingRight: 0,
    paddingBottom: GUTTER_HEIGHT,
    paddingLeft: GUTTER_WIDTH,
  },

  pickerColumn: {
    flex: 1,
    marginRight: 12,
    position: 'relative',
  },

  pickerList: {
    width: '100%',
    height: 'auto',
    alignItems: 'flex-start',
  },

  pickerItem: {
    width: '100%',
    height: ITEM_HEIGHT,
  },

  pickerItemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingRight: 0,
    paddingBottom: TEXT_CORRECTION + 5,
    paddingLeft: 0,
    textAlign: 'center',
  },

  nativePickerContainer: {
    width: Dimensions.get('window').width - (GUTTER_WIDTH * 2),
    height: '100%',
    marginLeft: GUTTER_WIDTH,
  },

  nativePicker: {
    width: '100%',
    height: '100%',
  },
});
