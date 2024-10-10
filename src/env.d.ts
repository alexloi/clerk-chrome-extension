interface ImportMetaEnv {
	readonly REACT_APP_NEXT_API_URL: string;
	readonly REACT_APP_TOPOD_API_URL: string;
	readonly REACT_APP_CLERK_PUBLISHABLE_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
