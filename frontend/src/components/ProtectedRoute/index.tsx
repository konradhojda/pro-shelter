import { useSession } from "next-auth/react";
import { Router } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { Fragment, PropsWithChildren } from "react";
import { adminRoutingData, clientRoutingData } from "../../data/navData";
import Header from "../Header";
import Loading from "../Loading";

interface Props {
  router: Router;
}

export default function ProtectedRoute({
  router,
  children,
}: PropsWithChildren<Props>) {
  const { data, status } = useSession();
  const isAdminRoute = router.asPath.includes("/admin/");
  const authRoute = router.asPath.includes("/admin");

  if (status === "loading") {
    return <Loading />;
  }

  if (!data && isAdminRoute && router.isReady) {
    router.push("/admin");
  }

  return (
    <Fragment>
      <NextNProgress />
      <main className="min-h-screen">
        {(!authRoute || !data) && <Header data={clientRoutingData} />}
        {data && authRoute && <Header data={adminRoutingData} />}
        {children}
      </main>
    </Fragment>
  );
}
