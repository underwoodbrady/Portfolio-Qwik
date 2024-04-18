import { component$ } from "@builder.io/qwik";
import NameDraft from "../../../media/logotemp.svg";
import { Link } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <header class="relative flex w-full max-w-7xl mx-auto justify-between items-center mt-6 text-md z-30">
      <div class="">
        <Link href="/" title="Brady">
          <img src={NameDraft} width={100} height={50} />

        </Link>
      </div>
      <nav class="flex space-x-16 items-center">
        <ul class="flex justify-around space-x-12">
          {/* <li class="relative">
            <Link
              href="/ai"
              class="text-white hover:text-neutral-300 transition-colors duration-100"
            >
              ai
            </Link>
          </li> */}
          <li>
            <Link
              href="/software"
              class="text-white hover:text-neutral-300 transition-colors duration-100"
            >
              software
            </Link>
          </li>
          <li>
            <Link
              href="/design"
              class="text-white hover:text-neutral-300 transition-colors duration-100"
            >
              design
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              class="text-white hover:text-neutral-300 transition-colors duration-100"
            >
              about
            </Link>
          </li>
        </ul>
        <button class="bg-white hover:bg-neutral-300 transition-colors duration-100 rounded-sm text-black py-3 px-4 font-semibold">
          download CV
        </button>
      </nav>

    </header>
  );
});
