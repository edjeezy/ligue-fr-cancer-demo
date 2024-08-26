import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { StyleSheet } from 'react-native';

import PROMPT from '@/data/prompt';
import { ChatCompletion } from 'openai/resources';
import openAiClient from '@/aiConfig';

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
    console.log('sending prompt');
    
    const prompt = messages[0].text;
    const history = toChatArray(messages);
    const response: ChatCompletion = await openAiClient.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: PROMPT },
        ...history
      ]
    });
    const aiResponse: string = response.choices[0]?.message?.content!;
    console.log(aiResponse);
    
    const id = response?.id;
    
    setMessages(previousMessages => GiftedChat.append(previousMessages, [
        {
          _id: id,
          // set the text of the message from AI response
          text: aiResponse,
          createdAt: new Date(),  
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://gravatar.com/avatar/4a3d54b7d4a20c101776e8de28ab4566?s=400&d=robohash&r=x',
          },
        },
    ]))
  }

  const toChatArray = (messages: IMessage[]): { role: "user" | "assistant", content: string}[] => {
    console.log();
    
    return messages.map((message) => {
      return { role: message.user._id === 1 ? "user" : "assistant", content: message.text }
    })
  };

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