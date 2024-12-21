import { Icons } from "@/components/icons";
import { SearchControl } from "@/components/search-control";
import { Link } from "@inertiajs/react";

export function HomeHeader() {
    return (
        <div className="fixed left-0 right-0 top-0 z-50 w-full bg-white p-4 text-blue-800">
            <div className="container mx-auto max-w-screen-sm rounded-md bg-white">
                <div className="flex items-center justify-between">
                    <Link href={route("home")} className="flex items-center gap-2">
                        <img
                            src="/image/icon-barkasmal.png"
                            className="size-10"
                            alt="Yayasan Barkasmal Nusantara"
                        />
                        <span className="hidden text-xl font-bold md:block">Barkasmal</span>
                    </Link>
                    <div className="flex items-center justify-end gap-2">
                        <SearchControl />
                        <div className="flex items-center">
                            <Link href="https://www.instagram.com/barkasmal" target="_blank">
                                <Icons.instagram className="size-8" />
                            </Link>
                            <Link href="https://www.facebook.com/Barkasmal" target="_blank">
                                <Icons.facebook className="size-8" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}