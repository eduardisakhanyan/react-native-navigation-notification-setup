import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 40,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginLeft: 3,
    fontSize: 16,
    fontWeight: '700',
    color: '#500004',
  },
});
