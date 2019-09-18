import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import Card from '../components/Card.jsx';
import '../styles/global.css';
import MdHeart from 'react-ionicons/lib/MdHeart';
import MdShare from 'react-ionicons/lib/MdShare';
import axios from 'axios';
import MdChatbubbles from 'react-ionicons/lib/MdChatbubbles';

class Home extends React.Component {
  state = {
    quotes: []
  }

  // UNSAFE_componentWillMount() {
  //   axios.get(`${process.env.REACT_APP_API}/reviews/${this.props.match.params.id}`)
  //     .then(res => {

  //       // this.setState({
  //       //   quotes: res.data,
  //       // })
  //       console.log(res.data)
  //     })
  //     .catch(err => { console.log(err) })
  // }


  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle style={{ textAlign: "center" }}>Quotes App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>

          <Card />
          <div className="icons">
            <MdHeart className="icon" />

            <MdChatbubbles className="icon"  />
            <MdShare className="icon" />
          </div>
        </IonContent>


      </IonPage>
    )
  }

}

export default Home
