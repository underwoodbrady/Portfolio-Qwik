import { component$ } from "@builder.io/qwik";
import SoftwareProject from "./softwareproject";

export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex mt-16">
            <h2 class="absolute left-0 top-0 uppercase font-bold text-7xl text-neutral-700">S O F T W A R E</h2>
            <div class="flex flex-col space-y-6 relative z-20 mt-44 text-white w-full">

                <SoftwareProject title="Red Trade" role="Full Stack Developer" color="#D35E5E"/>
                <SoftwareProject title="Rabble™ Instant Messaging" role="CEO/CTO" color="#29B2AF"/>
                <SoftwareProject title="Adafruit GFX Visual Editor" role="Frontend Design" color="#88B769"/>
                <SoftwareProject title="Snow Clock" role="API Design, C++ Arduino Code" color="#C47526"/>
                <SoftwareProject title="Animal Stacking Game" role="Unity C# Development" color="#BCAC39"/>
                <SoftwareProject title="This Website" role="Frontend Design" color="#30A279"/>

            </div>
        </section>
    );
});
