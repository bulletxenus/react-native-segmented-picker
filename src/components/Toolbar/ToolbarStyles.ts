import { StyleSheet } from 'react-native';
import { GUTTER_WIDTH, TEXT_CORRECTION } from '../../config/constants';

export default StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 42,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
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
    fontSize: 15,
  },
});
