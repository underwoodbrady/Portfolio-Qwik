import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualproject from "~/components/UI/individualproject";
import Image from '~/media/animalstacking.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualproject title="Animal Stacking Game" tools={['unity','c#']} color="#BCAC39">
      <div class="w-[620px] float-right ml-12 mb-8">
                <Image />
            </div>

            <p class="text-neutral-300 text-base lg:text-lg leading-6 mb-8">
                This game is a work in progress and is a culmination of things I've learned in Unity over the years. It is written entirely in C# with the artwork and animations created in Adobe Illustrator. With this project I am combining what I have learned in object oriented programming with game design.
            </p>

            <p class="text-neutral-300 text-base lg:text-lg leading-6 mb-8">
                I am taking inspiration from Suika Game which involves stacking various fruits together which combine to make bigger fruits without having them fall out of the container. Instead of fruits you will combine farm animals with a twist that some don't get along with one another.
            </p>
      </Individualproject>
    </>
  );
});

export const head: DocumentHead = {
  title: "Software - Animal Stacking Game",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};