import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmiControls: React.FC<{
    onCalculate: () => void; 
    onReset: () => void}> = props => {
    return(
        <IonRow className="ion-text-left">
        <IonCol>
          <IonButton onClick={props.onCalculate}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton fill="outline" onClick={props.onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton> 
        </IonCol>
      </IonRow>
    );
}

export default BmiControls;