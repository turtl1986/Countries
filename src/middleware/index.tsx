import { Middleware } from "redux";
import { RootState } from "../redux/store";
import { AppAction } from "../redux/types";

export const logsTypeActionMiddleware: Middleware<object, RootState> = () => {
	return (next) => {
		return (action: AppAction) => {
			console.log('middleware:', action)
			next(action)
		}
	}
}