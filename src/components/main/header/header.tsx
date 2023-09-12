import { component$ } from "@builder.io/qwik";
import NameDraft from "../../../media/logotemp.png";
import { Link } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <header class="flex w-full max-w-5xl mx-auto justify-between items-center my-5 text-sm">
      <div class="">
        <Link href="/" title="Brady">
          <img src={NameDraft} width={110} height={50} />

        </Link>
      </div>
      <nav class="flex space-x-16 items-center">
        <ul class="flex justify-around space-x-12">
          <li>
            <Link
              href="/software"
              class="text-white"
            >
              software
            </Link>
          </li>
          <li>
            <Link
              href="/design"
              class="text-white"
            >
              design
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              class="text-white"
            >
              about
            </Link>
          </li>
        </ul>
        <button class="bg-white rounded-sm text-black py-2 px-4 font-semibold">
          download CV
        </button>
      </nav>

    </header>
  );
});
