import qs from "qs";

export const useStrapi = () => {
  const getHome = async () => {
    const sqString = qs.stringify({
      populate: {
        photos: {
          populate: "image.formats",
        },
        sections: {
          populate: { cover: { populate: "image.formats" } },
        },
      },
    });
    const request = new Request(
      `${import.meta.env.STRAPI_URL}/api/home?${sqString}`
    );
    const response = await fetch(request, {
      method: "GET",
    });
    return await response.json();
  };

  const getSectionsUrl = async (): Promise<string[]> => {
    const sqString = qs.stringify({
      populate: {
        sections: {
          fields: "url",
        },
      },
    });
    const request = new Request(
      `${import.meta.env.STRAPI_URL}/api/home?${sqString}`
    );
    const response = await fetch(request, {
      method: "GET",
    });
    const home = await response.json();
    return home.sections.data.map(
      ({ attributes }: { attributes: { url: string } }) => attributes.url
    );
  };

  const getSectionDetails = async (url: string): Promise<any[]> => {
    const request = new Request(
      `${import.meta.env.STRAPI_URL}/api/sections?${qs.stringify(
        {
          filters: {
            url: { ["$eq"]: url },
          },
          populate: {
            photos: {
              populate: "image.formats",
            },
            cover: {
              populate: "image.formats",
            },
          },
        },
        { encodeValuesOnly: true }
      )}`
    );
    const response = await fetch(request, {
      method: "GET",
    });
    const sectionDetails = await response.json();
    return sectionDetails.data;
  };

  return {
    getHome,
    getSectionsUrl,
    getSectionDetails,
  };
};
