import React, {ChangeEvent, ChangeEventHandler} from 'react';

type InputType={
    title: string
    setTitle: (title: string)=> void
}

export const Input = (props: InputType) => {

    const onChangeInputHandler=(event: ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={event => onChangeInputHandler(event)}/>
        </div>
    );
};

