import { writable } from "svelte/store";

// Default string 😅

const base =
  "# Markdownise v1.0 \uD83D\uDE80\r\n## By [GGKpanadze](https://github.com/GGKapanadze)\r\n---\r\n\r\n### Headings \uD83D\uDCC3\r\n\r\n# Heading 1\r\n## Heading 2\r\n### Heading 3\r\n\r\n\r\n---\r\n### Code blocks \uD83D\uDCBB\r\n\r\n```php\r\nclass Dog extends Animal{\r\n\tpublic $name;\r\n\t\r\n\tpublic function __construct(String $name){\r\n\t\t$this->name = name;\r\n\t}\r\n}\r\n```\r\n\r\n```javascript\r\nconst log = (item) => console.log(item)\r\n```\r\n\r\n\r\n`You can do like this too.`\r\n\r\n---\r\n\r\n\r\n### Text \uD83D\uDCF0\r\n\r\nEmphasis, aka italics, with *asterisks* or _underscores_.\r\n\r\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\r\n\r\nCombined emphasis with **asterisks and _underscores_**.\r\n\r\nStrikethrough uses two tildes. ~~Scratch this.~~\r\n\r\n\r\n---\r\n\r\n### Lists \uD83C\uDF61\r\n\r\n1. First ordered list item\r\n2. Another item\r\n  * Unordered sub-list. \r\n1. Actual numbers don't matter, just that it's a number\r\n  1. Ordered sub-list\r\n4. And another item.\r\n\r\n\r\n* Unordered list can use asterisks\r\n- Or minuses\r\n+ Or pluses\r\n\r\n---\r\n\r\n\r\n### Links \uD83D\uDEE9\r\n\r\n[Google](https://google.com)\r\n\r\n\r\n### Tables \uD83C\uDFC1\r\n\r\n\r\n| Tables   |      Are      |  Cool |\r\n|----------|:-------------:|------:|\r\n| col 1 is |  left-aligned | $1600 |\r\n| col 2 is |    centered   |   $12 |\r\n| col 3 is | right-aligned |    $1 |\r\n";
const sourceValue = localStorage.getItem("source") || base;

const source = writable(sourceValue);

export { source };
