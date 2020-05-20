import DOMPurify from "dompurify";
import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

const compile = (source) => {
  return DOMPurify.sanitize(marked(source));
};

export { compile };
