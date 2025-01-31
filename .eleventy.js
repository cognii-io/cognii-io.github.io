module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/vid");
  eleventyConfig.addPassthroughCopy("src/script.js");
  
  eleventyConfig.addCollection("caseStudies", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/cases/*.md");
  });
  
  eleventyConfig.addCollection("solutions", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/solutions/*.md")
    .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  return {
      dir: {
          input: "src",
          output: "_site",
          includes: "_includes",
      }
  };
};