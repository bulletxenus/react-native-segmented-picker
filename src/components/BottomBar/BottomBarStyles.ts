import { StyleSheet } from 'react-native';
import { GUTTER_WIDTH, TEXT_CORRECTION } from '../../config/constants';

export default StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderTopWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  toolbarConfirmContainer: {
    width: '100%',
    alignItems: 'center',
  },

  toolbarConfirmText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
