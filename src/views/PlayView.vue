<script setup>
import "rrweb-player/dist/style.css";
import rrwebPlayer from "rrweb-player";
import { useRecordStore } from "../stores/record.js";

import { onMounted, ref } from "vue";
const store = useRecordStore();
const videoRef = ref(null);
// const events = [
//   {
//     type: 3,
//     data: {
//       source: 0,
//       texts: [],
//       attributes: [
//         {
//           id: 249,
//           attributes: {
//             style: {
//               "transition-duration": "400ms",
//               transform: "translateX(-2310px) translateY(0px) translateZ(1px)",
//             },
//           },
//         },
//         {
//           id: 250,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 257,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 264,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 271,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 278,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 285,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//       ],
//       removes: [],
//       adds: [],
//     },
//     timestamp: 1665653477319,
//   },
//   {
//     type: 3,
//     data: {
//       source: 0,
//       texts: [],
//       attributes: [
//         {
//           id: 294,
//           attributes: {
//             class: "dot",
//           },
//         },
//         {
//           id: 295,
//           attributes: {
//             class: "dot active",
//           },
//         },
//       ],
//       removes: [],
//       adds: [],
//     },
//     timestamp: 1665653477386,
//   },
//   {
//     type: 3,
//     data: {
//       source: 0,
//       texts: [],
//       attributes: [
//         {
//           id: 249,
//           attributes: {
//             style: {
//               "transition-duration": "0ms",
//             },
//           },
//         },
//       ],
//       removes: [],
//       adds: [],
//     },
//     timestamp: 1665653477729,
//   },
//   {
//     type: 3,
//     data: {
//       source: 0,
//       texts: [],
//       attributes: [
//         {
//           id: 250,
//           attributes: {
//             style: {
//               "pointer-events": "auto",
//             },
//           },
//         },
//         {
//           id: 257,
//           attributes: {
//             style: {
//               "pointer-events": "auto",
//             },
//           },
//         },
//         {
//           id: 264,
//           attributes: {
//             style: {
//               "pointer-events": "auto",
//             },
//           },
//         },
//         {
//           id: 271,
//           attributes: {
//             style: {
//               "pointer-events": "auto",
//             },
//           },
//         },
//         {
//           id: 278,
//           attributes: {
//             style: {
//               "pointer-events": "auto",
//             },
//           },
//         },
//         {
//           id: 285,
//           attributes: {
//             style: {
//               "pointer-events": "auto",
//             },
//           },
//         },
//       ],
//       removes: [],
//       adds: [],
//     },
//     timestamp: 1665653477730,
//   },
//   {
//     type: 3,
//     data: {
//       source: 1,
//       positions: [
//         {
//           x: 490,
//           y: 30,
//           id: 402,
//           timeOffset: 0,
//         },
//       ],
//     },
//     timestamp: 1665653480183,
//   },
//   {
//     type: 3,
//     data: {
//       source: 0,
//       texts: [],
//       attributes: [
//         {
//           id: 249,
//           attributes: {
//             style: {
//               "transition-duration": "400ms",
//               transform: "translateX(-3080px) translateY(0px) translateZ(1px)",
//             },
//           },
//         },
//         {
//           id: 250,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 257,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 264,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 271,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 278,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//         {
//           id: 285,
//           attributes: {
//             style: {
//               "pointer-events": "none",
//             },
//           },
//         },
//       ],
//       removes: [],
//       adds: [],
//     },
//     timestamp: 1665653480736,
//   },
//   {
//     type: 3,
//     data: {
//       source: 0,
//       texts: [],
//       attributes: [
//         {
//           id: 295,
//           attributes: {
//             class: "dot",
//           },
//         },
//         {
//           id: 296,
//           attributes: {
//             class: "dot active",
//           },
//         },
//       ],
//       removes: [],
//       adds: [],
//     },
//     timestamp: 1665653480802,
//   },
// ];
onMounted(() => {
  const records = store.getRecord;
  if (videoRef.value && records) {
    const player = new rrwebPlayer({
      target: videoRef.value,
      props: {
        events: records,
        width: 540,
        height: 450,
      },
    });
    player.play();
  }
});
</script>

<template>
  <div class="play" ref="videoRef"></div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
