import { component$ } from "@builder.io/qwik";

interface Props {
    title: string;
    colorRed: number;
    colorGreen: number;
    colorBlue: number;
}

export default component$<Props>(({ title, colorRed, colorGreen, colorBlue }) => {
    return (
        <div class={`relative group flex flex-col items-start justify-between bg-[rgb(32,32,32)] w-full h-full p-8 rounded-sm border-4`} style={`border-color:rgb(${colorRed},${colorGreen},${colorBlue})`}>
            <div class="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-100 -z-20" style={`box-shadow:0px 0px 25px 4px rgba(${colorRed},${colorGreen},${colorBlue},0.4)`}></div>
            <div class="flex flex-col">
                <h2 class="text-xl font-semibold text-neutral-200">{title}</h2>
            </div>
            <div>
                <button class="font-semibold border-white px-4 py-3 rounded-sm" style={`color:rgb(${colorRed},${colorGreen},${colorBlue});border-color:rgb(${colorRed},${colorGreen},${colorBlue})`}>learn more</button>
            </div>
        </div>
    );
});
