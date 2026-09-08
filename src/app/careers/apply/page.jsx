import { Suspense } from "react";
import ApplyJob from "../../../components/ApplyJob.jsx";


export const metadata = {
  title: "Apply Job - HG Technologies"
};

export default function ApplyJobPage() {
  return (
    <Suspense fallback={<p role="status">Loading application form...</p>}>
      <ApplyJob />
    </Suspense>
  );
}
