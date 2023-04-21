import { useSession } from "next-auth/react";
import { Router } from "next/router";
import { Fragment, PropsWithChildren } from "react";
import Dashboard from "../Admin";

interface Props {
  router: Router;
}

export default function ProtectedRoute({
  router,
  children,
}: PropsWithChildren<Props>) {
  const { data, status } = useSession();
  const isProtected = router.asPath.includes("/admin/");

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (!data && isProtected && router.isReady) {
    router.push("/admin");
  }

  return (
    <Fragment>
      {data && <Dashboard />}
      {children}
    </Fragment>
  );
}
