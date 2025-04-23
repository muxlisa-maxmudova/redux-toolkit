import React from 'react'
import {useGetAllProductQuery} from "./app/service/dummydata.js";

const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductQuery()
    if (isError){
      return <h1>ERROR</h1>
    }
    if (isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {data?.products.map((product) => (
                <div key={product.id}>{product.title}</div>
            ))}
        </div>
    )
}
export default AllProducts
