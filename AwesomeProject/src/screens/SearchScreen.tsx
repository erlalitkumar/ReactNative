import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

interface IState {}

interface IProps {}

class SearchScreen extends React.Component<IProps, IState> {
  state = {
    search: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={search => this.setState({search})}
          style={styles.searchBar}
        />
        <TouchableOpacity
          style={{marginStart: 16, marginTop: 16}}
          onPress={() => {
            console.log(this.state.search);
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mapStateToProps(state: IState) {
  return {};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mapDispatchToProps(dispatch: {
  (arg0: {type: string}): void;
  (arg0: {type: string}): void;
}) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen);
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'flex-start',
    height: '100%',
  },
  searchBar: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontSize: 24,
    marginStart: 16,
    marginTop: 56,
    width: '70%',
    height: 50,
    backgroundColor: 'white',
  },
  itemText: {
    margin: 10,
    color: 'white',
    fontSize: 24,
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
  },
  button: {
    marginStart: 16,
  },
});
