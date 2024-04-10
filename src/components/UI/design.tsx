import { component$ } from "@builder.io/qwik";
import styles from "./design.module.css";
import Designproject from "./designproject";


export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex mt-12">
            <div class="absolute left-0 top-0 flex w-full justify-between items-center">
                <h2 class="text-5xl text-neutral-700 tracking-widest"><span class="font-semibold text-neutral-200 tracking-normal">design</span> portfolio</h2>
            </div>
            <div class={["flex flex-col space-y-6 relative z-20 mt-28 mb-8 w-full", styles.wrapper]}>
                <div class={styles.one}>
                    <Designproject title="Urban Wordle" colorRed={136} colorGreen={183} colorBlue={105}/>
                </div>
                <div class={styles.two}>
                    <Designproject title="Red Trade" colorRed={211} colorGreen={94} colorBlue={94} />
                </div>
                <div class={styles.three}>
                    <Designproject title="Flutter Snowcounter" colorRed={41} colorGreen={178} colorBlue={175} />
                </div>
                <div class={styles.four}>
                    <Designproject title="Simply Brackets"  colorRed={48} colorGreen={162} colorBlue={121}  />
                </div>
                <div class={styles.five}>
                    <Designproject title="Tech Blog" colorRed={188} colorGreen={172} colorBlue={57} />
                </div>
                <div class={styles.six}>
                    <Designproject title="This Website" colorRed={196} colorGreen={117} colorBlue={38}/>
                </div>
            </div>
        </section>
    );
});
