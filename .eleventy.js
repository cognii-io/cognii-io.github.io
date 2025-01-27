module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/vid");
  eleventyConfig.addPassthroughCopy("src/script.js");
  
  return {
      dir: {
          input: "src",
          output: "_site",
          includes: "_includes"
      }
  };
};