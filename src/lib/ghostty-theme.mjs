// コードブロック用の配色。Ghostty 標準のパレット（Tomorrow Night）をそのまま使う
const c = {
  bg: "#1d1f21",
  fg: "#eaeaea",
  comment: "#969896",
  red: "#cc6666",
  orange: "#de935f",
  yellow: "#f0c674",
  green: "#b5bd68",
  cyan: "#8abeb7",
  blue: "#81a2be",
  magenta: "#b294bb",
};

/** @type {import("shiki").ThemeRegistration} */
export default {
  name: "ghostty",
  type: "dark",
  colors: { "editor.background": c.bg, "editor.foreground": c.fg },
  tokenColors: [
    { settings: { foreground: c.fg } },
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: c.comment, fontStyle: "italic" } },
    { scope: ["keyword", "storage", "keyword.control", "storage.type", "storage.modifier"], settings: { foreground: c.magenta } },
    { scope: ["keyword.operator", "punctuation.separator.key-value"], settings: { foreground: c.cyan } },
    { scope: ["string", "string.quoted", "markup.inline.raw"], settings: { foreground: c.green } },
    { scope: ["string.regexp", "constant.character.escape", "support.constant"], settings: { foreground: c.cyan } },
    { scope: ["constant.numeric", "constant.language", "constant.other", "keyword.other.unit"], settings: { foreground: c.orange } },
    { scope: ["entity.name.function", "support.function", "meta.function-call", "variable.function"], settings: { foreground: c.blue } },
    { scope: ["entity.name.type", "entity.name.class", "support.type", "support.class", "entity.other.inherited-class"], settings: { foreground: c.yellow } },
    { scope: ["variable", "variable.parameter", "variable.other.readwrite", "entity.name.tag", "meta.tag"], settings: { foreground: c.red } },
    { scope: ["entity.other.attribute-name", "support.type.property-name", "meta.object-literal.key"], settings: { foreground: c.blue } },
    { scope: ["entity.name.section", "markup.heading"], settings: { foreground: c.blue, fontStyle: "bold" } },
    { scope: ["markup.inserted"], settings: { foreground: c.green } },
    { scope: ["markup.deleted"], settings: { foreground: c.red } },
    { scope: ["markup.changed", "meta.diff.header"], settings: { foreground: c.yellow } },
  ],
};
