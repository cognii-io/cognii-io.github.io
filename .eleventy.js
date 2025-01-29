module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/vid");
  eleventyConfig.addPassthroughCopy("src/script.js");
  
  eleventyConfig.addCollection("caseStudies", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/cases/*.md");
  });
  
  return {
      dir: {
          input: "src",
          output: "_site",
          includes: "_includes",
      }
  };
};