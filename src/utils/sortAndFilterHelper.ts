import { allProducts } from "src/api/all-products";

export const getProductsUnderPriceRange = (
  originalDataList: typeof allProducts,
  priceRange: number
) => {
  if (priceRange) {
    return originalDataList.filter(
      ({ price }: any) => Number(price) <= priceRange
    );
  }
  return originalDataList;
};

export const getSortedData = (
  productsUnderPriceRange: typeof allProducts,
  sortBy: string | null
) => {
  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
    return productsUnderPriceRange.sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
    return productsUnderPriceRange.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  if (sortBy && sortBy === "NEW_ARRIVAL") {
    productsUnderPriceRange.sort((a, b) => {
      const date1 = new Date(b.introduced_on).getTime();
      const date2 = new Date(a.introduced_on).getTime();
      return date1 > date2 ? 1 : -1;
      // return date1 - date2;
    });
  }

  if (sortBy && sortBy === "BEST_SELLER") {
    return productsUnderPriceRange.sort(
      (a, b) => Number(b.units_sold) - Number(a.units_sold)
    );
  }

  if (sortBy && sortBy === "POPULARITY") {
    return productsUnderPriceRange.sort(
      (a, b) => Number(b.product_reviews) - Number(a.product_reviews)
    );
  }

  return productsUnderPriceRange;
};

export const getFilteredData = (
  sortedData: typeof allProducts,
  {
    showMenProducts,
    showWomenProducts,
    showExtraSmallSize,
    showSmallSize,
    showMediumSize,
    showLargeSize,
    showExtraLargeSize,
    show2ExtraLargeSize,
    show3ExtraLargeSize,
    showBewakoofProducts,
    showRoadsterProducts,
    showLevisProducts,
    showTommyHilfigerProducts,
    showUnderArmourProducts,
    showSweatShirts,
    showHoodies,
    showTshirts,
    showJoggers,
    showPyjamas,
    showShorts,
    showBoxers,
    show10PercentDiscountProducts,
    show20PercentDiscountProducts,
    show30PercentDiscountProducts,
    show40PercentDiscountProducts,
    show50PercentDiscountProducts,
    show1DayDeliveryProducts,
    show7DaysDeliveryProducts,
    show15DaysDeliveryProducts,
  }: any
) => {
  const filteredMenProducts = sortedData.filter(({ gender }: any) =>
    showMenProducts ? gender === "Men" : true
  );
  const filteredWomenProducts = sortedData.filter(({ gender }) =>
    showWomenProducts ? gender === "Women" : true
  );

  const filteredGenderProducts = [
    ...(showMenProducts ? filteredMenProducts : []),
    ...(showWomenProducts ? filteredWomenProducts : []),
  ];

  const newSortedData =
    showMenProducts === true || showWomenProducts === true
      ? filteredGenderProducts
      : sortedData;

  return newSortedData
    .filter(({ sizesAvailable }) =>
      showExtraSmallSize ? sizesAvailable.includes("XS") : true
    )
    .filter(({ sizesAvailable }) =>
      showSmallSize ? sizesAvailable.includes("S") : true
    )
    .filter(({ sizesAvailable }) =>
      showMediumSize ? sizesAvailable.includes("M") : true
    )
    .filter(({ sizesAvailable }) =>
      showLargeSize ? sizesAvailable.includes("L") : true
    )
    .filter(({ sizesAvailable }) =>
      showExtraLargeSize ? sizesAvailable.includes("XL") : true
    )
    .filter(({ sizesAvailable }) =>
      show2ExtraLargeSize ? sizesAvailable.includes("2XL") : true
    )
    .filter(({ sizesAvailable }) =>
      show3ExtraLargeSize ? sizesAvailable.includes("3XL") : true
    )
    .filter(({ brand }) => (showBewakoofProducts ? brand === "Bewakoof" : true))
    .filter(({ brand }) => (showRoadsterProducts ? brand === "Roadster" : true))
    .filter(({ brand }) => (showLevisProducts ? brand === "Levi's" : true))
    .filter(({ brand }) =>
      showTommyHilfigerProducts ? brand === "Tommy Hilfiger" : true
    )
    .filter(({ brand }) =>
      showUnderArmourProducts ? brand === "Under Armour" : true
    )
    .filter(({ category }) =>
      showSweatShirts ? category === "Sweatshirt" : true
    )
    .filter(({ category }) => (showHoodies ? category === "Hoodie" : true))
    .filter(({ category }) => (showTshirts ? category === "Tshirt" : true))
    .filter(({ category }) => (showJoggers ? category === "Joggers" : true))
    .filter(({ category }) => (showPyjamas ? category === "Pyjama" : true))
    .filter(({ category }) => (showShorts ? category === "Shorts" : true))
    .filter(({ category }) => (showBoxers ? category === "Boxers" : true))
    .filter(({ discount }) =>
      show10PercentDiscountProducts ? Number(discount) >= 10 : true
    )
    .filter(({ discount }) =>
      show20PercentDiscountProducts ? Number(discount) >= 20 : true
    )
    .filter(({ discount }) =>
      show30PercentDiscountProducts ? Number(discount) >= 30 : true
    )
    .filter(({ discount }) =>
      show40PercentDiscountProducts ? Number(discount) >= 40 : true
    )
    .filter(({ discount }) =>
      show50PercentDiscountProducts ? Number(discount) >= 50 : true
    )
    .filter(({ deliveryTime }: any) =>
      show1DayDeliveryProducts ? Number(deliveryTime) <= 1 : true
    )
    .filter(({ deliveryTime }: any) =>
      show7DaysDeliveryProducts ? Number(deliveryTime) <= 7 : true
    )
    .filter(({ deliveryTime }: any) =>
      show15DaysDeliveryProducts ? Number(deliveryTime) <= 15 : true
    );
};
