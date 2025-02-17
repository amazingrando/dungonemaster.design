import { NavPrimary } from "./navPrimary";
import Randy from '@/assets/images/randy.png'
import Image from "next/image";
import Link from "next/link";
import { Emphasis } from "../graphics/emphasis";
import headerFrame from '@/assets/images/header/header-frame.png'
import headerPhoto from '@/assets/images/header/header-photo.jpg'

const Header = () => {
  return (
    
      <header className="px-16 py-8 flex flex-row justify-between items-center gap-8 z-40">
        <Link href="/" className="flex flex-row no-wrap gap-1 items-center w-max">
          <Image
            src={Randy}
            alt="Randy"
            className="w-[4rem] h-[4rem] -ml-[0.7rem]"
          />
          <div>
            <h1 className="uppercase text-2xl font-bold">
              <span>
                <Emphasis className="w-[6rem] h-[1.5rem] text-blue-600" />
                Amazing
              </span>
              Rando
            </h1>
            <p className="text-sm font-medium">Crafting digital experiences worthy of legend.</p>
          </div>
        </Link> 
        <NavPrimary />
      </header>
  );
};

export default Header;