import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualproject from "~/components/UI/individualproject";
import RabbleImg from '~/media/rabble.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualproject title="Rabble Messaging App" type="Full-stack" tools={['sveltekit','pocketbase', 'nodejs', 'tailwind']} color="#29B2AF">
      <div class="w-[620px] float-right ml-8 mb-8">
                <RabbleImg />
            </div>

            <p class="text-neutral-300 text-lg leading-6 mb-8">
                Rabble is a real-time messaging app modeled after Discord and Slack. It has a Sveltekit frontend using SSR (Server Side Rendering) and uses TailwindCSS + DaisyUI for styling.
                User authentication and data is stored within a Pocketbase SQL-lite database and communicates with the backend through Node.js. It is currently live for testing <span class="underline">here</span> and is being hosted for free with Vercel.
            </p>

            <p class="text-neutral-300 text-lg leading-6 mb-8">
                One of the key lessons from this project was managing client-side security. The code is written so the user never is able to see or iteract with server calls directly and any client information is passed to the database through a sveltekit middle layer.
                While not implemented yet, this could allow for server side data validation and rate limiting.
            </p>
      </Individualproject>
    </>
  );
});

export const head: DocumentHead = {
  title: "Brady Underwood | Software - Rabble Messaging App",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};