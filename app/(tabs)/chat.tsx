import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { StyleSheet, View } from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[] | undefined>([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://gravatar.com/avatar/4a3d54b7d4a20c101776e8de28ab4566?s=400&d=robohash&r=x',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
      <GiftedChat
        messagesContainerStyle={styles.container}
        messages={messages}
        locale='fr'
        dateFormat='DD/MM/YYYY'
        timeFormat='HH:mm'
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3E0',
  }
})