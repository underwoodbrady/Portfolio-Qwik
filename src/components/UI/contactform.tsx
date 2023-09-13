import { component$ } from "@builder.io/qwik";


export default component$(() => {
    return (
        <section class="text-white max-w-5xl mx-auto flex p-12 flex-col">
            <h3 class="text-3xl mb-12">Let's work together</h3>
            <form class="flex flex-col space-y-8">
                <input class="bg-neutral-800 py-2 text-lg"/>
                <input class="bg-neutral-800 py-2 text-lg h-32"/>
                <button class="bg-white py-2 font-semibold text-neutral-800">Send Email</button>
            </form>
        </section>
    );
});
