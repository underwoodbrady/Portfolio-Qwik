import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Software from "~/components/UI/software";

/*import Counter from "~/components/starter/counter/counter";*/

export default component$(() => {
  return (
    <>
      <Software/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | Software",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};