import logo_imx_kaijuz from '../images/logo_imx_kaijuz.png'
import discordblack from '../images/discordblack.png'
function Footer() {
  return (
    <>
    <footer class="text-black dark:bg-gray-700 dark:text-white body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center  w-20 text-black">
    <img src={logo_imx_kaijuz} alt="IMXKaijuz Logo" />
    </a>
    
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a class="ml-3 mr-3 text-black " href="https://discord.gg/imxkaijuz">
    <img src={discordblack} class="w-6" alt="IMX Kaijuz Discord Link" />
      </a>
      <a class="ml-3 text-black " href="https://twitter.com/imxkaijuz">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </>
  );
}

export default Footer;