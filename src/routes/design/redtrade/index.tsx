import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      design
    </>
  );
});

export const head: DocumentHead = {
  title: "Design - [subcat]",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};