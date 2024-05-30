import { Slot, component$ } from "@builder.io/qwik";
import Image3 from '~/media/red3.png?jsx';


interface Props {
    title: string;
    subtitle?: string;
    // linkSite?: string;
    // linkCode?: string;
    color: string;
}

export default component$<Props>(({ title, subtitle, color }) => {
    return (
        <section class="relative max-w-7xl mx-auto mt-12 h-full overflow-hidden">
            <div class="flex items-center mb-12 space-x-6">
                <div class="rounded-full h-20 w-20 bg-red-400"></div>
            <div >
                <h2 class=" text-4xl text-neutral-200 font-semibold mb-3">{title}</h2>
                <h2 class=" text-xl text-neutral-400">{subtitle}</h2>
            </div>
            </div>
          
            <Slot />
        </section>
    );
});
