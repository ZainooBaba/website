import React from 'react';
import './Careers.css';

import background from '../../assets/careers/bkgrd.svg';
import graphic from '../../assets/careers/grfk.svg';
import icon from '../../assets/careers/icon.svg';

export function Careers(){
    return(
        <div style={{marginTop:100}}>
            <div style={{display: "flex", height: '400px'}}>
              <div className='bufferSizeZone' />
                <div style={{flex:1, height: '400px', position:'relative'}}>
                    <img src={background} style={{width:"100%", position:"absolute", top:0,left:0}}/>
                    <div style={{width:"100%", position:"absolute", top:'6.8%',left:0}}>
                        <h2 className={'text'} style={{textAlign:'center', position:"relative",left:'1%'}}>Careers</h2>
                    </div>
                    <div style={{justifyContent:'center', width:"100%", position:"absolute", top:'45%',left:'50.5%'}}>
                        <ContentBox/>
                    </div>
                    <div style={{justifyContent:'center', width:"100%", position:"absolute", top:'35%',right:'21.5%'}}>
                        <div>
                            <img src={icon} alt={"hero"}/>
                        </div>
                    </div>
                    {/*<div style={{justifyContent:'center', width:"100%", position:"absolute", left:'500',bottom:'200'}}>*/}
                    {/*    <div>*/}
                    {/*        <img src={graphic} alt={"hero"}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
              <div className='bufferSizeZone' />
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
            <input type={"button"} className={"SecondaryButton actionButton"} value={"See Open Position"}/>
        </div>
        </div>
    )
}