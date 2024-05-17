import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/UI/about";


export default component$(() => {
  return (
    <>
      <About/>
      {/* <div class="relative w-[calc(100%+96px)] h-16 -mx-12 mt-12" style=" background-image: url('/profilebackground5.svg');background-repeat: repeat-x;background-size:220px;"></div> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | About Me",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};