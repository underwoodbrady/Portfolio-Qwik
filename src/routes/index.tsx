import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/UI/hero";
import ProjectList from "~/components/UI/projectlist";
import ContactForm from "~/components/UI/contactform";
import Mountains from "~/components/animations/mountains";

export default component$(() => {
  return (
    <>
      <div class="absolute -bottom-2 w-[calc(100%+8rem)] -left-[4rem]">
          <Mountains />
      </div>
      <Hero />
      <ProjectList />
      <ContactForm />
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | Freelance Web Developer",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};