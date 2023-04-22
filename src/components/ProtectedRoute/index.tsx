import { useSession } from "next-auth/react";
import { Router } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { Fragment, PropsWithChildren } from "react";
import { cx } from "../../common/cx";
import { adminRoutingData, clientRoutingData } from "../../data/navData";
import Header from "../Header";

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
    return <h1>Loading...</h1>;
  }

  if (!data && isAdminRoute && router.isReady) {
    router.push("/admin");
  }
  console.log(data && authRoute ? adminRoutingData : clientRoutingData);
  return (
    <Fragment>
      <NextNProgress />
      <main className={cx("min-h-screen", "mt-[50px]")}>
        <Header
          data={data && authRoute ? adminRoutingData : clientRoutingData}
        />
        {children}
      </main>
    </Fragment>
  );
}
