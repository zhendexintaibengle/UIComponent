import React from 'react'
import classnames from 'classnames'
import { Select } from "@tencent/tea-component/lib/select"
import { Input } from "@tencent/tea-component/lib/input"
import { Radio } from "@tencent/tea-component/lib/radio"
import '../css/component.css'

export default function Form(props) {
    const { option } = props
    // const []

    const Functionui = value => {
        if (value.type === 'input') {
            return <Input size={props.size} />
        }
        if (value.type === 'select') {
            return <Select options={value.group} size={props.size} />
        }
        if (value.type === 'radio') {
            return <Radio.Group>
                {value.group.map(i => (<Radio key={i.value} name={i.value}>{i.text}</Radio>))}
            </Radio.Group>
        }
    }


    const SubUI = option ?.map(v => <div  className='form' key={v.label}>
        <div className='left'><p>{v.label}</p></div>
        <div className='right'>{Functionui(v)}</div>
    </div>)
    return (
        <div>
           {SubUI}
        </div>
    )
}