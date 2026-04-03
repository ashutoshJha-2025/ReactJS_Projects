import { useEffect, useState } from "react"
import Card from "../components/Card"

function Home() {
    const [products, setProducts] = useState([])
    const colors = ['#B5C0DE', '#FF1F3A', '#2A98F7', '#774FFF']

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts(data.products)
        } catch (error) {
            console.log("something went wrong\n", error)
        }
    }
console.log(products)
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="w-full h-auto p-10 flex flex-wrap gap-5">

                {
                    products && products.length > 0 ? (
                        products.map((item, index) => (
                            <Card
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating.rate}
                                img={item.images[0]}
                                color={colors[index % colors.length]}
                            />
                        ))
                    ) : (
                        <h1 className="text-2xl font-bold text-(--accent)">Product Unavailable</h1>
                    )
                }

            </div>
        </>
    )
}

export default Home