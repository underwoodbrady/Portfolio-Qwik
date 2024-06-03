import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface Props {
    title: string;
    subtitle?: string;
    leftImg?: boolean;
}

export default component$<Props>(({ title, subtitle, leftImg = false }) => {

    let showImg = useSignal(false);

    useVisibleTask$(async () => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio <= 0) return;
            showImg.value = true;
        });
        intersectionObserver.observe(document.getElementById(title) as Element);

    }, { strategy: "intersection-observer" });


    return (
        <div class={"flex justify-between space-x-8 mb-24 transition-all duration-1000  " + (leftImg ? " origin-left " : " origin-right ") + (showImg.value ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 " +(leftImg ? " translate-x-1/2" : " -translate-x-1/2") )} id={title}>
            {leftImg ? <div class="w-10/12">
                <Slot />
            </div> :
                <div class="w-2/12 text-right">
                    <h3 class="text-neutral-200 font-semibold text-xl mb-3">{title}</h3>
                    <div class="h-[2px] w-12 bg-white/20 rounded-full my-3 ml-auto" />
                    <p class="text-neutral-300 text-lg leading-6 mb-8">{subtitle}</p>
                </div>
            }
            {leftImg ? <div class="w-2/12">
                <h3 class="text-neutral-200 font-semibold text-xl mb-3">{title}</h3>
                <div class="h-[2px] w-12 bg-white/20 rounded-full my-3" />
                <p class="text-neutral-300 text-lg leading-6 mb-8">{subtitle}</p>
            </div> : <div class="w-10/12">
                <Slot />
            </div>
            }

        </div>
    );
});

