

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/main"), {
  ssr: false,
});

export default function Home() {
  return (
    <DynamicComponent/>
  );
}
