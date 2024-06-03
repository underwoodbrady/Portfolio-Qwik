import { component$ } from "@builder.io/qwik";
import Image from '~/media/me.png?jsx';
import Locate from '~/media/map.svg';
import Email from '~/media/mail.svg';


export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex justify-between mt-12 mb-8 w-full space-x-16">
            <div class="bg-[rgb(33,33,33)] p-6 w-[26%] h-full rounded-sm">
                <div class="relative w-full object-cover overflow-hidden h-[380px] mb-6" style={"border-top-image:linear-gradient(to right, grey 25%, yellow 25%, yellow 50%,red 50%, red 75%, teal 75%) 5"}>
                    <Image />
                    <p class="absolute right-2 bottom-2 text-neutral-200 text-xs italic">Camp Muir, Mt. Rainier</p>
                </div>
                <p class="font-semibold text-neutral-500 mb-3">Location</p>
                <p class="text-white mb-4">Maple Valley, WA</p>
                <p class="font-semibold text-neutral-500 mb-3">Email</p>
                <p class="text-white mb-8">underwood.brady@gmail.com</p>
                <div class="w-[calc(100%+48px)] -mx-6 h-[6px] -mb-6" style="background:linear-gradient(90deg, #CC3535 0 16.67%, #01AAAA 16.67% 33.343%, #629542 33.343% 50%, #8C810D  50% 66.67%, #B26207  66.67% 83.34%, #30A279 83.34% 100%);"></div>
            </div>

            <div class="flex-1 flex flex-col items-start h-full justify-between">
                <h2 class=" text-5xl text-neutral-200 tracking-normal font-semibold mb-12">about me</h2>

                <p class="text-neutral-400 text-lg mb-6 ">
                    I recently graduated from Montana State University with a degree in Computer Science. I have always had a keen interest in software development and business management and am eager to apply my knowledge to developing the next generation of software.
                </p>
                <p class="text-neutral-400 text-lg mb-6 ">
                    I have worked on a variety of different projects, from home automation using a Raspberry Pi, to game design using Unity or Node.js. These projects have allowed me to become proficient with a wide variety of languages ranging from C++ and Python to more web oriented languages such as React and Typescript.
                </p>

                <p class="text-neutral-400 text-lg mb-6 ">
                    Outside of work I stay busy hiking, skiing, and longboarding and enjoy just about anything outdoors.
                </p>

                <p class="text-neutral-400 text-lg mb-6 ">
                    I am hoping to secure a job at a software company and am always looking to continue building my skills as a programmer and as a designer.  For business inquiries feel free to <a>email</a> me.
                </p>
            </div>


        </section>
    );
});
