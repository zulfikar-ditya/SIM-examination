import { AppProps } from "next/app";
import React from "react";
import MyCustomNavbar from "./MyCustomNavbar";

export default function Layouts(props : AppProps) {
	return (
		<div>
			<MyCustomNavbar></MyCustomNavbar>
			<main className="">{props.children}</main>
		</div>
	);
}
