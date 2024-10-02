import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CircleUser, Home, Menu, Notebook, Search } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Logo } from "@/components/ui/logo.tsx";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    // ${visible ? 'transform translate-y-0' : 'transform -translate-y-full'}
    return (
        <>
            <header className={`sticky inset-x-0 z-50 top-0 flex h-16 w-full items-center gap-4 border-b bg-background px-4 md:px-10
      
            `}>
                <nav
                    className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <Logo className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link to="/blog" className="text-foreground transition-colors hover:text-foreground">
                        <p className="whitespace-nowrap">Tech Blog</p>
                    </Link>
                </nav>

                <Button variant="outline" size="icon" onClick={toggleSidebar} className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>

                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>


                    {!isLoggedIn ?
                        <div className="flex items-center gap-4">
                            <Button size="sm" variant="outline" onClick={() => navigate({ to: '/signin', })}>Sign in</Button>
                            <Button size="sm" onClick={() => navigate({ to: '/signup', })}>Sign up</Button>
                        </div>
                        :
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={toggleLogin}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    }
                </div>
            </header>

            <div className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity duration-300 
            ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleSidebar}
            ></div>

            <aside className={`fixed z-40 inset-y-0 left-0 mt-16 w-64 md:hidden bg-white shadow-xl transform transition-transform duration-300
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="grid items-start mt-8 px-2 text-sm font-medium lg:px-4" onClick={toggleSidebar}>
                    <Link to="/"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                        <Home className="h-4 w-4" />
                        Home
                    </Link>
                    <Link to="/blog"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all
                          {/*text-muted-foreground hover:text-primary*/}
                          bg-muted text-primary  ">
                        <Notebook className="h-4 w-4" />
                        <p className="whitespace-nowrap">Tech Blog</p>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export { Navbar };