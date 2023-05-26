import { useRouteError } from "react-router-dom";
import { extractErrorMessage } from "../../../util/util";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	const errorMessage = extractErrorMessage(error);

	return (
		<div id="error-page" className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3 text-center">
					<h1 className="mt-5">Oops!</h1>
					<p className="lead">Sorry, an unexpected error has occurred.</p>
					<p>
						<i>{errorMessage}</i>
					</p>
				</div>
			</div>
		</div>

	);
}