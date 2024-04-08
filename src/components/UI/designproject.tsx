import { component$ } from "@builder.io/qwik";


interface Props {
    title: string;
    color: string;
}

export default component$<Props>(({ title, color }) => {
    return (
        <div class={"flex items-center justify-between bg-[rgb(32,32,32)] w-full h-full p-8 rounded-sm border-4"} style={`border-color:${color};box-shadow: 0px 0px 25px 4px rgba(41, 178, 175, 0.4)`}>
            <div class="flex flex-col">
                <h2 class="text-xl font-semibold text-neutral-200">{title}</h2>
            </div>
            <div>
                <button class="font-semibold border-white px-4 py-3 rounded-sm" style={`color:${color};border-color:${color}`}>learn more</button>
            </div>
        </div>
    );
});
