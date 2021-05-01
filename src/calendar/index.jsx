import React, {useState, useEffect}from "react";
import "./styles.css";
import buildCalendar from "./build";
import { Table, Popup } from 'semantic-ui-react'
import dayStyles, { beforeToday} from "./styles.js";
import Header from "./header";


export default function Calendar({ value, onChange }) {
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
     setCalendar(buildCalendar(value));
}, [value]);



    return <div className="calendar">
        <Header value={value} setValue={onChange}/>
        <Popup content={
        <Table>
            <div className="day-names">{
                ["s", "m", "t", "w", "t", "f", "s"].map((d) =>(<div className="week">{d}</div>) )
            }</div>
            {calendar.map(week => <div>{
                week.map(day =>
                     <div className="day"
                onClick={() => !beforeToday(day) && onChange(day)}>
                <div
                    className={dayStyles(day, value)}>
                    {day.format("D").toString()}
                    </div>
                    
                </div>)
                }
                </div>)
                
        }</Table> } trigger={calendar}/>
        </div>;
}