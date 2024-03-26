import { component$ } from "@builder.io/qwik";
import mountains from "../../media/SVG/mountainfront.svg"




export default component$(() => {
  return (
      <div class="">
          <img src={mountains} width={5000} height={800}/>
      </div>
  );
});
