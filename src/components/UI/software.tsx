import { component$ } from "@builder.io/qwik";
import SoftwareProject from "./softwareproject";

export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex mt-12">
            <div class="absolute left-0 top-0 flex w-full justify-between items-center">
                <h2 class=" text-5xl text-neutral-700 tracking-widest"><span class="text-neutral-200 tracking-normal font-semibold">software</span> projects</h2>
            </div>
            <div class="flex flex-col space-y-8 relative z-20 mt-28 mb-8 w-full">

                <SoftwareProject title="Rabble™ Messaging App" role="Sveltekit, Pocketbase" color="#29B2AF" link="rabble" stars={10} starslink="https://github.com/underwoodbrady/pocketbase-svelte-demo"/>
                <SoftwareProject title="Red Trade" role="React, Node.js, SQL" color="#D35E5E" link="redtrade" />
                <SoftwareProject title="Adafruit GFX Visual Editor" role="Typescript, Rust, Data Structures" color="#88B769" link="adafruitgfx" stars={3} starslink="https://github.com/underwoodbrady/Adafruit-GFX-VisualEditor"  />
                <SoftwareProject title="This Website" role="Qwik.js" color="#C47526" link="this" />
                <SoftwareProject title="Animal Stacking Game" role="Unity C# Development" color="#BCAC39" link="animalstacking" />
                <SoftwareProject title="Flutter Snowclock" role="API Design, C++ Arduino Code" color="#30A279" link="snowclock" stars={7} starslink="https://github.com/underwoodbrady/flutter-ble-snowcounter"  />
            </div>
        </section>
    );
});
