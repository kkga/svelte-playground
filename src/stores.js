import { writable } from "svelte/store";

import Heading from "./Heading.svelte";
import Div from "./Div.svelte";
import Paragraph from "./Paragraph.svelte";

export const selectedElement = writable(null);

export const tree = writable([
  {
    component: Div,
    props: {},
    content: [
      {
        component: Heading,
        props: {
          level: 1,
        },
        content: "Hello",
      },
      {
        component: Paragraph,
        props: {},
        content: "some text",
      },
    ],
  },
  {
    component: Div,
    props: {},
    content: [
      {
        component: Heading,
        props: {
          level: 2,
        },
        content: "Hello again!",
      },
      {
        component: Paragraph,
        props: {},
        content: "some more text",
      },
    ],
  },
]);
