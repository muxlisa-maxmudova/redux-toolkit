import React from 'react'
import {useAddNewProductMutation} from "./app/service/dummydata.js";

const AddingProducts = () => {
     const [addNewProducts, { data, isError, isLoading }] = // as well as spreading
            useAddNewProductMutation()
     if (isError) {
         return <h1>Error</h1>
     }
     if (isLoading) {
         return <h1>Loading...</h1>
     }
     const handleAddProduct = async () => {
         try {
             const newProductData = {
                 id: 1,
                 title: "Amazing T-Shirt",
                 description:
                     "This one is one of the best item you can find in our e-market",
             };
             await addNewProducts(newProductData)
         } catch (error) {
             console.error("Error adding new product", error);
         }
     }
    return (
        <div>
                    {data?.id})<h1>{data?.title}</h1>
                    <h1>{data?.description}</h1>
            <button onClick={handleAddProduct}>Add Product
                Add Product
            </button>
        </div>
    )
}
export default AddingProducts
