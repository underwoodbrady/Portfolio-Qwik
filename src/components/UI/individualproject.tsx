import { Slot, component$ } from "@builder.io/qwik";

import NodeImg from '~/media/nodejs.png?jsx';
import PocketImg from '~/media/pocketbase.png?jsx';
import SvelteImg from '~/media/svelte.png?jsx';
import TailwindImg from '~/media/tailwind.png?jsx';

interface Props {
    title: string;
    type: string;
    tools: string[];
    linkSite?: string;
    linkCode?: string;
    color: string;
}

export default component$<Props>(({ title, type, tools, linkSite, linkCode, color }) => {
    return (
        <section class="relative max-w-7xl mx-auto mt-12 h-full">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <h2 class=" text-4xl text-neutral-200 font-semibold ">{title}</h2>
                    <div class="flex items-center space-x-6">
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                            <g clip-path="url(#clip0_429_11072)">
                                <path d="M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999" stroke="#8C8C8C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 14.9999L20 3.99994" stroke="#8C8C8C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 3.99994H20V8.99994" stroke="#8C8C8C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7">
                            <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#8C8C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                </div>
                <h3 class=" text-neutral-700 tracking-widest text-3xl mb-8">{type}</h3>
                <div class="h-[2px] w-12 bg-white/20 rounded-full my-5" />
                <div class="flex items-center space-x-4 mb-12">
                    <p class="text-neutral-500 font-semibold">Tools:</p>
                    {tools.map((tool) =>
                        <div class="w-6 h-6">
                            {tool == 'svelte' || tool == 'sveltekit' && <SvelteImg />}
                            {tool == 'pocketbase' && <PocketImg />}
                            {tool == 'nodejs' && <NodeImg />}
                            {tool == 'tailwind' && <TailwindImg />}
                        </div>
                    )}
                </div>
            </div>
            <Slot />
            
            <div class="fixed left-0 bottom-0 w-full h-4 z-20" style={`background-color:${color}`}></div>
        </section>
    );
});
