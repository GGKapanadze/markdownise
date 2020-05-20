import CodeMirror from "codemirror";

import "./codemirror.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/php/php.js";
import "codemirror/mode/ruby/ruby.js";
import "codemirror/theme/material.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/markdown/markdown.js";
import "codemirror/mode/gfm/gfm.js";
import "codemirror/addon/edit/closebrackets.js";
import "codemirror/addon/edit/closetag.js";

const config = {
  lineNumbers: true,
  highlightFormatting: true,
  maxBlockquoteDepth: true,
  xml: true,
  fencedCodeBlockHighlighting: true,
  mode: "gfm",
  lineWrapping: true,
  indentWithTabs: true,
  indentUnit: 2,
  tabSize: 2,
  theme: "material",
  autoCloseBrackets: true,
  autoCloseTags: true,
  strikethrough: true,
  taskLists: true,
};

export { config, CodeMirror };
