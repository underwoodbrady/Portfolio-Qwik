import { component$ } from "@builder.io/qwik";

type TagList = 'python' 
            | 'javascript'
            | 'typescript' 
            | 'react' 
            | 'svelte'
            | 'firebase'
            | 'pocketbase'
            | 'java' 
            | 'nodejs';

interface Props {
    title: string;
    role: string;
    description: string;
    small?: boolean;
    tags?:TagList[];
  }

export default component$<Props>(({title, role, description, small = false, tags = []}) => {
    return (
        <div class="text-white p-8 flex flex-col justify-between h-full">
            <div class="flex flex-wrap justify-start space-x-2">
                {(tags.includes('python')) && <span class="bg-gradient-to-b from-cyan-500 from-50% to-amber-400 to-50% px-4 py-[2px] rounded-md flex items-center text-sm">#python</span>}
                {(tags.includes('javascript')) && <span class="bg-yellow-400 px-4 py-[2px] rounded-md flex items-center text-sm">#javascript</span>}
                {(tags.includes('typescript')) && <span class="bg-blue-400 px-4 py-[2px] rounded-md flex items-center text-sm">#typescript</span>}
                {(tags.includes('react')) && <span class="bg-cyan-500 px-4 py-[2px] rounded-md flex items-center text-sm">#react</span>}
                {(tags.includes('svelte')) && <span class="bg-orange-400 px-4 py-[2px] rounded-md flex items-center text-sm">#svelte</span>}
                {(tags.includes('firebase')) && <span class=" bg-amber-500 px-4 py-[2px] rounded-md flex items-center text-sm">#firebase</span>}
                {(tags.includes('pocketbase')) &&<span class="bg-neutral-200 text-neutral-800 px-4 py-[2px] rounded-md flex items-center text-sm">#pocketbase</span>}
                {(tags.includes('java')) &&<span class="bg-rose-400 px-4 py-[2px] rounded-md flex items-center text-sm">#java</span>}
                {(tags.includes('nodejs')) &&<span class="bg-green-400 px-4 py-[2px] rounded-md flex items-center text-sm">#nodejs</span>}
            </div>
            <div class={["max-h-[40%] overflow-hidden", small && ""]}>
                <h4 class="text-neutral-400 font-semibold mb-2">{role}</h4>
                <h3 class="text-3xl text-white font-semibold mb-4">{title}</h3>
                <p class="text-sm overflow-ellipsis text-neutral-200">{description}</p>
            </div>
            <button class="font-semibold px-5 py-2 border-2 border-neutral-400 rounded-sm flex items-center justify-center text-neutral-400 hover:text-white hover:border-white duration-100">view</button>
        </div>
    );
});
