import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualdesignproject from "~/components/UI/individualdesignproject";
import Footer from "~/components/main/footer/footer";
// import Popinimage from "~/components/UI/popinimage";
// import Image1 from '~/media/red1.png?jsx';
// import Image2 from '~/media/red2.png?jsx';
// import Image3 from '~/media/red3.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualdesignproject title="Urban Wordle" subtitle="UI and Software Design" color="#88B769">
        {/* <Popinimage title="Step 1." subtitle="Define and Ideate" leftImg>
          <Image1 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Step 2." subtitle="Prototype" >
          <Image2 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Step 3." subtitle="Refine and Test" leftImg>
          <Image3 class="rounded-sm" />
        </Popinimage> */}
        <p class="text-neutral-500 font-semibold text-center h-[800px] py-24">Sorry! This page is currently being updated</p>
      </Individualdesignproject>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Design - Urban Wordle",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};