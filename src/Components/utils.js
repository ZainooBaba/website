import React from 'react';
import './utils.css';
export function PrimaryButton(props) {
    return (
        <button className={'PrimaryButton'} style={props.style} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function SecondaryButton(props) {
    return (
        <button className={'SecondaryButton'} style={props.style} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function TextPrompt(props) {
    return (
        <input type="text" className={'textPrompt'} value={props.value} placeholder={props.placeholder}
               style={props.style} onInput={props.onInput}/>
    )
}

export function ParagraphPrompt(props) {
    return (
        <div className="wrapper">
            <textarea cols={4} className={'paragraphPrompt'}  value={props.value} placeholder={props.placeholder}
                      style={props.style}/>
        </div>
    )
}

