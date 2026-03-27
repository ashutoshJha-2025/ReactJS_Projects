import { useEffect, useState } from "react"
import Card from "../components/Card"

function Home() {
    const [products, setProducts] = useState([])
    const colors = ['#B5C0DE', '#FF1F3A', '#2A98F7', '#774FFF']

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log("something went wrong\n", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="w-full h-auto p-10 flex flex-wrap gap-5">
                {
                    products.map((item, index) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating.rate}
                            img={item.image}
                            color={colors[index % colors.length]}
                        />
                    ))}
            </div>
        </>
    )
}

export default Home