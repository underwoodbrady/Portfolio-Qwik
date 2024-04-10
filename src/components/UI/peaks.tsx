import { component$ } from "@builder.io/qwik";
import peaks from "../../media/peaks.svg"




export default component$(() => {
  return (
      <div class="">
          <img src={peaks} width={5000} height={800}/>
      </div>
  );
});
