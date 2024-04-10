import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/UI/about";

// import Peaks from "~/components/UI/peaks";

export default component$(() => {
  return (
    <>
      {/* <div class="absolute left-0 bottom-0 w-full">
        <Peaks/>
        </div> */}
      <About/>
    
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