import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import '../styles/card.css';

class Card extends React.Component {
    state = {
        quote: 'Education is not the learning of facts, but the training of the mind to think',
        author: 'Albert Einstein',
        title: `Today's quote`
    }

    render() {

        return (

            <IonCard className='card'>
                <IonCardHeader>
                    <IonCardTitle className="text">{this.state.title}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent className="quote text">
                    "{this.state.quote}"
                    </IonCardContent>
                <IonCardSubtitle className="author text">{this.state.author}</IonCardSubtitle>
            </IonCard>

        )
    }

}

export default Card
