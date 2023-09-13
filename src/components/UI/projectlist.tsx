import { component$ } from "@builder.io/qwik";
import styles from "./projectlist.module.css";

export default component$(() => {
    return (
        <section class={styles.wrapper}>
            <div class={[styles.one, styles.griditem]}></div>
            <div class={[styles.two, styles.griditem]}></div>
            <div class={[styles.three, styles.griditem]}></div>
            <div class={[styles.four, styles.griditem]}></div>
            <div class={[styles.five, styles.griditem]}></div>
            <div class={[styles.six, styles.griditem]}></div>
        </section>
    );
});
