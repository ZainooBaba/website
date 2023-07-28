import React from 'react';
import './Careers.css';

import icon from '../../assets/careers/icon.svg';

const JOB_LINK = 'https://www.linkedin.com/company/code-fluent/jobs/';

export function Careers() {
    return (
      <>
        <h2 className="text caption">Careers</h2>
        <div className="flex-container">
          <div className="flex-col-50 flex-col flex-col-jv flex-col-jh">
            <img src={icon} alt={"hero"} className="CareersImg"/>
          </div>

          <div className="flex-col-50 flex-col flex-col-jv">
            <div className="CareersBox">
              <b1 className={'text'}>
                  Join us in building the next generation of tools that make spend management easier to use and more
                  engaging for our customers.
              </b1>
              <div style={{width:'fit-content'}}>
                <a href={JOB_LINK} className={"SecondaryButton actionButton"} target="_blank">{"See Open Positions"}</a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}