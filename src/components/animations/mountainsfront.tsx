import { component$ } from "@builder.io/qwik";
import mountains from "../../media/SVG/SVG/m2.svg"




export default component$(() => {
  return (
      <div class="">
          <img src={mountains} width={5000} height={800}/>
      </div>
  );
});
