import React, { useEffect, useState } from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { db } from '../../firebase';
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';


interface Messages {
    timestamp: Timestamp;
    message: string;
    user: {
        userId: string;
        image: string;
        email: string;
        displayName: string;
    };
}

function Chat() {
    const channelName = useAppSelector((state) => state.channel.channelName);
    const channelId = useAppSelector((state) => state.channel.channelId);
    const user = useAppSelector((state) => state.user.user);

    const [inputText, setInputText] = useState<string>("");
    const [messages, setMessages] = useState<Messages[]>([]);


    useEffect(() => {
        let collectionRef = collection(db, "channels", String(channelId), "messages");
        onSnapshot(collectionRef, (snapshot) => {
            let messageData: Messages[] = [];

            // 登録されたmessage情報の取得
            snapshot.docs.forEach((doc) => {
                messageData.push({
                    timestamp: doc.data().timestamp,
                    message: doc.data().message,
                    user: doc.data().user,
                });
            });
            setMessages(messageData);
        });
    }, [channelId]);

    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // firebaseのchannelコレクション内のmessagesコレクションにメッセージ情報を入れる
        const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");
        const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
            timestamp: serverTimestamp(),
            message: inputText,
            user: user
        });
        console.log(docRef);

    }

    return (
        <div className='chat'>
            {/* chatHeader */}
            <ChatHeader channelName={channelName} />
            {/* chatMessage */}
            <div className='chatMessage'>
                {messages.map((message, index) => (
                    <ChatMessage
                        key={index}
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                    />
                ))}
            </div>
            {/* chatInput */}
            <div className='chatInput'>
                <AddCircleOutlineIcon />
                <form>
                    {/* ここに入力されたテキストをfirebaseのmessagesコレクションに保存して表示させる */}
                    <input type="text" placeholder='#筋トレへメッセージを送信'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                    />
                    <button type='submit' className='chatInputButton'
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}
                    >
                        送信
                    </button>
                </form>
                <div className='chatInputIcons'>
                    <CardGiftcardIcon />
                    <GifIcon />
                    <SentimentVerySatisfiedIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat