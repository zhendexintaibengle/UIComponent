import React from 'react'
import classnames from 'classnames'
import '../css/component.css'

export default function Button(props) {
    return (
        <button style={{ ...props.style }}
            onClick={props.onClick}
            className={classnames({
                'my-button-p': (!props.type || props.type === 'primary') && !props.disabled,
                'my-button-w': (props.type === 'weak') && !props.disabled,
                'my-button-disabled': props.disabled
            }, props.className)}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    )
}