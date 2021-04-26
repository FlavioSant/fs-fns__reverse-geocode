import axios from "axios";

export const getAddressByLocation = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?`,
    {
      params: {
        format: "json",
        lat,
        lon,
        addressdetails: 1,
        "accept-language": "pt-BR",
      },
    }
  );

  return response.data;
};
