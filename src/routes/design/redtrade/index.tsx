import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualdesignproject from "~/components/UI/individualdesignproject";
import Popinimage from "~/components/UI/popinimage";
import Footer from "~/components/main/footer/footer";
import Image1 from '~/media/red1.png?jsx';
import Image2 from '~/media/red2.png?jsx';
import Image3 from '~/media/red3.png?jsx';


export default component$(() => {
  return (
    <>
      <Individualdesignproject title="Red Trade" subtitle="Iterative Brand Design" color="#D35E5E">
        <Popinimage title="Rough Draft" subtitle="A friend and I had an idea for an automated financial advising app that is easy to use and customizable. We designed a rough draft in 2020 using just one HTML and CSS file." leftImg>
          <Image1 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Prototype" subtitle="We then build out a functional prototype in React.js which expanded on the rough draft for the Big Idea Challenge at Montana State in 2022." >
          <Image2 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Production" subtitle="After raising funding from investors at Montana State, we gathered feedback and launched a production website published in 2023 where I was the lead designer." leftImg>
          <Image3 class="rounded-sm" />
        </Popinimage>
      </Individualdesignproject>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Design - Red Trade",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};