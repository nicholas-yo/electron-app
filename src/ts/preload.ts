/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string): void => {
    const element: HTMLSpanElement = document.getElementById(selector) as HTMLSpanElement;
    if (element) element.innerText = text as string;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type] as string);
  }
});
