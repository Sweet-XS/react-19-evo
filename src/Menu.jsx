import { MenuItem } from "./MenuItem"

export const Menu = () => {
    
    const handleOrder = (itemName, itemPrice) => {
        alert(`You ordered: ${itemName} for ${itemPrice}`)
    }
    
    return (
        <div>
            <h2>Our Menu</h2>
            <MenuItem name="Pizza" price={14} onOrder={handleOrder}></MenuItem>
            <MenuItem name="Takoyaki" price={8} onOrder={handleOrder}></MenuItem>
            <MenuItem name="Sushi" price={11} onOrder={handleOrder}></MenuItem>
        </div>
    )    
}