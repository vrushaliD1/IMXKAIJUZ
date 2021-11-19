import TabsRender from "./Tabs";

function Rarity() {
    return (
      <>
     
<section class="dark:bg-gray-700 dark:text-white text-black body-font">
  <div class="container px-5 pt-12  mx-auto">
 
    <div class="text-center mb-6">
      <h1 class="sm:text-3xl text-2xl font-semibold text-center title-font  mb-4">V1 IMX Kaijuz Rarity Chart ✨</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Please see the rarity percentages of each trait below. These percentages are the likelihood of pulling each trait relative to the total supply.</p>
    </div>
    <TabsRender />
   
 </div>
</section>

</>
  );
}

export default Rarity;