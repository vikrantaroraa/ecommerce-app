export interface FilterObject {
  filterLabel: string;
  urlParameter: string;
  dispatchAction: string;
  statVariableName: string;
}

export const checkboxFiltersList = {
  Gender: [
    {
      filterLabel: "Women",
      urlParameter: "women",
      dispatchAction: "TOGGLE_SHOW_WOMEN_PRODUCTS",
      statVariableName: "showWomenProducts",
    },
    {
      filterLabel: "Men",
      urlParameter: "men",
      dispatchAction: "TOGGLE_SHOW_MEN_PRODUCTS",
      statVariableName: "showMenProducts",
    },
  ],
  Size: [
    {
      filterLabel: "XS",
      urlParameter: "XS",
      dispatchAction: "TOGGLE_SHOW_EXTRA_SMALL_SIZE",
      statVariableName: "showExtraSmallSize",
    },
    {
      filterLabel: "S",
      urlParameter: "S",
      dispatchAction: "TOGGLE_SHOW_SMALL_SIZE",
      statVariableName: "showSmallSize",
    },
    {
      filterLabel: "M",
      urlParameter: "M",
      dispatchAction: "TOGGLE_SHOW_MEDIUM_SIZE",
      statVariableName: "showMediumSize",
    },
    {
      filterLabel: "L",
      urlParameter: "L",
      dispatchAction: "TOGGLE_SHOW_LARGE_SIZE",
      statVariableName: "showLargeSize",
    },
    {
      filterLabel: "XL",
      urlParameter: "XL",
      dispatchAction: "TOGGLE_SHOW_EXTRA_LARGE_SIZE",
      statVariableName: "showExtraLargeSize",
    },
    {
      filterLabel: "2XL",
      urlParameter: "2XL",
      dispatchAction: "TOGGLE_SHOW_2_EXTRA_LARGE_SIZE",
      statVariableName: "show2ExtraLargeSize",
    },
    {
      filterLabel: "3XL",
      urlParameter: "3XL",
      dispatchAction: "TOGGLE_SHOW_3_EXTRA_LARGE_SIZE",
      statVariableName: "show3ExtraLargeSize",
    },
  ],
  Brand: [
    {
      filterLabel: "Bewakoof",
      urlParameter: "bewakoof",
      dispatchAction: "TOGGLE_SHOW_BEWAKOOF_PRODUCTS",
      statVariableName: "showBewakoofProducts",
    },
    {
      filterLabel: "Roadster",
      urlParameter: "roadster",
      dispatchAction: "TOGGLE_SHOW_ROADSTER_PRODUCTS",
      statVariableName: "showRoadsterProducts",
    },
    {
      filterLabel: "Levi's",
      urlParameter: "levis",
      dispatchAction: "TOGGLE_SHOW_LEVIS_PRODUCTS",
      statVariableName: "showLevisProducts",
    },
    {
      filterLabel: "Tommy Hilfiger",
      urlParameter: "tommy-hilfiger",
      dispatchAction: "TOGGLE_SHOW_TOMMY_HILFIGER_PRODUCTS",
      statVariableName: "showTommyHilfigerProducts",
    },
    {
      filterLabel: "Under Armour",
      urlParameter: "under-armour",
      dispatchAction: "TOGGLE_SHOW_UNDER_ARMOUR_PRODUCTS",
      statVariableName: "showUnderArmourProducts",
    },
  ],
  Category: [
    {
      filterLabel: "Sweatshirts",
      urlParameter: "sweatshirts",
      dispatchAction: "TOGGLE_SHOW_SWEATSHIRTS",
      statVariableName: "showSweatShirts",
    },
    {
      filterLabel: "Hoodies",
      urlParameter: "hoodies",
      dispatchAction: "TOGGLE_SHOW_HOODIES",
      statVariableName: "showHoodies",
    },
    {
      filterLabel: "T-Shirts",
      urlParameter: "t-shirts",
      dispatchAction: "TOGGLE_SHOW_TSHIRTS",
      statVariableName: "showTshirts",
    },
    {
      filterLabel: "Joggers",
      urlParameter: "joggers",
      dispatchAction: "TOGGLE_SHOW_JOGGERS",
      statVariableName: "showJoggers",
    },
    {
      filterLabel: "Pyjamas",
      urlParameter: "pyjamas",
      dispatchAction: "TOGGLE_SHOW_PYJAMAS",
      statVariableName: "showPyjamas",
    },
    {
      filterLabel: "Shorts",
      urlParameter: "shorts",
      dispatchAction: "TOGGLE_SHOW_SHORTS",
      statVariableName: "showShorts",
    },
    {
      filterLabel: "Boxers",
      urlParameter: "boxers",
      dispatchAction: "TOGGLE_SHOW_BOXERS",
      statVariableName: "showBoxers",
    },
  ],
  Discount: [
    {
      filterLabel: "10% Or More",
      urlParameter: "10",
      dispatchAction: "TOGGLE_SHOW_10_PERCENT_DISCOUNT_PRODUCTS",
      statVariableName: "show10PercentDiscountProducts",
    },
    {
      filterLabel: "20% Or More",
      urlParameter: "20",
      dispatchAction: "TOGGLE_SHOW_20_PERCENT_DISCOUNT_PRODUCTS",
      statVariableName: "show20PercentDiscountProducts",
    },
    {
      filterLabel: "30% Or More",
      urlParameter: "30",
      dispatchAction: "TOGGLE_SHOW_30_PERCENT_DISCOUNT_PRODUCTS",
      statVariableName: "show30PercentDiscountProducts",
    },
    {
      filterLabel: "40% Or More",
      urlParameter: "40",
      dispatchAction: "TOGGLE_SHOW_40_PERCENT_DISCOUNT_PRODUCTS",
      statVariableName: "show40PercentDiscountProducts",
    },
    {
      filterLabel: "50% Or More",
      urlParameter: "50",
      dispatchAction: "TOGGLE_SHOW_50_PERCENT_DISCOUNT_PRODUCTS",
      statVariableName: "show50PercentDiscountProducts",
    },
  ],
  Delivery: [
    {
      filterLabel: "1 Day",
      urlParameter: "1-day",
      dispatchAction: "TOGGLE_SHOW_1_DAY_DELIVERY_PRODUCTS",
      statVariableName: "show1DayDeliveryProducts",
    },
    {
      filterLabel: "7 Days",
      urlParameter: "7-days",
      dispatchAction: "TOGGLE_SHOW_7_DAYS_DELIVERY_PRODUCTS",
      statVariableName: "show7DaysDeliveryProducts",
    },
    {
      filterLabel: "15 Days",
      urlParameter: "15-days",
      dispatchAction: "TOGGLE_SHOW_15_DAYS_DELIVERY_PRODUCTS",
      statVariableName: "show15DaysDeliveryProducts",
    },
  ],
};

export const checkboxFilterNames = Object.keys(checkboxFiltersList);
