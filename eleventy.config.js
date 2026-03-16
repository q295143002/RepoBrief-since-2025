/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // Homepage is index.html; ignore index.md (export script may write it)
  eleventyConfig.ignores.add("index.md");
};
