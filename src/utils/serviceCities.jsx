const cities = [
    { city: "Aguascalientes", country: "México", countryCode: "MX"},
    { city: "Tokyo", country: "Japon", countryCode: "JP"},
    { city: "Madrid", country: "España", countryCode: "ES"},
    { city: "Londres", country: "Inglaterra", countryCode: "ENG"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)