import { renderStyles } from "visual/utils/cssStyle";

export function style(v, vs, vd) {
  const styles = {
    ".brz &&:hover": {
      standart: [
        "cssStyleElementTableWidth",
        "cssStyleBorder",
        "cssStyleBoxShadow"
      ]
    },
    ".brz &&:hover .brz-table__tr:nth-child(2n + 1) .brz-table__td": {
      standart: ["cssStyleBgColor"]
    },
    ".brz &&:hover .brz-table__tr:nth-child(even) .brz-table__td": {
      standart: ["cssStyleElementTableEvenBgColor"]
    },
    ".brz &&:hover .brz-table__td": {
      standart: ["cssStyleBorder", "cssStyleTablePadding"]
    },
    ".brz &&:hover .brz-table__th": {
      standart: ["cssStyleBorder"]
    },
    ".brz &&:hover .brz-table__head > .brz-table__tr > .brz-table__aside:first-child": {
      standart: ["cssStyleElementTableAsideWidth"]
    },
    ".brz &&:hover .brz-table__head > .brz-table__tr > .brz-table__th": {
      standart: ["cssStyleElementTableAsideAllWidth"]
    },
    ".brz &&:hover .brz-table__body > .brz-table__tr > .brz-table__aside:first-child": {
      standart: ["cssStyleElementTableAsideWidth"]
    },
    ".brz &&:hover .brz-table__body > .brz-table__tr > .brz-table__th": {
      standart: ["cssStyleElementTableAsideAllWidth"]
    }
  };

  return renderStyles({ v, vs, vd, styles });
}
