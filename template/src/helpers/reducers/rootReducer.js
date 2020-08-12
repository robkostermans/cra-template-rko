export const rootReducer = (state, action) => {
  switch (action.type) {
    case "updateSaving":
      return {
        ...state,
        saving: action.saving,
      };
    case "updateProfile":
      return {
        ...state,
        profile: action.profile,
      };

    case "updateIncident":
      return {
        ...state,
        incident: action.incident,
      };

    case "updateColorMode":
      return {
        ...state,
        colorMode: action.colorMode,
      };

    case "updateCache":
      return {
        ...state,
        cache: {
          ...state.cache,
          ...action.cache,
        },
      };

    case "updateRefs":
      return {
        ...state,
        refs: action.refs,
      };

    default:
      return state;
  }
};
