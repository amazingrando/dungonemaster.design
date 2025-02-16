import { NavPrimary } from "./navPrimary";
import Randy from '@/assets/images/randy.png'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center gap-8 z-40">
      <Link href="/" className="flex flex-row no-wrap gap-1 items-center w-max">
        <Image
          src={Randy}
          alt="Randy"
          className="w-[4rem] h-[4rem] -ml-[0.7rem]"
        />
        <div>
          <h1 className="uppercase text-2xl font-bold">Amazing Rando</h1>
          <p className="text-sm font-medium">Crafting digital experiences worthy of legend.</p>
        </div>
      </Link> 
      <NavPrimary />
    </header>
  );
};

export default Header;