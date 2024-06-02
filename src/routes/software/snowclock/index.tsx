import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Individualproject from "~/components/UI/individualproject";
import Image from '~/media/fluttersnowclock.png?jsx';

export default component$(() => {
  return (
    <>
      <Individualproject title="Flutter Snowclock" type="Hardware + Software" tools={['flutter', 'c++', 'arduino']} color="#30A279" linkCode="https://github.com/underwoodbrady/flutter-ble-snowcounter">
        <div class="w-[620px] float-right ml-12 mb-8">
          <Image />
        </div>

        <p class="text-neutral-300 text-lg leading-6 mb-8">
          This project incorporated almost every aspect of the design process. It began as an simple idea from my brother and expanded into a physical prototype modeled in blender and 3D printed. The idea was to build a bedside clock that instead of displaying time it showed the overnight snowfall at the local ski resort.
        </p>

        <p class="text-neutral-300 text-lg leading-6 mb-8">
          Unfortunately there is no free API for snowfall so I had to web scrape and build my own using a combination of Javascript and Python. The hardware for the device was an ESP32 and a ST7789 display. I then made a mock mobile app to pair the device with using Flutter and BLE.
        </p>
      </Individualproject>
    </>
  );
});

export const head: DocumentHead = {
  title: "Software - Flutter Snowclock",
  meta: [
    {
      name: "this is a description",
      content: "this is a descripotion",
    },
  ],
};