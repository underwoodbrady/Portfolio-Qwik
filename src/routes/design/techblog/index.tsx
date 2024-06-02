import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualdesignproject from "~/components/UI/individualdesignproject";
import Footer from "~/components/main/footer/footer";
import Image1 from '~/media/red1.png?jsx';
import Image2 from '~/media/red2.png?jsx';
import Image3 from '~/media/red3.png?jsx';

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