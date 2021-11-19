import React from "react";
const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
        <div className="flex  flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " 
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Background
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " 
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                   KAIJU BASE
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " 
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                   EYE EXPRESSION
                </a>
              </li>
             
            </ul>
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " 
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  HATS
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " 
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                   TOPS
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " 
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(6);
                  }}
                  data-toggle="tab"
                  href="#link6"
                  role="tablist"
                >
                  NECKLACES
                </a>
              </li>
             
            </ul>
            <ul>
            <li className=" mr-2 last:mr-0 flex-auto text-center mb-6">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " 
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(7);
                  }}
                  data-toggle="tab"
                  href="#link7"
                  role="tablist"
                >
                   MOUTH EXPRESSION
                </a>
              </li>
              </ul>
            <div className="relative dark:bg-gray-700 dark:text-white text-black flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded text-center justify-center">
              <div className="px-4 pt-5 pb-10 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <nav class="flex flex-col  sm:text-left text-center  justify-center items-center -mb-1 space-y-2.5">
                  <h1 class="sm:text-3xl text-xl font-semibold text-center title-font  mb-10">Background Traits</h1>
      
       
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>12%</p>
              </span>Beige
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>12%</p>
              </span>Blue
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>12%</p>
              </span>Green
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>12%</p>
              </span>Lilac
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>12%</p>
              </span>Purple
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>12%</p>
              </span>Vibrant Red
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>12%</p>
              </span>Yellow
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2.5%</p>
              </span>Inferno
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2.5%</p>
              </span>Jungle
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2.2%</p>
              </span>Space
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2.2%</p>
              </span>Day Time City
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.8%</p>
              </span>Cloudy Sky
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.6%</p>
              </span>City
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.4%</p>
              </span>Dollars
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1%</p>
              </span>Sunset
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>0.8%</p>
              </span>Mountains
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>0.1%</p>
              </span>Bitcoin
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>0.1%</p>
              </span>Ethereum
            </a>
          </nav>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                     <nav class="flex flex-col  sm:text-left text-center  justify-center items-center -mb-1 space-y-2.5">
                     <h1 class="sm:text-3xl text-xl font-semibold text-center title-font  mb-10">Kaiju Base Traits</h1>
      
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>13%</p>
              </span>Aquamarine Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>13%</p>
              </span>Green Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>13%</p>
              </span>Olive Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>13%</p>
              </span>Orange Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>13%</p>
              </span>Pink Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>11%</p>
              </span>Purple Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>11%</p>
              </span>Dark Purple Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>4%</p>
              </span>White Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3%</p>
              </span>Silver Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.4%</p>
              </span>Golden Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.4%</p>
              </span>Obsidian Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.1%</p>
              </span>Toxic Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1%</p>
              </span>Ancient Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>0.4%</p>
              </span>Ice Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>0.4%</p>
              </span>Lava Kaiju
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>0.4%</p>
              </span>Mekka Kaiju
            </a>
          </nav>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                     <nav class="flex flex-col  sm:text-left text-center  justify-center items-center -mb-1 space-y-2.5">
                     <h1 class="sm:text-3xl text-xl font-semibold text-center title-font  mb-10">Eye Expression Traits</h1>
      
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>50%</p>
              </span>Plain Eyes
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>10%</p>
              </span>Monocle
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Aviators
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Sunglasses
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5%</p>
              </span>Toxic Eyes
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>4.5%</p>
              </span>Stoned Eyes
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3.5%</p>
              </span>Obsidian Eyes
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3%</p>
              </span>KO Eyes
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3%</p>
              </span>Heart Glasses
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3%</p>
              </span>Eyepatch
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>Laser Eyes
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>3D Glasses
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1%</p>
              </span>Eyebrow Piercing
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>0.5%</p>
              </span>All Seeing Mask
            </a>
          </nav>
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <nav class="flex flex-col  sm:text-left text-center  justify-center items-center -mb-1 space-y-2.5">
                  <h1 class="sm:text-3xl text-xl font-semibold text-center title-font  mb-10">Hat Traits</h1>
      
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>40%</p>
              </span>No Hat
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>8%</p>
              </span>Ear Pods
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Backwards Cap
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Mohawk
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Bucket Hat
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5%</p>
              </span>Gaming Headset
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5%</p>
              </span>Beanie
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>4%</p>
              </span>Purple Mohawk
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>4%</p>
              </span>Halo
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>4%</p>
              </span>Bitcoin Cap
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3%</p>
              </span>Floating Plant
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2.5%</p>
              </span>Devil Horns
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>King's Crown
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>Sheriff's Hat
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1%</p>
              </span>Bandana
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1%</p>
              </span>Top Hat
            </a>
            
          </nav>
                  </div>
                  <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                     <nav class="flex flex-col  sm:text-left text-center  justify-center items-center -mb-1 space-y-2.5">
                     <h1 class="sm:text-3xl text-xl font-semibold text-center title-font  mb-10">Top Traits</h1>
      
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>25%</p>
              </span>No Top
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>8%</p>
              </span>Blue Tank
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>7.5%</p>
              </span>Black Tank
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>7%</p>
              </span>Grey Hoodie
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Sweatshirt
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>V Neck
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5.5%</p>
              </span>Rollneck
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5.5%</p>
              </span>Shirted Jacket
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5.5%</p>
              </span>Camo Jacket
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>4%</p>
              </span>Designer T Shirt
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>4%</p>
              </span>Pink Hoodie
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3.5%</p>
              </span>Blue Hoodie
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3%</p>
              </span>Winter Coat
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>Body Warmer
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>Ripped Shirt
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>Flannel Shirt
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.5%</p>
              </span>Silver Armor
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.5%</p>
              </span>CEO Suit
            </a>
            <a>
                <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                  <p>0.5%</p>
                </span>Gold Armor
              </a>
          </nav>
                  </div>
                  <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                     <nav class="flex flex-col  sm:text-left text-center  justify-center items-center -mb-1 space-y-2.5">
                     <h1 class="sm:text-3xl text-xl font-semibold text-center title-font  mb-10">Necklace Traits</h1>
      
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>40%</p>
              </span>No Necklace
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>11%</p>
              </span>Silver Chain
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>9%</p>
              </span>Gold Chain
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>8%</p>
              </span>Bowtie
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>7%</p>
              </span>Scarf
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>7%</p>
              </span>Beard
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5%</p>
              </span>Tie
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>3.5%</p>
              </span>Choker
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2.5%</p>
              </span>Ethereum Necklace
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>Shark Necklace
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>2%</p>
              </span>Spiked Collar
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1%</p>
              </span>Cat Bell
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1%</p>
              </span>Flower Necklace
            </a>
          </nav>
                  </div>
                  <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                     <nav class="flex flex-col  sm:text-left text-center  justify-center items-center -mb-1 space-y-2.5">
                     <h1 class="sm:text-3xl text-xl font-semibold text-center title-font  mb-10">Mouth Expression Traits</h1>
      
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>50%</p>
              </span>Kaiju Mouth
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>9%</p>
              </span>Tongue
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>9%</p>
              </span>Joint
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>7%</p>
              </span>Fangs
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5%</p>
              </span>Fifth Link
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Moustache
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>6%</p>
              </span>Ice Blast
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>5%</p>
              </span>Fire Blast
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.5%</p>
              </span>Pipe
            </a>
            <a>
              <span class="bg-green-100 text-green-500 w-9 h-9 font-bold text-xs mr-2 rounded-full inline-flex items-center justify-center">
                <p>1.5%</p>
              </span>Ethereum Vomit
            </a>
          </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default function TabsRender() {
    return (
      <>
        <Tabs color="emerald" />
      </>
    );
  }
  