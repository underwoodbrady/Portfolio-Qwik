import { Slot, component$, QRL  } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Props {
    title?: string;
    id?: string;
    link?: string;
    onHover:QRL<() => void>;
    onLeave:QRL<() => void>;
    highlighed:boolean;
    colorRed?: number;
    colorGreen?: number;
    colorBlue?: number;
}

export default component$<Props>(({ title, id, link, onHover, onLeave, highlighed, colorRed, colorGreen, colorBlue }) => {
    return (
        link ? (<Link href={link} class="cursor-pointer" > 
            <div class="relative text-center rounded-sm px-4 w-28 h-28 bg-[rgb(33,33,33)] border-r-4 border-neutral-400 hover:border-white hover:text-white flex justify-center items-center text-sm text-neutral-400 select-none transition-colors duration-100 group" id={id} onMouseEnter$={onHover} onMouseLeave$={onLeave} style = {highlighed ? " border-color:white;" : ""} >
                {title}
                <div class="z-20 absolute -left-6 -top-6 w-16 h-16 rounded-full bg-neutral-900 hidden group-hover:flex items-center justify-center transition-colors duration-100">
                    <div class="font-semibold text-xs">learn more</div>
                </div>
            </div>
        </Link>) : colorRed ? (
            <div class="relative text-center rounded-sm w-24 h-24 bg-[rgb(33,33,33)] border-4 flex justify-center items-center text-sm text-neutral-400 select-none transition-colors duration-100" id={id} style = {highlighed ? colorRed ? ` border-color:rgb(${colorRed}, ${colorGreen}, ${colorBlue});box-shadow:0px 0px 25px 4px rgba(${colorRed},${colorGreen},${colorBlue},0.4);color:white;` : "border-color:white;" : colorRed ? ` border-color:rgba(${colorRed}, ${colorGreen}, ${colorBlue},0.7)` : ""}>
                {title}
            </div>
        ) : (
            <div class="relative text-center rounded-full w-20 h-20 bg-[rgb(33,33,33)] border-4 border-neutral-400 hover:border-white flex justify-center items-center text-sm text-neutral-400 select-none transition-colors duration-100" id={id} style = {highlighed ? colorRed ? ` border-color:rgb(${colorRed}, ${colorGreen}, ${colorBlue});box-shadow:0px 0px 25px 4px rgba(${colorRed},${colorGreen},${colorBlue},0.4);color:white;` : "border-color:white;" : colorRed ? ` border-color:rgba(${colorRed}, ${colorGreen}, ${colorBlue},0.7)` : ""}>
            {title}
        </div>
        )
    );
});
