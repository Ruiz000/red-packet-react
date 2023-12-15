import Image from "next/image";
import { useAccount, useConnect, useNetwork } from "wagmi";
import RedPacket from "@/components/RedPacket";
import { useState } from "react";

export default function Home() {
  const aaa = useAccount();
  const bbb = useConnect();
  const ccc = useNetwork();
  console.log(aaa, bbb, ccc);
  const [isOpen, onOpenChange] = useState(true);
  return (
    <div>
      <div>description</div>
      <div>red pockets</div>
      <RedPacket isOpen={isOpen} onOpenChange={onOpenChange}/>
    </div>
  );
}
