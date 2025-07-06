import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-40">
            <h1 className="text-4xl">Developers are working to create this page.</h1>
            <div className="mt-11">
                <Link className="bg-red-500 p-4" to='/'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;