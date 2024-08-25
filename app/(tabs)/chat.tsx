import React, { useState, useCallback, useEffect, useRef } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { StyleSheet, View } from 'react-native';
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";
import app from '../../firebaseConfig'; 
import {PROMPT} from '../../aiConfig.js'

const vertextAI = getVertexAI(app);
const model = getGenerativeModel(
  vertextAI, { 
    model: 'gemini-1.5-flash', 
    systemInstruction: PROMPT,
  }
);

export default function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[] | undefined>([])
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bonjour, je suis votre asssistant personnel. Comment puis-je vous aider ?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://gravatar.com/avatar/4a3d54b7d4a20c101776e8de28ab4566?s=400&d=robohash&r=x',
        },
      },
    ])
  }, [])

  const sendPrompt = async (messages: IMessage[]) => {
    const prompt = messages[0].text
    const result = await model.generateContent(messages.map(m => m.text));
    const text = result.response.text();
    
    setMessages(previousMessages => GiftedChat.append(previousMessages, [
        {
          _id: Math.random() * 1000,
          // set the text of the message from AI response
          text,
          createdAt: new Date(),
          
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://gravatar.com/avatar/4a3d54b7d4a20c101776e8de28ab4566?s=400&d=robohash&r=x',
          },
        },
    ]))
  }

  const onSend = useCallback(async (messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    await sendPrompt(messages);
  }, [])

  return (
      <GiftedChat
        messagesContainerStyle={styles.container}
        messages={messages}
        locale='fr'
        isTyping={true}
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