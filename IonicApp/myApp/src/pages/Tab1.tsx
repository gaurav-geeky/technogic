import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 Android/Material Design </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {/* Collapsible header */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Large Title On iOS mode → it collapses smoothly.</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ height: "2000px" }}>
          {/* Scroll content */}
          <p>Line 1</p> 
          <p>Line 2</p> 
          <p>Line 3</p> 
          <p>Line 4</p> 
          <p>Line 5</p> 
          <p>Line 6</p> 
          <p>Line 7</p> 
          <p>Line 8</p> 
          <p>Line 9</p> 
          <p>Line 10</p> 
          <p>Line 11</p> 
          <p>Line 12</p> 

        </div>

      </IonContent>
    </IonPage>

  );
};

export default Tab1;
