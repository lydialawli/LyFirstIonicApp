import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import Card from '../components/Card.jsx';
import '../styles/global.css';
import MdHeart from 'react-ionicons/lib/MdHeart';
import MdShare from 'react-ionicons/lib/MdShare';
import MdChatbubbles from 'react-ionicons/lib/MdChatbubbles';

class Home extends React.Component {
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Quotes App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid>
            <IonCol class="ion-align-items-center" size="6">
              <Card />
              <IonRow class="ion-align-items-end">
                <MdHeart fontSize="30px" color="black" />
                <MdChatbubbles fontSize="30px" color="black" />
                <MdShare fontSize="30px" color="black" />
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonContent>


      </IonPage>
    )
  }

}

export default Home
