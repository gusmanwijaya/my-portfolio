import Link from "next/link";

export default function SeeCertificate() {
  return (
    <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl space-y-4 lg:space-y-2">
        <span className="block">Want to see the certificate he has?</span>
        <span className="block text-indigo-600">
          He is an active person in every way.
        </span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link href="/certificate">
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Yes, please
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
