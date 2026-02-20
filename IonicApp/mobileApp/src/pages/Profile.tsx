import {
  IonPage, IonContent, IonAvatar, IonButton
} from "@ionic/react";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">

        <IonAvatar style={{margin:"auto", width:"120px", height:"120px"}}>
          <img src="https://i.pravatar.cc/150" alt="avatar"/>
        </IonAvatar>

        <h2>Gaurav Negi</h2>
        <p>Mobile App Developer</p>

        <IonButton expand="block">Edit Profile</IonButton>
        <IonButton expand="block" color="danger">Logout</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Profile;