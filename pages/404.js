import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error 404 Not Found</title>
      </Head>
      <section className="h-screen flex flex-col items-center justify-center">
        <Image src="/404.svg" width={600} height={400} alt="404 - Not Found" />
        <h1 className="text-xl lg:text-3xl text-center">
          Opps! We lost you. <br />{" "}
          <span className="text-base lg:text-xl text-slate-400 font-light">
            Page not found.
          </span>{" "}
        </h1>
      </section>
    </>
  );
}
