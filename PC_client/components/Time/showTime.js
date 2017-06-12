import React from 'react';
import utils from '../../core/utils';

export default (props) => {
    let $dateTime = props.date;
    return <div className="showTime">
                            <span className="date">
                                {$dateTime.getDate() < 10 ? '0' : ''}{$dateTime.getDate()}
                            </span>
        <span className="monthAndYear">
                                {utils.returnMonthStringFormNumber($dateTime.getMonth() + 1)}月
            &nbsp;
            {$dateTime.getFullYear()}
                            </span>
        <span className="weekAndTime">
                                星期{utils.returnWeekStringFormNumber($dateTime.getDay())}
            &nbsp;{$dateTime.getHours() < 10 ? '0' : ''}{$dateTime.getHours()}:
            {$dateTime.getMinutes() < 10 ? '0' : ''}{$dateTime.getMinutes()}
                            </span>
    </div>;
};