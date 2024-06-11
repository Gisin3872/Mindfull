import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import moment from 'moment';

const Item = ({ id, feeling, timestamp }) => {
const formattedTimestamp = moment(timestamp).format('MM-DD-YYYY');
  
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('EntryDetail', { id: id })}>
          <Text style={styles.title}>Feeling: {feeling}</Text>
          <Text style={styles.date}>Date: {formattedTimestamp}</Text>
        </TouchableOpacity>
      );
    };

const PastEntries = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('http://node.cci.drexel.edu:9378/api/journals')
      .then(response => {
        setEntries(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const Item = ({ id, feeling, timestamp }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('EntryDetail', { id: id })}>
      <Text style={styles.title}> {feeling}</Text>
      <Text style={styles.date}> {timestamp}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item id={item.EntryId} feeling={item.Feeling} timestamp={item.Timestamp} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={item => item.EntryId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E0E1DD'
    },
    item: {
      borderBottomColor: '#778DA9',
      borderBottomWidth: 1,
      padding: 10
    },
    title: {
      color: '#1B263B',
      fontSize: 18,
      fontWeight: 'bold',
    },
    date: {
      color: '#778DA9',
      fontSize: 14
    }
  });

export default PastEntries;