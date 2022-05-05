import { StyleSheet } from 'react-native';
import { GUTTER_WIDTH, TEXT_CORRECTION } from '../../config/constants';

export default StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 42,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },

  toolbarTitleContainer: {
    width: '80%',
    alignItems: 'center',
  },

  closeButton: {
    width: '20%',
    paddingLeft: '5%',
  },

  toolbarConfirmText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 0,
    paddingRight: GUTTER_WIDTH,
    paddingBottom: TEXT_CORRECTION,
    paddingLeft: 0,
  },
});
