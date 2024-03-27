import { Suspense } from "react";
import { Layout } from "../common/Layout";
import { CouponEvent } from "../components/CouponEvent";

export const CouponEventPage = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div>
            <p>loading...</p>
          </div>
        }
      >
        <div className="card-component-container">
          <CouponEvent />
        </div>
      </Suspense>
    </Layout>
  );
};
