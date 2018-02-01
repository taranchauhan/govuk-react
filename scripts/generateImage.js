import { generateImage as gi } from "@penx/component-image";
import path from "path";
import renderGlamorous from "render-glamorous";

const generateImage = (component, config) =>
  gi(component, {
    stylesheet: path.join(
      __dirname,
      "../node_modules/normalize.css/normalize.css"
    ),
    // TODO: no-sandbox has security issues and should only be enabled on Travis
    // https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
    // https://docs.travis-ci.com/user/chrome#Sandboxing
    puppeteer: { args: ["--no-sandbox", "--disable-setuid-sandbox"] },
    renderer: renderGlamorous,
    ...config
  });

export default generateImage;
