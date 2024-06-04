import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualproject from "~/components/UI/individualproject";
import Image from '~/media/redtradesingle.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualproject title="Red Trade" tools={['react', 'tailwind', 'nodejs', 'sql']} color="#D35E5E" linkCode="https://github.com/underwoodbrady/RedTrade">
        <div class="w-[620px] float-right ml-12 mb-8">
          <Image />
        </div>

        <p class="text-neutral-300 text-base lg:text-lg leading-6 mb-8">
          Red Trade is a stock portfolio visualization that I created for the Big Idea Challenge at Montana State University to highlight innovation that is possible in customizable dashboards. I designed drag and drop modules to make analyzing a portfolio as easy as possible. This allows for the tracking of specific news feeds, industries, or individual stock performance.
        </p>

        <p class="text-neutral-300 text-base lg:text-lg leading-6 mb-8">
        My program gathers information from your preferred brokerage and then displays it in an understandable way, combined with general stock and news data. It is currently a proof of concept but received funding for further development. It was made using React + TailwindCSS for the frontend with a Nodejs server and SQL database to communicate with.
        </p>
      </Individualproject>
    </>
  );
});

export const head: DocumentHead = {
  title: "Software - Red Trade",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};