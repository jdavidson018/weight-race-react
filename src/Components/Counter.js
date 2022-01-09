import { Button } from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/Slices/counterSlice';

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <Button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </Button>
                <span>{count}</span>
                <Button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </Button>
            </div>
        </div>
    )
}