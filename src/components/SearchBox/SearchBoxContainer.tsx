import React, {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../state/store";
import {LocationSearchResultsKey} from "../../state/slices/locationSearchSlice";
import {getLocationByIdAction, searchForLocationAction} from "../../state/actions/stateActions";
import {SearchBox} from "./SearchBox";
import {LocationDataSliceKey} from "../../state/slices/locationDataSlice";
import {PaddedContentFlexBoxColumn, PaddedContentFlexBoxRow} from "../common/components";

export const SearchBoxContainer: React.FC = () => {

  const {searchResults, dataLoadRunning, searchRunning} = useAppSelector(({
                                                     [LocationSearchResultsKey]: {
                                                       searchResults,
                                                       request: {
                                                         loading: searchRunning
                                                       }},
                                                     [LocationDataSliceKey]: {
                                                       request: {
                                                         loading: dataLoadRunning
                                                       }}
                                                   }) => ({
    searchResults,
    searchRunning,
    dataLoadRunning
  }));

  const dispatch = useAppDispatch();

  const loadLocationData = useCallback((value: number) => {
    dispatch(getLocationByIdAction(value));
  }, []);

  const searchForLocation = useCallback((value: string) => {
    dispatch(searchForLocationAction(value));
  }, []);

  return (
    <PaddedContentFlexBoxColumn sx={{ marginTop: 1 }}>
      <SearchBox
        searchResults={searchResults}
        searchRunning={searchRunning}
        dataLoadRunning={dataLoadRunning}
        loadLocationData={loadLocationData}
        searchForLocation={searchForLocation}
      />
    </PaddedContentFlexBoxColumn>
  );
};
