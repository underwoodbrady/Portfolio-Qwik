import { component$ } from "@builder.io/qwik";
import SoftwareProject from "./softwareproject";

export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex mt-12">
            <div class="absolute left-0 top-0 flex w-full justify-between items-center">
                <h2 class="font-bold text-5xl text-neutral-700 tracking-widest">software projects</h2>
            </div>
            <div class="flex flex-col space-y-6 relative z-20 mt-28 mb-8 w-full">

                <SoftwareProject title="Rabble™ Instant Messaging" role="CEO/CTO" color="#29B2AF" />
                <SoftwareProject title="Red Trade" role="Full Stack Developer" color="#D35E5E" />
                <SoftwareProject title="Adafruit GFX Visual Editor" role="Frontend Typescript" color="#88B769" />
                <SoftwareProject title="Snow Clock" role="API Design, C++ Arduino Code" color="#C47526" />
                <SoftwareProject title="Animal Stacking Game" role="Unity C# Development" color="#BCAC39" />
                <SoftwareProject title="This Website" role="Frontend Qwik.js" color="#30A279" />

            </div>
        </section>
    );
});
