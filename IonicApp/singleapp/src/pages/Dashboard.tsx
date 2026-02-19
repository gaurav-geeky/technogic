import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon
} from '@ionic/react';
import { personCircle, notifications, settings } from 'ionicons/icons';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    return (

        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="dashboard-content">

                {/* Profile Section */}
                <div className="profile-section">
                    <IonAvatar className="avatar">
                        <img src="https://i.pravatar.cc/150?img=12" alt="profile" />
                    </IonAvatar>

                    <h2>Welcome, Gaurav 👋</h2>
                    <p>Have a productive day!</p>
                </div>

                {/* Info Card */}
                <IonCard className="info-card">
                    <IonCardContent>
                        <h3>Your Activity</h3>
                        <p>You completed 5 tasks today 🎯</p>
                    </IonCardContent>
                </IonCard>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <IonButton expand="block">
                        <IonIcon slot="start" icon={notifications} />
                        Notifications
                    </IonButton>

                    <IonButton expand="block" color="medium">
                        <IonIcon slot="start" icon={settings} />
                        Settings
                    </IonButton>
                </div>

                <div className='center-content'>
                    {/* <div className='ion-display-flex ion-justify-content-center ion-align-items-center ion-flex-column '> */}
                    <p> dfkj </p>
                    <p> dkfueur </p>
                    <p> eutgf  3 </p>

                    <p> dfkj </p>
                    <p> g j fggj </p>
                    <p> rtywer 35 </p>

                    <p> gfre </p>
                    <p> dfe7 </p>
                    <p> 7dgdh </p>

                    <p> dfkj </p>
                    <p> dkfueur </p>
                    <p> eutgf  3 </p>

                    <p> dfkj </p>
                    <p> dkfueur </p>
                    <p> eutgf  3 </p>
                </div>

            </IonContent>


        </IonPage>
    );
};

export default Dashboard;
