/* eslint-disable no-unused-vars */

import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQty, increaseItemQty } from './cartSlice'

/* eslint-disable react/prop-types */
export default function UpdateItemQty({ pizzaId, currentQty }) {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQty(pizzaId))}
            >
                -
            </Button>
            <span className="text-sm font-medium">{currentQty}</span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQty(pizzaId))}
            >
                +
            </Button>
        </div>
    )
}
