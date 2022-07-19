import { useRouter } from "next/router";
import { vendors } from "../../dump/vendors";

export default function index() {
	const router = useRouter();

	const { id } = router.query;

	const data_vendor = vendors.filter((vendor) => {
		return vendor.vendorID == id;
	})[0];

	return (
		<div className="container mx-auto mt-10">
			<div className="flex justify-center ">
				<div className="w-full md:w-4/12">
					<div className="bg-white p-10 rounded-md shadow-md">
						<h1 className="font-bold">
							Vendor Name: {data_vendor?.vendorName}
						</h1>
						<h1 className="font-bold">
							Payment Term: {data_vendor?.paymentTermName}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
