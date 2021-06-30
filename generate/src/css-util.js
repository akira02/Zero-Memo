const CSS_URL =
  "https://raw.githubusercontent.com/akira02/Zero-Memo/master/plurk.css";

export async function fetchCss() {
  return fetch(CSS_URL).then((res) => res.text());
}

const prefix = "/* ==== BEGIN CONFIGURATION ==== */";
const suffix = "/* ==== END CONFIGURATION ==== */";

function generateReplacement(urls) {
  return `
body {
    /* △未模糊背景圖片 */
    --background-image-timeline: url(${urls.timeline});
    /* ☆白色模糊背景圖片 */
    --background-image-plurk: url(${urls.plurk});
    /* ★黑色模糊背景圖片 */
    --background-image-dashboard: url(${urls.dashboard});
}
`;
}

export function updateCss(css, urls) {
  const begin = css.indexOf(prefix);
  if (begin == -1) {
    throw new Error("prefix string not found");
  }
  const end = css.indexOf(suffix, begin + prefix.length);
  if (end == -1) {
    throw new Error("suffix string not found");
  }
  const replacement = generateReplacement(urls);
  return css.slice(0, begin + prefix.length) + replacement + css.slice(end);
}
