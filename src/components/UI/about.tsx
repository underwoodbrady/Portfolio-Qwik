import { component$ } from "@builder.io/qwik";
import Image from '~/media/me.png?jsx';


export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex justify-between mt-12 w-full h-96 space-x-16">
            <div class="w-64 h-96 object-cover overflow-hidden bg-neutral-700 rounded-sm" style={"border-top-image:linear-gradient(to right, grey 25%, yellow 25%, yellow 50%,red 50%, red 75%, teal 75%) 5"}>
                <Image/>
            </div>
            <div class="flex-1 flex flex-col items-start h-full justify-between">
                <div class="flex items-center justify-between mb-8 w-full">
                    <h2 class="font-semibold text-5xl text-neutral-100">About Me</h2>
                    <div class="flex space-x-3 mt-2">
                        <div class="w-3 h-3 rounded-full bg-[#CC3535]"/>
                        <div class="w-3 h-3 rounded-full bg-[#01AAAA]"/>
                        <div class="w-3 h-3 rounded-full bg-[#629542]"/>
                        <div class="w-3 h-3 rounded-full bg-[#8C810D]"/>
                        <div class="w-3 h-3 rounded-full bg-[#B26207]"/>
                    </div>
                </div>
                <p class="text-neutral-400 text-lg ">
                    I am currently a senior in college at Montana State University. I have an interest in software development and business management and am finishing with a major in computer science.
                </p>
                <p class="text-neutral-400 text-lg ">
                    I have worked on a variety of different projects, from household automation using a Raspberry Pi, to game design using Unity or Node.js. These projects have allowed me to become proficient with a wide variety of languages ranging from C++ and Python to more web oriented languages such as HTML5 and Javascript.
                </p>

                <p class="text-neutral-400 text-lg ">
                    Following graduation I am hoping to secure a job at a software company and am always looking to continue building my skills as a programmer and as a designer.
                </p>
                <p class="text-neutral-400 text-lg">
                    For business inquiries feel free to email me at <span class="underline">underwood.brady@gmail.com</span>
                </p>
            </div>


        </section>
    );
});
