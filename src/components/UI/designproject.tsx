import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImageWordle from '~/media/urbanwordle4.png?jsx';
import ImageRed from '~/media/redtrade.png?jsx';
import ImageSnow from '~/media/snowcounter.png?jsx';
import ImageBlog from '~/media/envestnet6.png?jsx';
import ImageBrackets from '~/media/simplybrackets2.png?jsx';
import ImageThis from '~/media/thiswebsite.png?jsx';


interface Props {
    title: string;
    colorRed: number;
    colorGreen: number;
    colorBlue: number;
    link: string;
}

export default component$<Props>(({ title, colorRed, colorGreen, colorBlue, link }) => {
    return (
        <div class="relative flex items-center group justify-between bg-[rgb(33,33,33)] w-full h-full p-6 lg:p-8 rounded-sm border-4" style={`border-color:rgb(${colorRed},${colorGreen},${colorBlue})`}>
            <div class="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-100 -z-20" style={`box-shadow:0px 0px 25px 4px rgba(${colorRed},${colorGreen},${colorBlue},0.4)`}></div>
            <div class="flex flex-col items-start justify-between h-full min-w-[120px] lg:min-w-min min-h-[120px]">
                <div class="flex flex-col">
                    <h2 class="text-xl font-semibold text-neutral-200">{title}</h2>
                </div>
                <div class="mb-3">
                    <Link class="font-semibold border-white rounded-sm" 
                    style={`color:rgb(${colorRed},${colorGreen},${colorBlue});border-color:rgb(${colorRed},${colorGreen},${colorBlue})`}
                    href={`/design/${link}`}
                    >learn more</Link>
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
                (title == 'Flutter Snowclock' ?
                    <div class=" max-w-[240px] mx-auto">
                        <ImageSnow />
                    </div> : <></>
                )
            }
            {
                (title == 'Envestnet Lydian' ?
                    <div class=" max-w-[280px] mx-auto">
                        <ImageBlog />
                    </div> : <></>
                )
            }
            {
                (title == 'Simply Brackets' ?
                    <div class=" max-w-[240px] mx-auto">
                        <ImageBrackets />
                    </div> : <></>
                )
            }

            {
                (title == 'This Website' ?
                    <div class=" max-w-[540px] mx-auto">
                        <ImageThis />
                    </div> : <></>
                )
            }

        </div>
    );
});
