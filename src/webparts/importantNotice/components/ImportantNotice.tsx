import * as React from 'react';
import Countdown from "react-countdown";
import styles from './ImportantNotice.module.scss';
import { IImportantNoticeProps } from './IImportantNoticeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ImportantNotice extends React.Component<IImportantNoticeProps, {}> {
  public render(): React.ReactElement<IImportantNoticeProps> {
    return (
     

<div className={styles.timer}>
        <div className={styles.timerText}>
            <p>

            {escape(this.props.description)}
            </p>
            </div>
            <div className={styles.timerValue}> 
      
      <Countdown date={Date.now() + 500000}/>
     
      </div>
      </div>
  
       
    );
  }
}
