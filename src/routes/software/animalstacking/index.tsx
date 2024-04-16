import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualproject from "~/components/UI/individualproject";
import Image from '~/media/game.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualproject title="Animal Stacking Game" type="Unity2D" tools={['unity','c#']} color="#BCAC39">
      <div class="w-[620px] float-right ml-8 mb-8">
                <Image />
            </div>

            <p class="text-neutral-300 text-lg leading-6 mb-8">
                This game is a work in progress but is combining everything I've learned in unity over the years. 
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