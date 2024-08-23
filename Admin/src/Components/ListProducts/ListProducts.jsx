import React, { useEffect, useState } from "react";
import crossicon from "../../assets/cross_icon.png";

const ListProducts = () => {
  const [products, setproducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://hopifyecommerce.onrender.com/allProducts");
    console.log(response);
    let allproducts = await response.json();
    allproducts = allproducts.product;
    console.log(allproducts);
    setproducts(allproducts);
  };

  const deleteProduct = async (id) => {
    const response = await fetch('https://hopifyecommerce.onrender.com/deleteProducts',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({id:id})
    })
    console.log(response)

    if(!response.ok){
        throw console.error("Server Error");
        
    }
    await fetchProducts()
    const data = await  response.json()
    console.log(data)
    if(data.success){
        alert("product deleted Successfully")
    }
    else{
        alert("product not deleted")
    }

  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section className="">
      <div className="flex flex-col  pt-3">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">All Product List</h1>
        </div>
        <div className="pt-10 p-5  font-bold lg:font-bold grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-1 sm:gap-5 md:gap-7 lg:gap-16 text-[#454545] text-[8px] min-[370px]:text-[11px]  sm:text-[12px] lg:text-[15px]">
          <p>Products</p>
          <p className="">Title</p>
          <p>New Price</p>
          <p>Old Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
      </div>
      <div className="overflow-y-scroll h-[500px]">
        {products.map((product, i) => {
          return (
            <>
              <hr />
              <div key={i} className="  grid  grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-3 sm:gap-5 md:gap-7 lg:gap-10 p-5 font-medium text-[#454545] text-[7px]  min-[370px]:text-[11px] sm:text-[12px] lg:text-[15px] items-center">
                <p>
                  <img className="h-[60px]  sm:h-[80px]" src={product.image} alt="" />
                </p>
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <p>${product.old_price}</p>
                <p>{product.category}</p>
                <p onClick={() => {deleteProduct(product.id)}}>
                  <img className="m-auto w-2 min-[350px]:w-3 md:w-4 cursor-pointer" src={crossicon} alt="" />
                </p>
              </div>
              <hr className="" />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ListProducts;
