export const ProductList = () => {

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 1799
        },
        {
            id: 2,
            name: "Playstation",
            price: 749
        },
        {
            id: 3,
            name: "Phone",
            price: 999
        }
    ]

    const productElements =  products.map((product) => {
        return(
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Our Products</h2>
            {
                productElements
            }
        </div>
    )
}