import { useEffect, useState } from "react";
import { DocumentData, collection, onSnapshot, query, QueryDocumentSnapshot, orderBy, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAppSelector } from "../app/hooks";


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

function useSubCollection(collectionName: string, subCollectionName: string) {
    const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
    const channelId = useAppSelector((state) => state.channel.channelId);


    useEffect(() => {
        let collectionRef = collection(
            db,
            collectionName,
            String(channelId),
            subCollectionName
        );

        const collectionRefOrder = query(collectionRef, orderBy("Timestamp", "asc"));

        onSnapshot(collectionRefOrder, (snapshot) => {
            let messageData: Messages[] = [];

            // 登録されたmessage情報の取得
            snapshot.docs.forEach((doc) => {
                messageData.push({
                    timestamp: doc.data().Timestamp,
                    message: doc.data().message,
                    user: doc.data().user,
                });
            });
            setSubDocuments(messageData);
        });
    }, [channelId]);

    return { subDocuments };
}

export default useSubCollection