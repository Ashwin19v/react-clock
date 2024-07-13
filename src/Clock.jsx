import {useState,useEffect} from 'react'
import "./clock.css"

export const Clock = () => {
    const[currentTime,setCurrentTime]=useState(new Date());
    useEffect(()=>{
         const timer=setInterval(()=>{
            setCurrentTime(new Date());
         },1000);
         return ()=> clearInterval(timer);
    },[]);
   
    const formatTime=(num)=>{
        return num <10 ?  `0${num}`  :num;
    };

    const format=(hour)=>{
        return hour===0? 12 : hour>12?hour-12:hour;
    }

    const formatDate=(date)=>{
        const view={weekday : "long" , year : "numeric" , month : "long" , day : "numeric"};
        return date.toLocaleDateString(undefined,view);
    }
    
  return (
    <>
    <div className="clock">
        <h1>Digital-Clock</h1>
        <div className="time">
            {formatTime(format(currentTime.getHours()))}:
            {formatTime(currentTime.getMinutes())}:
            {formatTime(currentTime.getSeconds())}  {currentTime.getSeconds()>=12 ? "AM" : "PM" }

        </div>
        <div className="date">
            {formatDate(currentTime)}
        </div>
    </div>
    </>
  )
}
 