import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import Individualdesignproject from "~/components/UI/individualdesignproject";
import Footer from "~/components/main/footer/footer";
import Popinimage from "~/components/UI/popinimage";
import Image1 from '~/media/simply1.png?jsx';
import Image2 from '~/media/simply2.png?jsx';
import Image3 from '~/media/simply3.png?jsx';

export default component$(() => {

  const nav = useNavigate();

  useVisibleTask$(
    async () => {
    nav()
  }
  )

  return (
    <>
      <Individualdesignproject title="Simply Brackets" subtitle="Visual Design, Brand Identity, UX" color="#29B2AF">
         <Popinimage title="Business Model Canvas" subtitle="As part of the UX Design Class at Montana State we studied the 5 stage design process which included making this business model canvas. " leftImg>
          <Image1 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Rough Drafts and Prototypes" subtitle="We then created a high-fidelity prototype in figma using an I-Phone 14 frame. The design was started by looking at our low-fidelity prototype and finding reference images online that matched our vision." >
          <Image2 class="rounded-sm" />
        </Popinimage>
        <Popinimage title="Mock App And Test" subtitle="Lastly we mocked up the app and ran usability tests on 5 different users gathering feedback on navigation and intuitiveness." leftImg>
          <Image3 class="rounded-sm" />
        </Popinimage>
      </Individualdesignproject>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Design - Simply Brackets",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};