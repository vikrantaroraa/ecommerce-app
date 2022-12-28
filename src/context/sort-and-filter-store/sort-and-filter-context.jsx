import { createContext, useContext, useReducer } from "react";
import { allProducts } from "src/api/all-products";

export const SortAndFilterContext = createContext();

export const SortAndFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sortAndFilterReducer, {
    originalDataList: [...allProducts],
    showMenProducts: false,
    showWomenProducts: false,
    showExtraSmallSize: false,
    showSmallSize: false,
    showMediumSize: false,
    showLargeSize: false,
    showExtraLargeSize: false,
    show2ExtraLargeSize: false,
    show3ExtraLargeSize: false,
    showBewakoofProducts: false,
    showRoadsterProducts: false,
    showLevisProducts: false,
    showTommyHilfigerProducts: false,
    showUnderArmourProducts: false,
    showSweatShirts: false,
    showHoodies: false,
    showTshirts: false,
    showJoggers: false,
    showPyjamas: false,
    showShorts: false,
    showBoxers: false,
    show10PercentDiscountProducts: false,
    show20PercentDiscountProducts: false,
    show30PercentDiscountProducts: false,
    show40PercentDiscountProducts: false,
    show50PercentDiscountProducts: false,
    show1DayDeliveryProducts: false,
    show7DaysDeliveryProducts: false,
    show15DaysDeliveryProducts: false,
    sortBy: null,
    priceRange: 1000,
  });

  return (
    <SortAndFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </SortAndFilterContext.Provider>
  );
};

export const useSortAndFilter = () => {
  return useContext(SortAndFilterContext);
};

const sortAndFilterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_MEN_PRODUCTS":
      return {
        ...state,
        showMenProducts: !state.showMenProducts,
      };

    case "TOGGLE_SHOW_WOMEN_PRODUCTS":
      return {
        ...state,
        showWomenProducts: !state.showWomenProducts,
      };

    case "TOGGLE_SHOW_EXTRA_SMALL_SIZE":
      return {
        ...state,
        showExtraSmallSize: !state.showExtraSmallSize,
      };

    case "TOGGLE_SHOW_SMALL_SIZE":
      return {
        ...state,
        showSmallSize: !state.showSmallSize,
      };

    case "TOGGLE_SHOW_MEDIUM_SIZE":
      return {
        ...state,
        showMediumSize: !state.showMediumSize,
      };

    case "TOGGLE_SHOW_LARGE_SIZE":
      return {
        ...state,
        showLargeSize: !state.showLargeSize,
      };

    case "TOGGLE_SHOW_EXTRA_LARGE_SIZE":
      return {
        ...state,
        showExtraLargeSize: !state.showExtraLargeSize,
      };

    case "TOGGLE_SHOW_2_EXTRA_LARGE_SIZE":
      return {
        ...state,
        show2ExtraLargeSize: !state.show2ExtraLargeSize,
      };

    case "TOGGLE_SHOW_3_EXTRA_LARGE_SIZE":
      return {
        ...state,
        show3ExtraLargeSize: !state.show3ExtraLargeSize,
      };

    case "TOGGLE_SHOW_BEWAKOOF_PRODUCTS":
      return {
        ...state,
        showBewakoofProducts: !state.showBewakoofProducts,
      };

    case "TOGGLE_SHOW_ROADSTER_PRODUCTS":
      return {
        ...state,
        showRoadsterProducts: !state.showRoadsterProducts,
      };

    case "TOGGLE_SHOW_LEVIS_PRODUCTS":
      return {
        ...state,
        showLevisProducts: !state.showLevisProducts,
      };

    case "TOGGLE_SHOW_TOMMY_HILFIGER_PRODUCTS":
      return {
        ...state,
        showTommyHilfigerProducts: !state.showTommyHilfigerProducts,
      };

    case "TOGGLE_SHOW_UNDER_ARMOUR_PRODUCTS":
      return {
        ...state,
        showUnderArmourProducts: !state.showUnderArmourProducts,
      };

    case "TOGGLE_SHOW_SWEATSHIRTS":
      return {
        ...state,
        showSweatShirts: !state.showSweatShirts,
      };

    case "TOGGLE_SHOW_HOODIES":
      return {
        ...state,
        showHoodies: !state.showHoodies,
      };

    case "TOGGLE_SHOW_TSHIRTS":
      return {
        ...state,
        showTshirts: !state.showTshirts,
      };

    case "TOGGLE_SHOW_JOGGERS":
      return {
        ...state,
        showJoggers: !state.showJoggers,
      };

    case "TOGGLE_SHOW_PYJAMAS":
      return {
        ...state,
        showPyjamas: !state.showPyjamas,
      };

    case "TOGGLE_SHOW_SHORTS":
      return {
        ...state,
        showShorts: !state.showShorts,
      };

    case "TOGGLE_SHOW_BOXERS":
      return {
        ...state,
        showBoxers: !state.showBoxers,
      };

    case "TOGGLE_SHOW_10_PERCENT_DISCOUNT_PRODUCTS":
      return {
        ...state,
        show10PercentDiscountProducts: !state.show10PercentDiscountProducts,
      };

    case "TOGGLE_SHOW_20_PERCENT_DISCOUNT_PRODUCTS":
      return {
        ...state,
        show20PercentDiscountProducts: !state.show20PercentDiscountProducts,
      };

    case "TOGGLE_SHOW_30_PERCENT_DISCOUNT_PRODUCTS":
      return {
        ...state,
        show30PercentDiscountProducts: !state.show30PercentDiscountProducts,
      };

    case "TOGGLE_SHOW_40_PERCENT_DISCOUNT_PRODUCTS":
      return {
        ...state,
        show40PercentDiscountProducts: !state.show40PercentDiscountProducts,
      };

    case "TOGGLE_SHOW_50_PERCENT_DISCOUNT_PRODUCTS":
      return {
        ...state,
        show50PercentDiscountProducts: !state.show50PercentDiscountProducts,
      };

    case "TOGGLE_SHOW_1_DAY_DELIVERY_PRODUCTS":
      return {
        ...state,
        show1DayDeliveryProducts: !state.show1DayDeliveryProducts,
      };

    case "TOGGLE_SHOW_7_DAYS_DELIVERY_PRODUCTS":
      return {
        ...state,
        show7DaysDeliveryProducts: !state.show7DaysDeliveryProducts,
      };

    case "TOGGLE_SHOW_15_DAYS_DELIVERY_PRODUCTS":
      return {
        ...state,
        show15DaysDeliveryProducts: !state.show15DaysDeliveryProducts,
      };

    case "CHANGE_PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      };

    case "REMOVE_ALL_FILTERS":
      return {
        ...state,
        showMenProducts: false,
        showWomenProducts: false,
        showExtraSmallSize: false,
        showSmallSize: false,
        showMediumSize: false,
        showLargeSize: false,
        showExtraLargeSize: false,
        show2ExtraLargeSize: false,
        show3ExtraLargeSize: false,
        showBewakoofProducts: false,
        showRoadsterProducts: false,
        showLevisProducts: false,
        showTommyHilfigerProducts: false,
        showUnderArmourProducts: false,
        showSweatShirts: false,
        showHoodies: false,
        showTshirts: false,
        showJoggers: false,
        showPyjamas: false,
        showShorts: false,
        showBoxers: false,
        show10PercentDiscountProducts: false,
        show20PercentDiscountProducts: false,
        show30PercentDiscountProducts: false,
        show40PercentDiscountProducts: false,
        show50PercentDiscountProducts: false,
        show1DayDeliveryProducts: false,
        show7DaysDeliveryProducts: false,
        show15DaysDeliveryProducts: false,
        sortBy: null,
        priceRange: 1000,
      };

    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};
