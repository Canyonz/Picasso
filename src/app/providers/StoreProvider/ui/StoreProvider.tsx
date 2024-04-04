import { ReactNode } from "react";
import { Provider } from "react-redux";
import { storeConfig } from "../config/storeConfig";

type StoreProviderProps = {
	children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
	return <Provider store={storeConfig}>{children}</Provider>;
};
