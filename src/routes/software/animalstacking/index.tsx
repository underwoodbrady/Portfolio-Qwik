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
                This game is a work in progress and is a culmination of everything I've learned in Unity over the years. It is written entirely in C# (...) and combines object oriented programming with game design.
            </p>

            <p class="text-neutral-300 text-lg leading-6 mb-8">
                I am taking inspiration from Suika Game which involves stacking various fruits together who combine to make bigger fruits and the goal is to not have them fall out of the container. I am hoping this project pushes my previous limits in art and programming.
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