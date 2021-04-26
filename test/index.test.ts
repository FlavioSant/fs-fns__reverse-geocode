import { getAddressByLocation } from "../src";

describe("reverseGeocode", () => {
  const lat = -23.5475;
  const lon = -46.63611;

  const expected = {
    place_id: 59225845,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "node",
    osm_id: 5083801041,
    lat: "-23.5475156",
    lon: "-46.6360995",
    display_name:
      "62, Praça do Patriarca, Glicério, Sé, São Paulo, Região Imediata de São Paulo, Região Metropolitana de São Paulo, Região Geográfica Intermediária de São Paulo, São Paulo, Região Sudeste, 01002-010, Brasil",
    address: {
      house_number: "62",
      road: "Praça do Patriarca",
      suburb: "Glicério",
      city: "São Paulo",
      municipality: "Região Imediata de São Paulo",
      county: "Região Metropolitana de São Paulo",
      state_district: "Região Geográfica Intermediária de São Paulo",
      state: "São Paulo",
      region: "Região Sudeste",
      postcode: "01002-010",
      country: "Brasil",
      country_code: "br",
    },
    boundingbox: ["-23.5475656", "-23.5474656", "-46.6361495", "-46.6360495"],
  };

  it("getAddressByLocation", async () => {
    expect.assertions(1);
    const location = await getAddressByLocation(lat, lon);
    expect(location).toEqual(expected);
  });
});
