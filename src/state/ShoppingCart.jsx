import { useState } from "react"

// Sharing state between components
export const ShoppingCart = () => {

    const [cartItems, setCartItems] = useState({
        yoyo: 0,
        trompo: 0
    })

    const prices = {
        yoyo: 49.90,
        trompo: 79.90
    }

    const handleAddYoyo = () => {
        setCartItems({
            ...cartItems,
            yoyo: cartItems.yoyo + 1
        })
    }

    const handleAddTrompo = () => {
        setCartItems({
            ...cartItems,
            trompo: cartItems.trompo + 1
        })
    }

    const clearCart = () => {
        setCartItems({
            yoyo: 0,
            trompo: 0
        })
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ProductCard
                name= "Yoyo"
                price={prices.yoyo}
                quantity={cartItems.yoyo}
                onAddToCart={handleAddYoyo}
            ></ProductCard>
            <ProductCard
                name= "Trompo"
                price={prices.trompo}
                quantity={cartItems.trompo}
                onAddToCart={handleAddTrompo}
            ></ProductCard>
            <CartSummary cartItems={cartItems} prices={prices}></CartSummary>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}

export const ProductCard = ({name, price, quantity, onAddToCart}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
    )
}

export const CartSummary = ({cartItems, prices}) => {
    const totalItems = cartItems.yoyo + cartItems.trompo
    const totalPrice = cartItems.yoyo * prices.yoyo + cartItems.trompo * prices.trompo

    return (
        <div>
            <h3>Cart Summary</h3>
            <p>Total items: {totalItems}</p>
            <p>Total price: ${totalPrice.toFixed(2)}</p>
        </div>
    )
}