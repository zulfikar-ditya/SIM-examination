import Link from "next/link";
import { vendors } from "./dump/vendors";

export default function Home() {
	const data_vendors = vendors;

	return (
		<div>
			<div className="container mx-auto mt-10">
				<ul className="w-6/12 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					{data_vendors.map((vendor, key) => {
						return (
							<Link href={`/vendor/${vendor.vendorID}`} key={key}>
								<li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
									{vendor.vendorName}
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
