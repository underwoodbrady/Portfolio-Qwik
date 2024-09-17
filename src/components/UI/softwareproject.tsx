import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import star from '~/media/star-outline.svg';

interface Props {
    title: string;
    role: string;
    color: string;
    link: string;
    stars?: number;
    starslink?: string;
}

export default component$<Props>(({ title, role, color, link, stars, starslink = "/" }) => {
    return (
        <div class={"flex items-center justify-between bg-[rgb(33,33,33)] w-[calc(100%+96px)] lg:w-full p-6 lg:p-8 rounded-sm border-b-8 -mx-12 px-12 lg:mx-0 lg:px-8"} style={`border-color:${color}`}>
            <div class="flex flex-col">
                <div class="flex items-center space-x-6">
                    <h2 class="text-lg lg:text-xl font-semibold text-neutral-200 whitespace-nowrap">{title}</h2>
                    {stars && <a class="hidden lg:flex items-center space-x-1 text-neutral-400 font-extrabold" href={starslink} target="_blank">
                        <img src={star} alt="Stars" class="h-4 w-4" width={16} height={16} />
                        <p>{stars}</p>
                    </a>}
                </div>
                <div class="h-[2px] w-12 bg-white/20 rounded-full my-4" />
                <h4 class=" text-neutral-400 text-sm lg:text-base lg:leading-4 whitespace-nowrap">{role}</h4>
            </div>

            <div>
                <Link
                    href={`/software/${link}`}
                    class="font-semibold text-sm lg:text-base lg:leading-4 px-4 py-3 whitespace-nowrap" style={`color:${color}`}            >
                    learn more
                </Link>
            </div>
        </div>
    );
});
