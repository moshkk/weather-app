import React, {useCallback, useEffect, useMemo, useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Autocomplete from "@mui/material/Autocomplete";
import {AutocompleteChangeReason, TextField} from "@mui/material";
import {SearchItemListStateDataType, SearchItemStateDataType} from "../../state/types/stateData.types";

const DEFAULT_LOCATION_ID = 638242;

type SearchBoxProps = {
  searchResults: SearchItemListStateDataType;
  loadLocationData: (value: number) => void;
  searchForLocation: (value: string) => void;
  dataLoadRunning: boolean;
  searchRunning: boolean;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ searchResults, dataLoadRunning, loadLocationData, searchForLocation, searchRunning }) => {

  const [inputValue, setInputValue] = useState<string | null>(null);

  const onInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, [setInputValue]);

  const onAutoCompleteSelect = useCallback((event: React.SyntheticEvent<Element, Event>, value: SearchItemStateDataType | null, reason: AutocompleteChangeReason) => {

    if(value === null) {
      return;
    };

    switch (reason) {
      case "clear":
        setInputValue(null);
        break;
      case "selectOption":
        loadLocationData(value.woeid);
    }
  }, [setInputValue, loadLocationData]);

  useEffect(() => {
    if(inputValue) {
      searchForLocation(inputValue);
    };
  }, [inputValue, searchForLocation]);

  useEffect(() => {
    loadLocationData(DEFAULT_LOCATION_ID);
  }, []);

  return(
    <Autocomplete
      fullWidth
      onChange={onAutoCompleteSelect}
      options={searchResults}
      getOptionLabel={(option: SearchItemStateDataType) => option.title}
      disabled={dataLoadRunning}
      renderInput={(params) =>
        <TextField
          {...params}
          label="Location search"
          value={inputValue}
          onChange={onInputChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {searchRunning ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />}
    />
  );
};
