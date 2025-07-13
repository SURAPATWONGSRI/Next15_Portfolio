"use client";
import { Globe, Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { VisuallyHidden } from "../components/ui/visually-hidden";
import { cn } from "../lib/utils";

const Navbar = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // ใช้ direct translation
  const navTexts = {
    en: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    th: {
      about: "เกี่ยวกับ",
      projects: "ผลงาน",
      contact: "ติดต่อ",
    },
  };

  const currentTexts = navTexts[locale] || navTexts.en;

  // Debug log
  // console.log("Current locale:", locale);
  // console.log("Current texts:", currentTexts);

  const navLinks = useMemo(
    () => [
      {
        title: currentTexts.about,
        path: "#about",
      },
      {
        title: currentTexts.projects,
        path: "#project",
      },
      {
        title: currentTexts.contact,
        path: "#contact",
      },
    ],
    [locale],
  );

  // ==================== State Management ====================
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ==================== Effects ====================
  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only update background, do not hide navbar
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==================== Event Handlers ====================
  const handleLanguageChange = (newLocale) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${currentPath}`);
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setNavbarOpen(false);

    const sectionId = path.startsWith("#") ? path.substring(1) : path;
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ==================== Component Styles ====================
  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 py-4 transform transition-all duration-300 ease-in-out",
    "translate-y-0",
    lastScrollY > 10 ? "bg-black/40 backdrop-blur-xs" : "bg-transparent",
  );

  const desktopLinkClasses = cn(
    "group relative inline-flex h-10 items-center justify-center px-6 py-2 text-sm font-medium transition-all hover:bg-transparent",
    "text-gray-300 hover:text-white focus:text-white focus:outline-none",
    "before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-emerald-500 before:transition-all before:duration-300",
    "hover:before:w-full focus:before:w-full focus:bg-transparent",
  );

  // ==================== Render Components ====================
  const renderLogo = () => (
    <Link
      href={`/${locale}`}
      className="text-2xl md:text-3xl text-white font-bold tracking-tight hover:text-emerald-400 transition-colors"
    >
      WAKIM<span className="text-emerald-500">.</span>
    </Link>
  );

  // ==================== Render Language Switcher ====================
  const languages = [
    { code: "en", label: "EN" },
    { code: "th", label: "TH" },
  ];

  const renderLanguageSwitcher = (isMobile = false) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={isMobile ? "sm" : "icon"}
          className={cn(
            "text-white hover:text-emerald-400 transition-colors",
            isMobile ? "justify-start w-full" : "",
          )}
          aria-label="Change language"
        >
          <Globe className="h-5 w-5" />
          <span className={isMobile ? "ml-2" : "sr-only"}>
            {languages.find((l) => l.code === locale)?.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? "start" : "end"}>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={locale === lang.code ? "font-bold text-emerald-500" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderDesktopNavigation = () => (
    <div className="hidden md:flex items-center space-x-2">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={desktopLinkClasses}
              >
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {renderLanguageSwitcher()}
    </div>
  );

  const renderMobileMenuTrigger = () => (
    <SheetTrigger asChild className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="text-white hover:bg-transparent hover:text-emerald-400 transition-colors p-2"
      >
        {navbarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
  );

  const renderMobileMenuContent = () => (
    <SheetContent
      side="right"
      className="w-[280px] bg-gray-950/95 backdrop-blur-xl border-gray-800/50"
    >
      <SheetHeader className="text-left">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
      </SheetHeader>

      <div className="flex flex-col space-y-8 mt-8">
        {/* Mobile Logo */}
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-white"
          onClick={() => setNavbarOpen(false)}
        >
          WAKIM<span className="text-emerald-500">.</span>
        </Link>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="justify-start h-12 text-base font-medium text-gray-300 hover:text-white hover:bg-transparent transition-all"
              onClick={(e) => handleLinkClick(e, link.path)}
            >
              <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 opacity-60"></span>
              {link.title}
            </Button>
          ))}
          <div className="pt-4">{renderLanguageSwitcher(true)}</div>
        </nav>
      </div>
    </SheetContent>
  );

  // ==================== Loading State ====================
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent transform translate-y-0 transition-transform duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {renderLogo()}
            {renderDesktopNavigation()}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-transparent p-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // ==================== Main Render ====================
  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ========== LOGO ========== */}
          {renderLogo()}

          {/* ========== DESKTOP NAVIGATION ========== */}
          {renderDesktopNavigation()}

          {/* ========== MOBILE NAVIGATION ========== */}
          <Sheet open={navbarOpen} onOpenChange={setNavbarOpen}>
            {renderMobileMenuTrigger()}
            {renderMobileMenuContent()}
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
