import { component$ } from "@builder.io/qwik";
import ImageWordle from '~/media/urbanwordle4.png?jsx';
import ImageRed from '~/media/redtrade.png?jsx';
import ImageSnow from '~/media/snowcounter.png?jsx';


interface Props {
    title: string;
    colorRed: number;
    colorGreen: number;
    colorBlue: number;
}

export default component$<Props>(({ title, colorRed, colorGreen, colorBlue }) => {
    return (
        <div class="relative flex items-center group justify-between bg-[rgb(33,33,33)] w-full h-full p-8 rounded-sm border-4" style={`border-color:rgb(${colorRed},${colorGreen},${colorBlue})`}>
            <div class="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-100 -z-20" style={`box-shadow:0px 0px 25px 4px rgba(${colorRed},${colorGreen},${colorBlue},0.4)`}></div>
            <div class="flex flex-col items-start justify-between h-full">
                <div class="flex flex-col">
                    <h2 class="text-xl font-semibold text-neutral-200">{title}</h2>
                </div>
                <div>
                    <button class="font-semibold border-white py-3 rounded-sm" style={`color:rgb(${colorRed},${colorGreen},${colorBlue});border-color:rgb(${colorRed},${colorGreen},${colorBlue})`}>learn more</button>
                </div>
            </div>
            {
                (title == 'Urban Wordle' ? 
                <div class=" max-w-[600px] mx-auto">
                    <ImageWordle />
                </div> : <></>
                )
            }
            {
                (title == 'Red Trade' ? 
                <div class=" max-w-[270px] mx-auto">
                    <ImageRed />
                </div> : <></>
                )
            }
            {
                (title == 'Flutter Snowcounter' ? 
                <div class=" max-w-[240px] mx-auto">
                    <ImageSnow />
                </div> : <></>
                )
            }

        </div>
    );
});
