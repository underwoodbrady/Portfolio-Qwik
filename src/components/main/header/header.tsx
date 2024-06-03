import { component$ } from "@builder.io/qwik";
import NameDraft from "../../../media/logotemp-mountains2.png";
import NameDraftWhite from "../../../media/logotemp-white.svg";
import Resume from "../../../media/document-text.svg";
import { Link } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <header class="relative flex w-full max-w-7xl mx-auto justify-between items-center mt-6 text-md z-30">
      <div class="">
        <Link href="/" title="Brady Underwood">
          <img src={NameDraft} width={100} height={50} />
        </Link>
      </div>
      <nav class="flex space-x-16 items-center">
        <ul class="flex justify-around space-x-12">
          {/* <li>
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
              class="text-neutral-100 hover:text-neutral-300 transition-colors duration-100"
            >
              software
            </Link>
          </li>
          <li>
            <Link
              href="/design"
              class="text-neutral-100 hover:text-neutral-300 transition-colors duration-100"
            >
              design
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              class="text-neutral-100 hover:text-neutral-300 transition-colors duration-100"
            >
              about
            </Link>
          </li>
        </ul>
        <a download="BradyUnderwoodResume.pdf" href="/BradyUnderwood.pdf" class="flex cursor-pointer bg-white text-[rgb(24,24,24)] hover:bg-neutral-200 transition-colors duration-100  py-3 px-4 font-semibold rounded-sm">
          <img src={Resume} alt="Resume Icon" width={16} height={16} class="mr-2"/>
          download CV
        </a>
      </nav>

    </header>
  );
});
