export const getDataAttributes = <T>(entity: { data: { attributes: T } }) => {
  return entity?.data?.attributes;
};

const imageFormatSizes = ["thumbnail", "small", "medium", "large", "original"];

export const getImageUrlFromFormat = (
  image: any,
  format: "thumbnail" | "small" | "medium" | "large" | "original"
) => {
  if (!image) return null;
  if (format === "original") return image.url;
  else {
    let imageUrl = image.formats[format].url;
    if (!imageUrl) {
      imageUrl = image.formats[imageFormatSizes.indexOf(format) + 1].url;
    }
    return imageUrl;
  }
};
