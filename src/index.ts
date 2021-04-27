export const getAddressByLocation = async (lat: number, lon: number) => {
  const url = new URL("https://nominatim.openstreetmap.org");
  url.pathname = "/reverse";
  url.searchParams.append("format", "json");
  url.searchParams.append("lat", lat.toString());
  url.searchParams.append("lon", lon.toString());
  url.searchParams.append("addressdetails", "1");
  url.searchParams.append("accept-language", "pt-BR");

  const response = await fetch(url.toString());

  const data = await response.json();

  return data;
};
