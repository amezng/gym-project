import React from 'react';
import { Carousel, Button, Image, Tabs } from "antd";
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styles from './styles/DazkoFitnessSchedules.module.css'


const DazkoFitnessSchedules = () => {
    const scheduleTableDay = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "	Sunday",]


    const timesSchedule = [{
        times: ["8am-9am", "10am-11am", "1pm-2am", "3pm-5pm", "7pm-9pm",],
        monday: ["Body Building", "Weight Lifting", "", "Aerobics", "Body Building",],
        tuesday: ["Weight Lifting", "Body Building", "Weight Lifting", "Weight Lifting", "Weight Lifting",],
        wed: ["", "Cardio", "Cardio", "Cardio", "Cardio",],
        thu: ["Yoga", "Yoga", "Yoga", "Yoga", "",],
        fri: ["Aerobics", "Aerobics", "Aerobics", "Body Building", "Aerobics",],
        sat: ["Cycling", "Cycling", "Cycling", "", "Cycling",],
        sun: ["Stretching", "Stretching", "Stretching", "Stretching", "Stretching",],
    }]
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.headerContent}>
                <h4>SCHEDULES</h4>
                <h1>FITNESS <span>SCHEDULES</span></h1>

            </div>
            <div >
                {scheduleTableDay.map((day, i) => {
                    return (
                        <div key={i}>
                            {day}
                        </div>
                    )
                })}
            </div>

            {timesSchedule.map((time, i) => {
                return (
                    <div key={i}>
                        <div>
                            {time.times.map((time, i) => {
                                return (
                                    <div className={styles.timeRow} key={i}>
                                        {time}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {time.monday.map((mon, i) => {
                                return (
                                    <div key={i}>
                                        {mon}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {time.tuesday.map((tue, i) => {
                                return (
                                    <div className={styles.tueThuSatRow} key={i}>
                                        {tue}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {time.wed.map((wed, i) => {
                                return (
                                    <div key={i}>
                                        {wed}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {time.thu.map((thu, i) => {
                                return (
                                    <div className={styles.tueThuSatRow} key={i}>
                                        {thu}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {time.fri.map((fri, i) => {
                                return (
                                    <div key={i}>
                                        {fri}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {time.sat.map((sat, i) => {
                                return (
                                    <div className={styles.tueThuSatRow} key={i}>
                                        {sat}
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {time.sun.map((sun, i) => {
                                return (
                                    <div key={i}>
                                        {sun}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

        </section>
    )
}
export default DazkoFitnessSchedules;