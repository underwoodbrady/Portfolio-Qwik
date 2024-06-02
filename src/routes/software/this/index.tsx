import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualproject from "~/components/UI/individualproject";
import Image from '~/media/web.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualproject title="This Website" type="Frontend" tools={['qwik', 'tailwind']} color="#C47526" linkCode="https://github.com/underwoodbrady/Portfolio-Qwik">
        <div class="w-[620px] float-right ml-12 mb-8">
          <Image />
        </div>

        <p class="text-neutral-300 text-lg leading-6 mb-8">
          The goal of this website from a software perspective was to experiment with the cutting edge technology in website performance with Qwik.js. This website is relatively simple in terms of the amount of javascript it has to load so it would likely perform well with any framework. However, it was interesting to learn about how Qwik works and what Edge servers even are.
        </p>

        <p class="text-neutral-300 text-lg leading-6 mb-8">
          There are still several areas in the app where I did not use the most efficient method (ex. the smoke animation) but over time I am hoping to simplify and speedup the codebase as much as possible while still adding features.
        </p>
      </Individualproject>
    </>
  );
});

export const head: DocumentHead = {
  title: "Software - This Website",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};