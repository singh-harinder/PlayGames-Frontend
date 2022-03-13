import Head from "next/head";
import Link from "next/link";
import { useAllProductsCountQuery } from "../types/generated-queries";
import DisplayError from "./ErrorMessage";
import LoadingAnimation from "./Loading";

function Pagination({ page }: { page: number }) {
  const { data, loading, error } = useAllProductsCountQuery();

  if (loading) return <LoadingAnimation />;

  const NEXT_PUBLIC_PAGE = 4;
  if (error) return <DisplayError error={error} />;

  const count = data?._allProductsMeta?.count || 0;
  const pageCount = Math.ceil(count / NEXT_PUBLIC_PAGE);

  return (
    <div className="mb-20 mt-10 flex justify-center p-2">
      <Head>
        <title>
          Play Games- Page {page} of {pageCount}
        </title>
      </Head>
      {page > 1 && (
        <Link href={`/products/${page - 1}`}>
          <a className="p-2 font-semibold text-blue-500">← Prev</a>
        </Link>
      )}
      {page <= 1 && <a className="pointer-events-none p-2 font-semibold text-gray-500">← Prev</a>}
      <p className="p-2 font-semibold">
        Page {page} of {pageCount}
      </p>
      <p className="p-2 font-semibold">{count} Items Total</p>
      {page < pageCount && (
        <Link href={`/products/${page + 1}`}>
          <a className="p-2 font-semibold text-blue-500">Next →</a>
        </Link>
      )}
      {page >= pageCount && <a className="pointer-events-none p-2 font-semibold text-gray-500">Next →</a>}
    </div>
  );
}

export default Pagination;
