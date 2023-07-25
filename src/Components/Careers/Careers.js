import React from 'react';
import './Careers.css';

import background from '../../assets/careers/bkgrd.svg';
import icon from '../../assets/careers/icon.svg';

const JOB_LINK = 'https://www.linkedin.com/company/code-fluent/jobs/';

export function Careers(){
    return(
        <div style={{marginTop:100}}>
            <div style={{display: "flex", height: '400px'}}>

                <div style={{flex:1, height: '400px', position:'relative'}} className="centerIt">
                    <img src={background} style={{width:"100%", position:"absolute", top:0,left:0}}/>
                    <div style={{width:"100%", position:"absolute", top:'6.8%',left:0}}>
                        <h2 className={'text'} style={{textAlign:'center', position:"relative",left:'1%'}}>Careers</h2>
                    </div>

                    <div style={{justifyContent:'center', width:"100%", position:"absolute", top:'35%',right:'21.5%'}}>
                      <img src={icon} alt={"hero"}/>
                    </div>

                    <div style={{justifyContent:'center', width:"100%", position:"absolute", top:'45%',left:'50.5%'}}>
                      <ContentBox/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContentBox(){
    return(
        <div style={{width:309}}>
            <b1 className={'text'}>
                Join us to help build the next-generation platform that makes procurement easy for everyone in the mix.
            </b1>
            <div style={{width:'fit-content'}}>
              <a href={JOB_LINK} className={"SecondaryButton actionButton"} target="_blank">{"See Open Position"}</a>
            </div>
        </div>
    )
}