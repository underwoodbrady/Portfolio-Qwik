import { component$ } from "@builder.io/qwik";
import styles from "./projectlist.module.css";
import Project from "~/components/UI/project";

export default component$(() => {
    return (
        <section class={[styles.wrapper, "mt-6"]}>
            <div class={[styles.one, styles.griditem]}>
                <Project title="Urban Wordle" role="Web Designer" description="Urban Wordle is a combination of the popular web app Wordle and a word list gathered from Urban Dictionary. It was made using a custom web scraper written in Python to grab 5 letter words with more than 500 likes from Urban Dictionary." tags={["python","react"]} />
            </div>
            <div class={[styles.two, styles.griditem]}>
                <Project small title="Red Trade" role="CTO - Lead Software Developer" description="Red Trade is an independent stock trading site for retail traders" tags={["pocketbase","typescript","svelte"]} />
            </div>
            <div class={[styles.three, styles.griditem]}>
                <Project title="Urban Wordle" role="Software Developer" description="Urban Wordle is a combination of the popular web app Wordle and a word list gathered from Urban Dictionary. It was made using a custom web scraper written in Python to grab 5 letter words with more than 500 likes from Urban Dictionary." tags={["pocketbase","typescript","svelte"]} />
            </div>
            <div class={[styles.four, styles.griditem]}>
                <Project title="Urban Wordle" role="Software Developer" description="Urban Wordle is a combination of the popular web app Wordle and a word list gathered from Urban Dictionary. It was made using a custom web scraper written in Python to grab 5 letter words with more than 500 likes from Urban Dictionary." tags={["pocketbase","typescript","svelte"]} />
            </div>
            <div class={[styles.five, styles.griditem]}>
                <Project title="Urban Wordle" role="Software Developer" description="Urban Wordle is a combination of the popular web app Wordle and a word list gathered from Urban Dictionary. It was made using a custom web scraper written in Python to grab 5 letter words with more than 500 likes from Urban Dictionary." tags={["pocketbase","typescript","svelte"]} />
            </div>
            <div class={[styles.six, styles.griditem]}>
                <Project title="Urban Wordle" role="Software Developer" description="Urban Wordle is a combination of the popular web app Wordle and a word list gathered from Urban Dictionary. It was made using a custom web scraper written in Python to grab 5 letter words with more than 500 likes from Urban Dictionary." tags={["pocketbase","typescript","svelte"]} />
            </div>
        </section>
    );
});
