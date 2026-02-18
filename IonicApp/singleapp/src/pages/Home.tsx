import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank upper header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank lower header</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ height: "1000px"}}>
          <p> first </p>
          <p> second </p>
          <p> third </p>
          <p> 4 </p>
          <p> 5 </p>
          <p> 6 </p>
          <p> first </p>
          <p> 9 </p>
          <p> first </p>
          <p> 77 </p>
          <p> first </p>
          <p> 95 </p>
          <p> last </p>
          <p> 364 </p>
          <p> 95 </p>
        </div>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
