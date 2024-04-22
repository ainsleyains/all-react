/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'
import UpdateItemQty from './UpdateItemQty'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentQtyById } from './cartSlice'

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item

    const currentQty = useSelector(getCurrentQtyById(pizzaId))

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <UpdateItemQty pizzaId={pizzaId} currentQty={currentQty} />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
