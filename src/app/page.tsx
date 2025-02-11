import Image from "next/image";
// import MakeYourPayment from '@/components/molecules/MakeYourPayment'
import HomePage from "@/components/organisms/InvoicePayments";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-green-100">
        <div className="links pt-52 pl-52 flex flex-col gap-3" >
        <h2 className="text-3xl">Pages List</h2>
          <Link href={"/invoice-payment"} className="font-bold text-xl text-blue-700">Invoice Payments Page</Link>
          <Link href={"/terms-of-use"} className="font-bold text-xl text-blue-700">Terms of use Page</Link>
        </div>
      </div>
    </>
  );
}
