import { component$ } from "@builder.io/qwik";
import styles from "./design.module.css";
import Designproject from "./designproject";

export default component$(() => {
    return (
        <section class="relative max-w-7xl mx-auto flex mt-12">
            <div class="absolute left-0 top-0 flex w-full justify-between items-center">
                <h2 class="font-bold text-5xl text-neutral-700 tracking-widest">design work</h2>
            </div>
            <div class={["flex flex-col space-y-6 relative z-20 mt-28 mb-8 w-full", styles.wrapper]}>
                <div class={styles.one}>
                    <Designproject title="Urban Wordle" color="#29B2AF" />
                </div>
                <div class={styles.two}>
                    <Designproject title="Flutter Snowcounter" color="#29B2AF" />
                </div>
                <div class={styles.three}>
                    <Designproject title="Red Trade" color="#29B2AF" />
                </div>
                <div class={styles.four}>
                    <Designproject title="Simply Brackets" color="#29B2AF" />
                </div>
                <div class={styles.five}>
                    <Designproject title="Tech Blog" color="#29B2AF" />
                </div>
                <div class={styles.six}>
                    <Designproject title="This Website" color="#29B2AF" />
                </div>
            </div>
        </section>
    );
});
