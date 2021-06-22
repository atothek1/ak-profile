import { createContext, useContext } from "react";
import { StyledProviderContextValue } from "@components/core/StyledProvider/types";

const context = createContext<StyledProviderContextValue>( {} );
const { Provider } = context;

export { Provider };

export function useStyledContext(): StyledProviderContextValue {
    return useContext( context );
}