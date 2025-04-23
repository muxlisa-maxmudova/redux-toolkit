import React from 'react'
import {useGetAllProductQuery, useGetProductByIdQuery} from "./app/service/dummydata.js";

const AllProducts = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(1)
    console.log(useGetProductByIdQuery(1))
    if (isError){
      return <h1>ERROR</h1>
    }
    if (isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div>

                <div>{data?.title}</div>

        </div>
    )
}
export default AllProducts
