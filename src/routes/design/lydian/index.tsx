import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualdesignproject from "~/components/UI/individualdesignproject";
import Footer from "~/components/main/footer/footer";
import Popinimage from "~/components/UI/popinimage";
import Image1 from '~/media/envestnet1.png?jsx';
import Image2 from '~/media/envestnet2.png?jsx';
// import Image3 from '~/media/red3.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualdesignproject title="Envestnet Lydian" subtitle="Mobile Financial Literacy" color="#BCAC39">
        <Popinimage title="Low-fidelity Wireframes" subtitle="Used Figma to create low-fidelity wireframes representing the core user flow through the app" leftImg>
          <Image1 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="High-fidelity Mockup" subtitle="Created a higher fidelity mockup of the required pages in Figma and Illustrator" >
          <Image2 class="rounded-sm" />
        </Popinimage>
        {/* <Popinimage title="Live Prototype" subtitle="Built a live prototype in React Native using navigation libraries and redux" leftImg>
          <Image3 class="rounded-sm" />
        </Popinimage> */}
      </Individualdesignproject>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Design - Envestnet Lydian",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};