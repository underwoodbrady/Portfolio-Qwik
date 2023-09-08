import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/UI/hero";

export default component$(() => {
  return (
    <>
      <Hero/>
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