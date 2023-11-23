import { CgMenuRight } from 'react-icons/cg';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <img
          src="/assets/images/vertex-x-logo.svg"
          alt="logo"
          width={96}
          className="p-2"
        />
        <div className="xl:invisible md:invisible sm:visible">
          <Sheet>
            <SheetTrigger className="p-2 m-0 text-primary-600">
              <CgMenuRight />
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>
                  <img
                    src="/assets/images/vertex-x-logo.svg"
                    alt="logo"
                    width={96}
                  />
                </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently
                  delete your account and remove your data from our
                  servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
