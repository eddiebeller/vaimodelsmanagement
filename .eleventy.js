const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt, sizes = '100vw') {
	if (alt === undefined) {
		// You bet we throw an error on missing alt (alt="" works okay)
		throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
	}

	let metadata = await Image(src, {
		widths: [300, 600],
		formats: ['webp', 'jpeg', 'avif'],
		urlPath: './src/assets/',
		outputDir: './src/assets/',
	});

	let lowsrc = metadata.jpeg[0];

	return `<picture>
    ${Object.values(metadata)
			.map((imageFormat) => {
				return `  <source type="${
					imageFormat[0].sourceType
				}" srcset="${imageFormat
					.map((entry) => entry.srcset)
					.join(', ')}" sizes="${sizes}">`;
			})
			.join('\n')}
      <img
        src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addWatchTarget('./src/sass/');
	eleventyConfig.addPassthroughCopy('src/assets');

	eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
	eleventyConfig.addLiquidShortcode('image', imageShortcode);
	eleventyConfig.addJavaScriptFunction('image', imageShortcode);

	return {
		dir: {
			input: 'src',
			output: 'public',
			data: 'data',
		},
		passthroughFileCopy: true,
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		templateFormats: ['md', 'njk'],
	};
};
