import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="relative text-white max-w-7xl mx-auto flex h-[calc(100vh-72px)]">
            <div class="absolute w-5/12 top-[35%] -translate-y-1/2">
                <h2 class="mb-8 text-5xl font-semibold text-neutral-100">Hello,</h2>
                <h3 class="text-xl mb-8 text-neutral-200">I am a full-stack software developer and web designer optimizing for <span>simplicity</span> and <span>performance</span></h3>
                <div class="w-28 h-[2px] bg-white/20 rounded-full mb-5"></div>
                <div class="flex space-x-6 items-center">
                    <a href="https://www.instagram.com/dev.brady/" target="_blank">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve" width="24px" class="fill-[#8C8C8C] hover:fill-[#e4a76a] hover:cursor-pointer duration-100">
                            <path style="fill-rule:evenodd;clip-rule:evenodd" d="M400,600c110.5,0,200-89.5,200-200c0-110.5-89.5-200-200-200c-110.5,0-200,89.5-200,200
	C200,510.5,289.5,600,400,600z M400,533.3c73.6,0,133.3-59.7,133.3-133.3c0-73.6-59.7-133.3-133.3-133.3
	c-73.6,0-133.3,59.7-133.3,133.3C266.7,473.6,326.4,533.3,400,533.3z"/>
                            <path d="M600,166.7c-18.4,0-33.3,14.9-33.3,33.3s14.9,33.3,33.3,33.3c18.4,0,33.3-14.9,33.3-33.3S618.4,166.7,600,166.7
	z"/>
                            <path style="fill-rule:evenodd;clip-rule:evenodd" d="M55.1,142.5c-21.8,42.8-21.8,98.8-21.8,210.8v93.3c0,112,0,168,21.8,210.8c19.2,37.6,49.8,68.2,87.4,87.4
	c42.8,21.8,98.8,21.8,210.8,21.8h93.3c112,0,168,0,210.8-21.8c37.6-19.2,68.2-49.8,87.4-87.4c21.8-42.8,21.8-98.8,21.8-210.8v-93.3
	c0-112,0-168-21.8-210.8c-19.2-37.6-49.8-68.2-87.4-87.4c-42.8-21.8-98.8-21.8-210.8-21.8h-93.3c-112,0-168,0-210.8,21.8
	C104.9,74.3,74.3,104.9,55.1,142.5z M446.7,100h-93.3c-57.1,0-95.9,0.1-125.9,2.5c-29.2,2.4-44.2,6.7-54.6,12
	c-25.1,12.8-45.5,33.2-58.3,58.3c-5.3,10.4-9.6,25.4-12,54.6c-2.5,30-2.5,68.8-2.5,125.9v93.3c0,57.1,0.1,95.9,2.5,125.9
	c2.4,29.2,6.7,44.2,12,54.6c12.8,25.1,33.2,45.5,58.3,58.3c10.4,5.3,25.4,9.6,54.6,12c30,2.5,68.8,2.5,125.9,2.5h93.3
	c57.1,0,95.9-0.1,125.9-2.5c29.2-2.4,44.2-6.7,54.6-12c25.1-12.8,45.5-33.2,58.3-58.3c5.3-10.4,9.6-25.4,12-54.6
	c2.5-30,2.5-68.8,2.5-125.9v-93.3c0-57.1-0.1-95.9-2.5-125.9c-2.4-29.2-6.7-44.2-12-54.6c-12.8-25.1-33.2-45.5-58.3-58.3
	c-10.4-5.3-25.4-9.6-54.6-12C542.6,100.1,503.8,100,446.7,100z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/brady-underwood/" target="_blank">

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve" width="24px" class="fill-[#8C8C8C] hover:fill-[#88B769] hover:cursor-pointer duration-100">
                            <path d="M737.5,0h-675C28,0,0,28,0,62.5v675C0,772,28,800,62.5,800h675c34.5,0,62.5-28,62.5-62.5v-675
	C800,28,772,0,737.5,0z M288.1,567.3h-78V317.8h78V567.3z M247,286.6h-0.6c-28.3,0-46.6-19.1-46.6-43.3c0-24.7,18.9-43.3,47.7-43.3
	s46.4,18.6,47,43.3C294.7,267.3,276.4,286.6,247,286.6z M600,567.3h-88.4V438.3c0-33.8-13.8-56.9-44.2-56.9
	c-23.3,0-36.2,15.6-42.2,30.6c-2.2,5.3-1.9,12.8-1.9,20.5v134.8h-87.7c0,0,1.1-228.8,0-249.5h87.7V357c5.2-17.2,33.1-41.6,77.8-41.6
	c55.5,0,98.9,35.9,98.9,113.1V567.3z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/underwoodbrady" target="_blank">

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve" width="24px" class="fill-[#8C8C8C] hover:fill-[#5bdcda] hover:cursor-pointer duration-100">
                            <g id="Page-1">
                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path id="github-_x5B__x23_142_x5D_" class="st0" d="M484,7399c220.9,0,400,183.6,400,410.1c0,181.2-114.5,334.8-273.3,389.1
				c-20.3,4-27.5-8.8-27.5-19.7c0-13.5,0.5-57.7,0.5-112.6c0-38.2-12.8-63.2-27.2-75.9c89.1-10.2,182.7-44.8,182.7-202.4
				c0-44.8-15.5-81.3-41.2-110.1c4.2-10.4,17.9-52.1-3.9-108.6c0,0-33.5-11-109.9,42.1c-32-9.1-66.2-13.7-100.2-13.8
				c-34,0.2-68.2,4.7-100.1,13.8c-76.4-53-110-42.1-110-42.1c-21.7,56.5-8,98.2-3.9,108.6c-25.6,28.7-41.2,65.3-41.2,110.1
				c0,157.1,93.4,192.3,182.2,202.7c-11.4,10.2-21.8,28.3-25.4,54.8c-22.8,10.5-80.7,28.6-116.4-34.1c0,0-21.2-39.4-61.3-42.3
				c0,0-39-0.5-2.7,24.9c0,0,26.2,12.6,44.4,60c0,0,23.5,73.2,134.8,48.4c0.2,34.3,0.6,66.6,0.6,76.3c0,10.8-7.4,23.5-27.3,19.7
				C198.6,8144.1,84,7990.3,84,7809.1C84,7582.6,263.1,7399,484,7399"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>

        </section>
    );
});
