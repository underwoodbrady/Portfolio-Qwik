import { component$ } from "@builder.io/qwik";
import mountains from "../../media/mountains.svg"

export default component$(() => {
  return (
      <div class="absolute">
          <img src={mountains} width={1500} height={400} />

      </div>
  );
});
