import { Slot, component$ } from "@builder.io/qwik";

import NodeImg from '~/media/nodejssm.png?jsx';
import PocketImg from '~/media/pbsm.png?jsx';
import SvelteImg from '~/media/sveltesm.png?jsx';
import TailwindImg from '~/media/tailwindsm.png?jsx';
import ArduinoImg from '~/media/arduinosm.png?jsx';
import CppImg from '~/media/cppsm.png?jsx';
import CsharpImg from '~/media/csharpsm.png?jsx';
import DaisyImg from '~/media/daisyuism.png?jsx';
import FlutterImg from '~/media/fluttersm.png?jsx';
import QwikImg from '~/media/qwiksm.png?jsx';
import ReactImg from '~/media/reactsm.png?jsx';
import SQLImg from '~/media/sqlsm.png?jsx';
import TypescriptImg from '~/media/typescriptsm.png?jsx';
import UnityImg from '~/media/unitysm.png?jsx';
import RustImg from '~/media/rustsm.png?jsx';

interface Props {
    title: string;
    type: string;
    tools: string[];
    // linkSite?: string;
    linkCode?: string;
    color: string;
}

export default component$<Props>(({ title, type, tools, color, linkCode }) => {
    return (
        <section class="relative max-w-7xl mx-auto mt-12 h-full overflow-hidden">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <h2 class=" text-4xl text-neutral-200 font-semibold ">{title}</h2>
                    <div class="flex items-center space-x-6">
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-[#8C8C8C] hover:stroke-neutral-500">
                            <g clip-path="url(#clip0_429_11072)">
                                <path d="M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 14.9999L20 3.99994" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 3.99994H20V8.99994" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <a href={linkCode} target="_blank">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 stroke-[#8C8C8C] hover:stroke-neutral-500">
                                <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div class="h-[2px] w-12 bg-white/20 rounded-full my-5" />
                <div class="flex items-center space-x-4 mb-12">
                    <p class="text-neutral-500 font-semibold">Tools:</p>
                    {tools.map((tool) =>
                        <div class="w-6 h-6 flex items-center justify-center" key={tool}>
                            {(tool == 'svelte' || tool == 'sveltekit') && <a href="https://kit.svelte.dev/" target="_blank"><SvelteImg /></a>}
                            {tool == 'pocketbase' && <a href="https://pocketbase.io/" target="_blank"><PocketImg /></a>}
                            {tool == 'nodejs' && <a href="https://nodejs.org/en" target="_blank"><NodeImg /></a>}
                            {tool == 'tailwind' && <a href="https://tailwindcss.com/" target="_blank"><TailwindImg /></a>}
                            {tool == 'arduino' && <a href="https://www.arduino.cc/" target="_blank"><ArduinoImg /></a>}
                            {(tool == 'cpp' || tool == 'c++') && <a href="https://cplusplus.com/" target="_blank"><CppImg /></a>}
                            {(tool == 'csharp' || tool == 'c#') && <a href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target="_blank"><CsharpImg /></a>}
                            {tool == 'daisy' && <a href="https://daisyui.com/" target="_blank"><DaisyImg /></a>}
                            {tool == 'flutter' && <a href="https://flutter.dev/" target="_blank"><FlutterImg /></a>}
                            {tool == 'qwik' && <a href="https://qwik.dev/" target="_blank"><QwikImg /></a>}
                            {tool == 'react' && <a href="https://react.dev/" target="_blank"><ReactImg /></a>}
                            {tool == 'sql' && <a href="https://www.mysql.com/" target="_blank"><SQLImg /></a>}
                            {tool == 'typescript' && <a href="https://www.typescriptlang.org/" target="_blank"><TypescriptImg /></a>}
                            {tool == 'unity' && <a href="https://unity.com/" target="_blank"><UnityImg /></a>}
                            {tool == 'rust' && <a href="https://www.rust-lang.org/" target="_blank"><RustImg /></a>}
                        </div>
                    )}
                </div>
            </div>
            <Slot />

            <div class="fixed left-0 bottom-0 w-full h-2 z-20" style={`background-color:${color}`}></div>
        </section>
    );
});
