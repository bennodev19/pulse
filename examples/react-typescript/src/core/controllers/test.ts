import { App } from "../app";

import { ICore } from "../core";
const core = App.Core<ICore>();

export function Test() {
	core.accounts.lol();
}

App.Jeff(() => core);

export const test = App.Controller({
	state: {
		works: App.Computed(() => {
			if (core.accounts.state.LAST_ACCOUNT_ID.value) {
				// return core
			}
		}),
	},
	actions: {
		Test,
		// jeff: App.Jeff(() => core),
		jeff2: () => core,
	},
});
