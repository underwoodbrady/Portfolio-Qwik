import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/UI/hero";
import Canvas from "~/components/animations/canvas";
import MountainsBack from "~/components/animations/mountainsback";
import MountainsFront from "~/components/animations/mountainsfront";

export default component$(() => {
  return (
    <>
      <div class="absolute -bottom-2 w-[calc(100%+8rem)] -left-[4rem]">
        <MountainsBack />
      </div>
      <Canvas />
      <div class="absolute -bottom-2 w-[calc(100%+8rem)] -left-[4rem]">
        <MountainsFront />
      </div>
      <Hero />
      {/* <ProjectList />
      <ContactForm /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | Freelance Web Developer",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};