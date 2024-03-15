import { useEffect, useState } from "react";
import { DocumentData, collection, onSnapshot, query, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../firebase";

interface Channels {
    id: string,
    channel: DocumentData;
}

function useCollection(data: string) {
    const [documents, setDocuments] = useState<Channels[]>([]);
    const [error, setError] = useState<string | null>(null);
    // このonSnapshotを使用する際にエラーが出たのでErrorBoundaryでエラーを確認
    useEffect(() => {
        const collectionRef = query(collection(db, data));

        const unsubscribe = onSnapshot(collectionRef, (querySnapShot) => {
            const channelsData: Channels[] = [];
            querySnapShot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
                channelsData.push({
                    id: doc.id,
                    channel: doc.data(),
                });
            });
            setDocuments(channelsData);
        }, (error) => {
            setError(error.message);
        });

        return () => unsubscribe(); //クリーンアップ
    }, [data]);

    return { documents, error };
}

export default useCollection