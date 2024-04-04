import { component$ } from "@builder.io/qwik";


interface Props {
    title: string;
    role: string;
    color: string;
}

export default component$<Props>(({ title, role, color }) => {
    return (
        <div class={"flex items-center justify-between bg-[rgb(32,32,32)] w-full p-8 rounded-sm border-t-8"} style={`border-color:${color}`}>
            <div class="flex flex-col">
                <h2 class="text-xl font-semibold text-neutral-200">{title}</h2>
                <div class="h-[2px] w-12 bg-white/20 rounded-full my-5" />
                <h4 class=" text-neutral-400">{role}</h4>
            </div>
            <div>
                <button class="font-semibold border-white px-4 py-3 rounded-sm" style={`color:${color};border-color:${color}`}>learn more</button>
            </div>
        </div>
    );
});
