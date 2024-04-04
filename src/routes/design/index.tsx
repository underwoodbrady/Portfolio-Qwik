import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Design from "~/components/UI/design";

/*import Counter from "~/components/starter/counter/counter";*/

export default component$(() => {
  return (
    <>

      <Design/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | Design",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};