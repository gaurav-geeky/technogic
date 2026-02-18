import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage, IonTitle } from '@ionic/react';

// 1️⃣ define props type
type Props = {
    name: string;
    email: string;
};

// 2️⃣ use props in component
const UserCard: React.FC<Props> = ({ name, email }) => {
    return (
        <IonPage>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Email: {email}
                </IonCardContent>
            </IonCard>
        
            <IonContent>
                <IonTitle> hello this is our usercard text </IonTitle>
            </IonContent>

        </IonPage>
    );
};

export default UserCard;
