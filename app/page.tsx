import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to Our App!</h1>
      <p className="mt-4 text-lg">Sign in or create an account to continue.</p>
      <div className="mt-8 space-x-4">
        {/* Sign In Button */}
        <Link
          href="/sign-in"
          className="inline-block px-6 py-3 font-semibold text-gray-900 bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Sign In
        </Link>
        {/* Sign Up Button */}
        <Link
          href="/sign-up"
          className="inline-block px-6 py-3 font-semibold text-gray-900 bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
