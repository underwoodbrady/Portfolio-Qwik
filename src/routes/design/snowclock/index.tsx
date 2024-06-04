import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualdesignproject from "~/components/UI/individualdesignproject";
import Footer from "~/components/main/footer/footer";
import Popinimage from "~/components/UI/popinimage";
import Image1 from '~/media/snow1.png?jsx';
import Image2 from '~/media/snow2.png?jsx';
import Image3 from '~/media/snow4.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualdesignproject title="Flutter Snowclock" subtitle="Unity Between Mediums" color="#30A279">
        <Popinimage title="Initial Designs" subtitle="3D Print and Prototyping" leftImg>
          <Image1 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Revamped Design" subtitle="Blender Remodel + Mobile App" >
          <Image2 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Future Plans" subtitle="Mockup of future design" leftImg>
          <Image3 class="rounded-sm" />
        </Popinimage>

      </Individualdesignproject>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Design - Flutter Snowclock",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};