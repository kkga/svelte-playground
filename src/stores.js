import { writable } from "svelte/store";

import Heading from "./Heading.svelte";
import Div from "./Div.svelte";
import Paragraph from "./Paragraph.svelte";

export const selectedElement = writable(null);

export const tree = writable([
  {
    component: Div,
    content: "",
    children: [
      {
        component: Heading,
        content: "Hello",
      },
      {
        component: Paragraph,
        content: "some text",
      },
    ],
  },
  {
    component: Div,
    content: "",
    children: [
      {
        component: Heading,
        content: "Hello again!",
      },
      {
        component: Paragraph,
        content: "some more text",
      },
    ],
  },
]);
