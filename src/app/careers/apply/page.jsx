import { Suspense } from "react";
import ApplyJob from "../../../components/ApplyJob.jsx";
import Careers from '@/components/Careers';

export default function ApplyJobPage() {
  return (
    <Suspense fallback={<Careers />}>
      <ApplyJob />
    </Suspense>
  );
}