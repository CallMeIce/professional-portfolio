import React from 'react'
import Me from '../images/picture-of-me.JPG'

const styles = {
  aboutStyle: {
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  },
  imageStyle: {
    width: '19%',
    borderRadius: 40,
  }



};


export default function About() {
  return (
    <div style={styles.aboutStyle}> 
    <p>A graduate from Lincoln Technical Institute with a diploma in Automotive Technology who later found out</p>
    <p>that he wanted a career change and decided to pursue Full-Stack Web Development with a programming</p>
    <p>bootcamp through UPenn. I still have my passion in cars but would like to keep that as a hobby. </p>
    <p>Favorite car of all time would have to be a 98-02 Pontiac Firebird WS6.</p>
    <p>Some technical skills I have acquired are: HTML, CSS, Javascript, Bootstrap, Jquery, Nodejs, React, Express, and Git.</p>
    <img style={styles.imageStyle} src={Me} alt='Me' />
    </div>
  )
}