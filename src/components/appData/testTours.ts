const testTours = [
  {
    id: "321321",
    name: "Wahiba Sands and Wadi Bani Khaled",
    duration: 2,
    durationUnit: "Days",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Wadi Shab",
    duration: 8,
    durationUnit: "Hours",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Beach Fun",
    duration: 5,
    durationUnit: "Days",
    city: "Khasab",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "rejected",
  },
  {
    id: "321321",
    name: "Camel Watching",
    duration: 3,
    durationUnit: "Days",
    city: "Salalah",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Wahiba Sands and Wadi Bani Khaled",
    duration: 2,
    durationUnit: "Days",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "rejected",
  },
  {
    id: "321321",
    name: "Wadi Shab",
    duration: 8,
    durationUnit: "Hours",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "pending",
  },
  {
    id: "321321",
    name: "Beach Fun",
    duration: 5,
    durationUnit: "Days",
    city: "Khasab",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "pending",
  },
  {
    id: "321321",
    name: "Camel Watching",
    duration: 3,
    durationUnit: "Days",
    city: "Salalah",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "unpublished",
  },
  {
    id: "321321",
    name: "Wahiba Sands and Wadi Bani Khaled",
    duration: 2,
    durationUnit: "Days",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Wadi Shab",
    duration: 8,
    durationUnit: "Hours",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "unpublished",
  },
  {
    id: "321321",
    name: "Beach Fun",
    duration: 5,
    durationUnit: "Days",
    city: "Khasab",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Camel Watching",
    duration: 3,
    durationUnit: "Days",
    city: "Salalah",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Wahiba Sands and Wadi Bani Khaled",
    duration: 2,
    durationUnit: "Days",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Wadi Shab",
    duration: 8,
    durationUnit: "Hours",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Beach Fun",
    duration: 5,
    durationUnit: "Days",
    city: "Khasab",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Camel Watching",
    duration: 3,
    durationUnit: "Days",
    city: "Salalah",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Wahiba Sands and Wadi Bani Khaled",
    duration: 2,
    durationUnit: "Days",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Wadi Shab",
    duration: 8,
    durationUnit: "Hours",
    city: "Muscat",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Beach Fun",
    duration: 5,
    durationUnit: "Days",
    city: "Khasab",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
  {
    id: "321321",
    name: "Camel Watching",
    duration: 3,
    durationUnit: "Days",
    city: "Salalah",
    overview:
      "The Sharqiah Sands or Wahiba sands Oman were named after bani Wahiba tribe who still leave there with their old life style .the Area extends to 180 km north to south and 80 km east to west with area of 12500 square kilometers. The dunes extend about 100 km high and 170 km long.",
    status: "published",
  },
];

export default testTours;
