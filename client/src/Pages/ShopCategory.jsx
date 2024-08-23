import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown_icon.png'
import Items from "../Components/Items/Items";
import Footer from "../Components/Footer/Footer";

const ShopCategory = (props) => {
  const { allproduct } = useContext(ShopContext);
  
  const gradientStyle = {
    background: 'linear-gradient(90deg, rgba(255,196,0,0.6223739495798319) 1%, rgba(243,210,33,0.5495448179271709) 38%, rgba(243,241,237,0.8436624649859944) 69%)',
  };
  return (
    <section>
      <section style={gradientStyle} class="px-3 py-5   lg:py-10">
        <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5 ">
          <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-7xl text-orange-600">
              Flat 50 % OFF
            </p>
            <p class="text-3xl font-bold md:text-6xl"><span className="text-orange-600">12 </span>Hours <span className="text-orange-600">10 </span>Mins</p>
            <button class="text-lg md:text-2xl w-[170px] sm:w-[230px] h-12 sm:h-16 rounded-r-full rounded-l-full bg-[#e93232] text-white py-2 px-5 mt-6 sm:mt-10">
              Explore Now
            </button>
          </div>
          <div class="order-1 lg:order-2">
            <img
            // h-[300px] sm:h-[350px] md:h-[380px]
              class=" h-70 w-70 object-cover  lg:w-[400px] lg:h-[400px]"
              src={props.banner}
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col sm:flex-row gap-4 justify-evenly items-center mt-10">
        <div>
          <p><span className="font-bold">Showing 1-12</span> Out of 36 Results</p>
        </div>
        <div className=" cursor-pointer flex justify-center items-center gap-2 w-28 h-12 rounded-l-full rounded-r-full border border-[#7a7a7a]">
          <p>Sort by</p>
           <img className="" src={dropdown} alt="" />
        </div>
        </div>
        <div className="flex flex-wrap gap-7 justify-center ">
          {
            allproduct.map((item,i) => {
              if(props.category === item.category){
                return (
                  <Items
                  key={i}
                  id={item.id}
                  title={item.name}
                  newprice={item.new_price}
                  oldprice={item.old_price}
                  image={item.image}
                />
                )
              }
              else{
                return null
              }
            })
          }
        </div>
        <div className="flex justify-center">
        <button class="w-40 h-12 rounded-r-full rounded-l-full bg-gray-300 text-gray-500 py-2 px-5 mt-20">
              Explore More
            </button>
        </div>
      </section>
      <Footer/>
    </section>
  );
};

export default ShopCategory;