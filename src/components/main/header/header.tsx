import { component$ } from "@builder.io/qwik";
import NameDraft from "../../../media/NameDraftShort.png";
import { Link } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <header class="flex w-full max-w-5xl mx-auto justify-between items-center my-5">
      <div class="">
        <Link href="/" title="Brady">
          <img src={NameDraft} width={80} height={50} />

        </Link>
      </div>
      <ul class="flex justify-around space-x-12">
        <li>
          <Link
            href="/software"
            class="text-white font-['Helvetica Neue']"
          >
            Software
          </Link>
        </li>
        <li>
          <Link
            href="/design"
            class="text-white"
          >
            Design
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            class="text-white"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
});
