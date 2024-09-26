import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualdesignproject from "~/components/UI/individualdesignproject";
import Footer from "~/components/main/footer/footer";
import Popinimage from "~/components/UI/popinimage";
import Image1 from '~/media/tango1.png?jsx';
import Image2 from '~/media/tango3.png?jsx';
// import Image3 from '~/media/red3.png?jsx';

export default component$(() => {
  return (
    <>
        <Individualdesignproject title="Tango Social" subtitle="Front-end Developer (Design-Focused)" color="#C47526">
        <Popinimage title="Brand Identity" subtitle="I created the brand identity and color scheme for a startup still in the early stages named Tango. I based my coloring and spacing on Radix Colors and Tailwind Guidelines." leftImg>
          <Image1 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Front End Implementation" subtitle="Based on a series of designs for components and pages, I implemented the front-end design in Sveltekit, tying in to existing API's and creating new ones where needed." >
          <Image2 class="rounded-sm" />
        </Popinimage>
        {/* <Popinimage title="Step 3." subtitle="Refine and Test" leftImg>
          <Image3 class="rounded-sm" />
        </Popinimage> */}
        {/* <p class="text-neutral-500 font-semibold text-center h-[800px] py-24">This page is a work in progress</p> */}

      </Individualdesignproject>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Design - This Website",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};

