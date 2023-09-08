import { component$ } from "@builder.io/qwik";


export default component$(() => {
    return (
        <section class=" text-white max-w-5xl mx-auto flex">
            <div class="w-1/2 my-auto">
                <h2 class="mb-6 text-4xl">Hello,</h2>
                <h3 class="text-2xl">I am a freelance software developer and web designer optimizing for <span>simplicity</span> and <span>performance</span></h3>
                <div class="w-28 h-[2px] bg-white/20 rounded-full my-6"></div>
                <div class="flex space-x-4 items-center">
                    <div class="w-8 h-8 rounded-md border-2 border-white/20"> </div>
                    <div class="w-8 h-8 rounded-md border-2 border-white/20"> </div>
                    <div class="w-8 h-8 rounded-md border-2 border-white/20"> </div>
                    <div class="w-8 h-8 rounded-md border-2 border-white/20"> </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="w-full h-96 bg-white/30 border-2 border-white/20 rounded-md"></div>
            </div>

        </section>
    );
});
