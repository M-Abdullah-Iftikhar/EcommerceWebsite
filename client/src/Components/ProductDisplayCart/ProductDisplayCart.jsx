import React,{useContext} from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplayCart = (props) => {
  const { product } = props;
  const {addtocart} = useContext(ShopContext)
  return (
    <div class="bg-gray-100">
      <div class=" px-4 py-8">
        <div class="flex justify-around flex-wrap -mx-4">
          <div class="lg:flex flex-row-reverse items-center justify-center gap-10">
            <img
              src={product.image}
              alt="Product"
              class="w-full h-[400px]  rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div class="flex lg:flex-col  gap-5 py-4 justify-center overflow-x-auto">
              <img
                src={product.image}
                alt="Thumbnail 1"
                class="size-16 sm:size-20 md:size-24 shadow-xl p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src={product.image}
                alt="Thumbnail 2"
                class="size-16 sm:size-20 md:size-24 shadow-xl p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src={product.image}
                alt="Thumbnail 3"
                class="size-16 sm:size-20 md:size-24 shadow-xl p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
              <img
                src={product.image}
                alt="Thumbnail 4"
                class="size-16 sm:size-20 md:size-24 shadow-xl p-2 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <h2 class="text-3xl font-bold mb-2">{product.name}</h2>
            {/* <p class="text-gray-600 mb-4">SKU: WH1000XM4</p> */}
            <div class="mb-4">
              <span class="text-2xl font-bold mr-2">${product.new_price}</span>
              <span class="text-gray-500 line-through">
                ${product.old_price}
              </span>
            </div>
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p class="text-gray-700 mb-6">{product.description}</p>

            {/* <div class="mb-6">
              <label
                for="quantity"
                class="block text-sm font-bold text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                // value="1"
                class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div> */}
            <div class="container mx-auto pb-10">
              <h2 class="text-xl font-bold mb-4">Select Size</h2>
              <div class="flex gap-3 items-center">
                <div class="bg-white cursor-pointer text-center w-16 border rounded-md py-1 text-gray-700 hover:bg-gray-200">
                  S
                </div>
                <div class="bg-white cursor-pointer text-center w-16 border rounded-md py-1 text-gray-700 hover:bg-gray-200">
                  M
                </div>
                <div class="bg-white cursor-pointer text-center w-16 border rounded-md py-1 text-gray-700 hover:bg-gray-200">
                  L
                </div>
                <div class="bg-white cursor-pointer text-center w-16 border rounded-md py-1 text-gray-700 hover:bg-gray-200">
                  XL
                </div>
                <div class="bg-white cursor-pointer text-center w-16 border rounded-md py-1 text-gray-700 hover:bg-gray-200">
                  XXL
                </div>
              </div>
            </div>

            <div class="flex space-x-4 mb-6">
              <button 
              onClick={()=> addtocart(product.id)}
              class="bg-red-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
            

            {/* <div>
              <h3 class="text-lg font-semibold mb-2">Key Features:</h3>
              <ul class="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCart;