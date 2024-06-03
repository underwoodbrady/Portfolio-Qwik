import { Slot, component$ } from "@builder.io/qwik";
import Image3 from '~/media/red3.png?jsx';


interface Props {
    title: string;
    subtitle?: string;
    // linkSite?: string;
    // linkCode?: string;
    color?: string;
}

export default component$<Props>(({ title, subtitle, color }) => {
    return (
        <section class="relative max-w-7xl mx-auto mt-12 h-full">
            <div class="flex items-center mb-20 space-x-6">
                {/* <div class="rounded-sm h-20 w-20 border-4" style={`background-color:rgb(33,33,33);border-color:${color}`}></div> */}
                <div class="rounded-full h-20 w-1 bg-red-400" style={`background-color:${color}`}></div>
                <div>
                    <h2 class=" text-4xl text-neutral-200 font-semibold mb-3">{title}</h2>
                    <h2 class=" text-xl text-neutral-400">{subtitle}</h2>
                </div>
            </div>

            <Slot />
        </section>
    );
});
