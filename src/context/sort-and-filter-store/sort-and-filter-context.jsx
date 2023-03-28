import { createContext, useContext, useReducer } from "react";
import { allProducts } from "src/api/all-products";
import sortAndFilterReducer from "src/redux/reducers/sort-and-filter-reducer";

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
