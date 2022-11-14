import * as React from 'react';
import {useState} from 'react'; 


type Props = {}

const Footer = (props: Props) => {
    const today = new Date();


  return (
    <div className="typography">Copyright &copy; {today.getFullYear()} </div>
  )
}

export default Footer;