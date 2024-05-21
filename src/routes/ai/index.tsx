import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Ai from "~/components/UI/ai.jsx";
import Footer from "~/components/main/footer/footer";

/*import Counter from "~/components/starter/counter/counter";*/

export default component$(() => {
  return (
    <>
      <Ai/>
      <Footer/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | AI",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};