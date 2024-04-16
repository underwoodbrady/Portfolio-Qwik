import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualproject from "~/components/UI/individualproject";
import Image from '~/media/adafruitgfxdemo.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualproject title="Adafruit GFX Visual Editor" type="Frontend" tools={['svelte', 'typescript', 'arduino', 'rust']} color="#88B769">
        <div class="w-[620px] float-right ml-8 mb-8">
          <Image />
        </div>

        <p class="text-neutral-300 text-lg leading-6 mb-8">
          Adafruit GFX Visual Editor is an online HTML canvas based visual editing software that converts your designs directly into Arduino code compatible with most microcontrollers and displays.

          It is available online for free or you can run on your own computer.
        </p>
        <p class="text-neutral-300 text-lg leading-6 mb-8">
          It is created with Svelte and all the code for the data structures is written in typescript. It works using HTML canvas as a base and then creating a "virtual" canvas on top which stores all the shapes as objects. It thens maps that virtual canvas down to the HTML canvas to show to the user.
        </p>
      </Individualproject>
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | Software - Rabble Messaging App",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};