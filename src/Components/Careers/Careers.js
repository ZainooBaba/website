import React, {useState} from 'react';
import './Careers.css';

import icon from '../../assets/careers/icon.svg';
import bgCareers from "../../assets/careers/bkgrd.svg";
import bgCareers2 from "../../assets/careers/bkgMob.svg";

const JOB_LINK = 'https://www.linkedin.com/company/code-fluent/jobs/';

export function Careers() {

    const breakpoints = 690;
    const [isMobile, setMobile] =  useState(window.innerWidth < breakpoints);


    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setMobile(window.innerWidth < breakpoints));

    }, []);

    return (
      <>
          <img src = {isMobile? bgCareers2:bgCareers} className="CarrerImage" style={{width:'100%', height:'100%', maxWidth:'auto', maxHeight:'auto', zIndex: -1, position: "absolute", left:0}}/>
        <h2 className="text caption">Careers</h2>
        <div className="flex-container" style={{minHeight: 'fit-content', flexWrap: 'wrap'}}>
          <div className="flex-col-50 flex-col flex-col-jv flex-col-jh CareersCont">
            <img src={icon} alt={"hero"} className="CareersImg"/>
          </div>

          <div className="flex-col-50 flex-col flex-col-jv CareersCont">
            <div className="CareersBox">
              <b1 className={'text'}>
                  Join us in building the next generation of tools that make spend management easier to use and more
                  engaging for our customers.
              </b1>
              <div className='buttonContainer'>
                <a href={JOB_LINK} className={"SecondaryButton actionButton"} target="_blank">{"See Open Positions"}</a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}