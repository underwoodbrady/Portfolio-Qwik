import { component$ } from "@builder.io/qwik";
import Designproject from "./designproject";


export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex mt-12">
            <div class="absolute left-0 top-0 flex w-full justify-between items-center">
                <h2 class="text-5xl text-neutral-700 tracking-widest"><span class="font-semibold text-neutral-200 tracking-normal">design</span> portfolio</h2>
            </div>
            <div class="relative mt-28 mb-8 w-full grid gap-x-6 gap-y-6 grid-cols-2 auto-rows-[112px]">
                <div  class="col-start-1 col-end-4 row-start-1 row-end-3">
                    <Designproject title="Urban Wordle" colorRed={136} colorGreen={183} colorBlue={105}/>
                </div>
                <div class="col-span-1 row-start-3 row-end-6">
                    <Designproject title="Red Trade" colorRed={211} colorGreen={94} colorBlue={94} />
                </div>
                <div class="col-span-2 row-start-3 row-end-5">
                    <Designproject title="Simply Brackets" colorRed={41} colorGreen={178} colorBlue={175} />
                </div>
                <div class="col-span-1 row-start-6 row-end-[8]">
                    <Designproject title="Flutter Snowclock"  colorRed={48} colorGreen={162} colorBlue={121}  />
                </div>
                <div class="col-span-2 row-start-5 row-end-[8]">
                    <Designproject title="Tech Blog" colorRed={188} colorGreen={172} colorBlue={57} />
                </div>
                <div class="col-start-1 col-end-4 row-start-[8] row-end-[10]">
                    <Designproject title="This Website" colorRed={196} colorGreen={117} colorBlue={38}/>
                </div>
            </div>
        </section>
    );
});
