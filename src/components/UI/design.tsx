import { component$ } from "@builder.io/qwik";
import Designproject from "./designproject";


export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex mt-12">
            <div class="absolute left-0 top-0 flex w-full justify-between items-center">
                <h2 class="text-4xl max-w-[160px] lg:max-w-full lg:text-5xl text-neutral-700 tracking-widest leading-tight lg:leading-none"><span class="font-semibold text-neutral-200 tracking-normal">design</span> portfolio</h2>
            </div>
            <div class="relative mt-32 lg:mt-28 mb-8 w-full flex flex-col lg:grid lg:gap-x-6 gap-y-6 lg:grid-cols-2 auto-rows-[112px]">
                <div  class="col-start-1 col-end-4 row-start-1 row-end-3">
                    <Designproject title="Urban Wordle" link="urbanwordle" colorRed={136} colorGreen={183} colorBlue={105}/>
                </div>
                <div class="col-span-1 row-start-3 row-end-6">
                    <Designproject title="Red Trade" link="redtrade" colorRed={211} colorGreen={94} colorBlue={94} />
                </div>
                <div class="col-span-2 row-start-3 row-end-5">
                    <Designproject title="Simply Brackets" link="simplybrackets" colorRed={41} colorGreen={178} colorBlue={175} />
                </div>
                <div class="col-span-1 row-start-6 row-end-[8]">
                    <Designproject title="Flutter Snowclock" link="snowclock"  colorRed={48} colorGreen={162} colorBlue={121}  />
                </div>
                <div class="col-span-2 row-start-5 row-end-[8]">
                    <Designproject title="Envestnet Lydian" link="lydian" colorRed={188} colorGreen={172} colorBlue={57} />
                </div>
                <div class="col-start-1 col-end-4 row-start-[8] row-end-[10]">
                    <Designproject title="Tango Social" link="tango" colorRed={196} colorGreen={117} colorBlue={38}/>
                </div>
            </div>
        </section>
    );
});
