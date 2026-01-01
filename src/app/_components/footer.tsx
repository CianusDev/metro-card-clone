import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-black text-secondary py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Top section with logo, social and newsletter */}
        <div className="grid gap-10 justify-between md:grid-cols-2 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white flex-shrink-0 rounded-2xl size-10 flex justify-center items-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-white text-xl font-semibold">
                Metrocard
              </span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-4 ">
            <h3 className="text-white text-xl font-semibold">
              Subscribe to our newsletter
            </h3>
            <div className="flex bg-background gap-4 max-w-md p-1 items-center  justify-between rounded-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-none w-full text-primary rounded-xl outline-none p-2 placeholder:text-muted-foreground bg-background"
              />
              <Button
                size={"icon"}
                variant="default"
                className=" flex-shrink-0 rounded-full"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8  ">
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {["Pricing", "FAQs", "Why us", "Features", "Testimonial"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-white text-muted-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold">More</h4>
            <ul className="space-y-2">
              {["Styleguide", "Licenses", "Changelog", "404 Page"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-white text-muted-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Links</h4>
            <ul className="space-y-2">
              {["Cookies policy", "Privacy policy", "Sitemap"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-white text-muted-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Useful links</h4>
            <ul className="space-y-2">
              {["Contact us", "Support", "Terms of service"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-white text-muted-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with legal text and copyright */}
        <div className="space-y-6 pt-8 border-t border-zinc-800 text-sm">
          <p className="text-zinc-500">
            *Metrocard is a fintech, not a bank. Banking services provided by
            BYTR Federal Savings, C.A. Member FDIC.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4 text-zinc-500">
            <p>© Metrocard. All Rights Reserved</p>
            <p>
              Made by{" "}
              <Link href="#" className="hover:text-white transition-colors">
                ideapeel
              </Link>{" "}
              | Powered by{" "}
              <Link href="#" className="hover:text-white transition-colors">
                webflow
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
