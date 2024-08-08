import { component$, useSignal, $ } from "@builder.io/qwik";
import NameDraft from "../../../media/logotemp-mountains2.png";
import Resume from "../../../media/document-text.svg";
import Menu from "../../../media/menu.svg";
import Close from "../../../media/close.svg";
import { Link } from '@builder.io/qwik-city';



export default component$(() => {
  const mobileMenuOpen = useSignal(false);

  const flipMenu = $(() => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    console.log(mobileMenuOpen.value)
  })

  return (
    <header class="relative flex w-full max-w-7xl mx-auto justify-between items-baseline mt-8 lg:items-center lg:mt-6 text-md z-30">
      <div class="">
        <Link href="/" title="Brady Underwood">
          <img src={NameDraft} width={100} height={40} />
        </Link>
      </div>
      <nav class="flex space-x-16 items-center">
        <ul class={"absolute justify-around flex-col space-y-4 text-right top-12 right-0 lg:relative lg:space-y-0 lg:flex lg:flex-row lg:space-x-12 lg:text-left lg:top-0 " + (mobileMenuOpen.value ? " bg-[rgb(24,24,24)] pl-4" : "hidden")}>
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
        <a download="BradyUnderwoodResume.pdf" href="/BradyUnderwoodResume-S.pdf" class="hidden lg:flex cursor-pointer bg-white text-[rgb(24,24,24)] hover:bg-neutral-200 transition-colors duration-100  py-3 px-4 font-semibold rounded-sm">
          <img src={Resume} alt="Resume Icon" width={16} height={16} class="mr-2" />
          download CV
        </a>
        <button class="absolute top-0 right-0 lg:hidden" onClick$={flipMenu}>
          {mobileMenuOpen.value ?
            <img src={Close} alt="Close Icon" width={24} height={24} />
            :
            <img src={Menu} alt="Menu Icon" width={24} height={24} />
          }
        </button>
      </nav>
    </header>
  );
});
