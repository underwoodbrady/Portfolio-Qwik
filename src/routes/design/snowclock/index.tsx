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
      <Individualdesignproject title="Snow Clock" subtitle="Unity Between Mediums" color="#30A279">
        <div class="flex justify-between space-x-8 mb-24">
          <div class="w-10/12">
            <Image1 class="rounded-sm" />
          </div>
          <div class="w-2/12">
            <h3 class="text-neutral-200 font-semibold text-xl mb-3">Step 1.</h3>
            <div class="h-[2px] w-12 bg-white/20 rounded-full my-3" />
            <p class="text-neutral-300 text-lg leading-6 mb-8">Define and Ideate</p>
          </div>
        </div>
        <div class="flex justify-between space-x-8 mb-24">
          <div class="w-2/12">
            <h3 class="text-neutral-200 font-semibold text-xl mb-3">Step 2.</h3>
            <div class="h-[2px] w-12 bg-white/20 rounded-full my-3" />
            <p class="text-neutral-300 text-lg leading-6 mb-8">Prototype</p>
          </div>
          <div class="w-10/12">
            <Image2 class="rounded-sm" />
          </div>

        </div>
        <div class="flex justify-between space-x-8 mb-12">
          <div class="w-10/12">
            <Image3 class="rounded-sm" />
          </div>
          <div class="w-2/12">
            <h3 class="text-neutral-200 font-semibold text-xl mb-3">Step 3.</h3>
            <div class="h-[2px] w-12 bg-white/20 rounded-full my-3" />
            <p class="text-neutral-300 text-lg leading-6 mb-8">Refine and Test</p>
          </div>
        </div>
      </Individualdesignproject>
      <Footer />
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