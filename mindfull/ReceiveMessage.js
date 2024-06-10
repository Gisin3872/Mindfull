import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import axios from 'axios';

export default function ReceiveMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios.get('http://node.cci.drexel.edu:9378/api/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(() => {
        Alert.alert('Error', 'Could not fetch messages');
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.messageText}>{item.content}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={fetchMessages}>
        <Text style={styles.buttonText}>Receive Messages</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    backgroundColor: '#1B263B',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    width: '80%',
  },
  messageText: {
    color: '#E0E1DD',
  },
  button: {
    backgroundColor: '#778DA9',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#0D1B2A',
  },
});
