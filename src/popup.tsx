// src/popup.tsx
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
	SignedIn,
	SignedOut,
	ClerkProvider,
	ClerkLoaded,
	useClerk,
} from "@clerk/chrome-extension";
import { Button } from "./components/Button";
import { Logotype } from "./components/Logotype";

import "./styles/tailwind.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY!;
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const baseUrl = process.env.REACT_APP_NEXT_API_URL!;

const Popup = () => {
	const [accessToken, setAccessToken] = useState<string | null>(null);
	const { user, session } = useClerk();

	useEffect(() => {
		session?.getToken().then((token) => setAccessToken(token));
	}, [session]);

	return (
		<div className="p-4 flex flex-col gap-4 w-96">
			<div className="flex items-center justify-between">
				<a href={baseUrl} target="_blank" rel="noreferrer">
					<div className="flex items-center justify-start gap-2">
						<Logotype size="xs" />
					</div>
				</a>
			</div>

			<SignedIn>
				<div className="flex items-center gap-2">User is logged in</div>
			</SignedIn>
			<SignedOut>
				<p>
					Use this extension to capture a site directly and turn it into a cast.
				</p>
				<p>To continue please sign in or create an account.</p>
				<div className="flex items-center justify-start gap-4">
					<a href={`${baseUrl}/sign-in`} target="_blank" rel="noreferrer">
						<Button>Sign in</Button>
					</a>
					<a href={`${baseUrl}/sign-up`} target="_blank" rel="noreferrer">
						<Button>Create an account</Button>
					</a>
				</div>
			</SignedOut>
		</div>
	);
};

const container = document.getElementById("popup-root");
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(container!);

root.render(
	<ClerkProvider publishableKey={clerkPublishableKey} syncSessionWithTab={true}>
		<ClerkLoaded>
			<Popup />
		</ClerkLoaded>
	</ClerkProvider>,
);
