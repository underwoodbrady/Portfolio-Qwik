import { component$ } from "@builder.io/qwik";

import instagram from "../../media/instagram.svg";
import github from "../../media/github.svg";
import linkedin from "../../media/linkedin.svg";
import youtube from "../../media/youtube.svg";


export default component$(() => {
    return (
        <section class=" text-white max-w-5xl mx-auto flex h-full min-h-screen">
            <div class="w-1/2 mt-20">
                <h2 class="mb-8 text-4xl font-semibold text-neutral-100">Hello,</h2>
                <h3 class="text-xl mb-8 text-neutral-200">I am a freelance software developer and web designer optimizing for <span>simplicity</span> and <span>performance</span></h3>
                <div class="w-28 h-[2px] bg-white/20 rounded-full mb-5"></div>
                <div class="flex space-x-6 items-center">
                    <img src={instagram} width={24} class="hover:cursor-pointer"/>
                    <img src={linkedin} width={24}/>
                    <img src={github} width={24}/>
                    <img src={youtube} width={24}/>
                </div>
            </div>

        </section>
    );
});
