import {
  Header,
  Link,
  ArrowRight,
  Image,
  Carousel,
} from '../common/components';
import { Parallax } from 'react-scroll-parallax';
import heroBg from '../common/images/hero-bg.jpeg';
import heroGrid from '../common/images/bg-grid.png';
import petCare from '../common/images/petcare.svg';
import petShop from '../common/images/petShop.svg';
import petCommunity from '../common/images/community.svg';
import petVet from '../common/images/vetService.svg';
import join from '../common/images/join.png';
import logo from '../common/images/logo.svg';

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <Header />
      <main className="bg-[#F8F6F5]">
        <div className="bg-[#00373E]">
          <section
            style={{
              backgroundImage: `url(${heroGrid}), url(${heroBg})`,
            }}
            className="min-h-screen bg-blend-color-burn"
          >
            <div className="text-white lg:w-8/12 md:w-10/12 w-11/12 mx-auto pt-28 flex flex-col md:items-center md:text-center">
              <p className="font-kyiv font-light md:text-[32px] text-xl tracking-[-0.03em]">
                Join the Furrsible Family
              </p>
              <h1 className="font-kyiv md:font-bold font-medium md:text-[72px] text-4xl tracking-[-0.03em] md:leading-[86px] leading-[42px] my-8">
                Your Ultimate Pet Care Solution is{` `}
                <span className="block header-text">Coming Soon!</span>
              </h1>
              <h2 className="md:text-2xl text-xl tracking-[-0.18px] lg:mx-[72px] md:mx-9 md:mb-10 mb-5">
                We&apos;re busy fetching balls, playing with feathers, and
                coding up a storm to bring you a tail-wagging pet care platform.
                Join our waitlist - it&apos;s gonna be paw-sitively amazing!
              </h2>
              <Link
                to="https://forms.gle/iVs3pJ8tSvxUgzoq8"
                className="flex items-center justify-center gap-x-2 border border-rose-600 bg-rose-600 shadow-sm py-3 px-10 rounded-full"
              >
                <span>Join Waitlist</span>
                <ArrowRight />
              </Link>
            </div>
            <Carousel />
          </section>
        </div>

        <section className="lg:w-4/12 md:w-6/12 md:mx-auto mx-8 my-10 text-xl leading-8 text-[#232931]">
          <h2 className="my-4">
            Hey there, hooman! <br /> At Furrsible, we&apos;re crazy about all
            things furry, feathery, and even scaly. We&apos;re creating a
            platform that puts pet care at the tip of your fingers.
          </h2>
          <p>
            Need a vet? A groomer? A pet playdate? We&apos;ve got it all!
            Can&apos;t wait? Us neither!
          </p>
        </section>

        <Parallax
          // translateX={[`-400px`, `0px`]}
          scale={[0.85, 1.2]}
          speed={8}
          // rotate={[-180, 0]}
          easing="easeInQuad"
        >
          <section className="xl:w-7/12 lg:w-8/12 md:w-10/12 md:mx-auto mx-2 md:flex lg:gap-x-10 gap-x-6 mb-24">
            <div className="flex flex-col gap-y-8 md:w-6/12">
              <div className="furrsound text-lg font-light md:w-6/12 text-center py-4">
                Woof!!
              </div>
              <article className="bg-[#FFF0CA] rounded-3xl">
                <div className="lg:px-8 md:px-5 lg:pt-20 md:pt-12 px-3 pt-5">
                  <h2 className="font-kyiv font-medium text-4xl mb-4">
                    Pet Care Services
                  </h2>
                  <p className="tracking-[0.34776px] text-[#232931] w-11/12">
                    Leaving town or need a pet sitter? Furrsible can help! From
                    grooming to dog walking, we&apos;ve got your pet care needs
                    covered, so you can enjoy more cuddle time and fewer
                    worries.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Image src={petCare} alt="a dog" className="w-24" />
                </div>
              </article>
              <article className="bg-[#E4E2F4] rounded-3xl">
                <div className="lg:px-8 md:px-5 lg:pt-20 md:pt-12 px-3 pt-5">
                  <h3 className="font-kyiv font-medium text-4xl mb-4">
                    Community of Pet Lovers
                  </h3>
                  <p className="tracking-[0.34776px] text-[#232931] w-11/12">
                    They say it takes a village to raise a child - we believe
                    the same is true for pets. Join our community of pet
                    parents. Share advice, swap funny pet stories, and set up
                    play dates.
                  </p>
                </div>
                <div className="flex justify-end px-4">
                  <Image src={petCommunity} alt="a rabbit" className="w-24" />
                </div>
              </article>
            </div>
            <div className="flex flex-col gap-y-8 mt-8 md:w-6/12">
              <article className="bg-[#FCD6CA] rounded-3xl">
                <div className="lg:px-8 md:px-5 lg:pt-20 md:pt-12 px-3 pt-5">
                  <h3 className="font-kyiv font-medium text-4xl mb-4">
                    Vet Services On-Demand
                  </h3>
                  <p className="tracking-[0.34776px] text-[#232931] w-11/12">
                    Does Mr. Whiskers look under the weather? Our platform
                    connects you with top-notch vets in a few clicks. It&apos;s
                    the purr-fect remedy!
                  </p>
                </div>
                <div className="flex justify-end px-4">
                  <Image src={petVet} alt="a cat" className="w-24" />
                </div>
              </article>
              <article className="bg-[#DDEAE4] rounded-3xl">
                <div className="lg:px-8 md:px-5 lg:pt-20 md:pt-12 px-3 pt-5">
                  <h3 className="font-kyiv font-medium text-4xl mb-4">
                    Shop for your pet with ease
                  </h3>
                  <p className="tracking-[0.34776px] text-[#232931] w-11/12">
                    Running out of pet food or toys? With furrsible, you have
                    access to a wide range of pet products from trusted
                    providers, delivered straight to your door.
                  </p>
                </div>
                <div className="flex justify-end px-4">
                  <Image src={petShop} alt="an owl" className="w-24" />
                </div>
              </article>
              <div className="furrsound text-lg font-light md:w-6/12 text-center py-3 ml-auto">
                Meow!!
              </div>
            </div>
          </section>
        </Parallax>

        <section className="bg-[#F73859]">
          <div className="md:flex xl:w-8/12 lg:w-10/12  xl:gap-x-5 gap-x-4 items-center lg:mx-auto mx-5 py-10 lg:py-8 xl:py-2">
            <Image
              src={join}
              alt="man carrying a pug"
              className="hidden md:inline-block xl:w-[500px] lg:w-[400px] w-[250px] object-contain"
            />
            <div className="text-white">
              <h2 className="font-kyiv font-medium text-[44px] leading-[50px] mb-10">
                Excited to become a part of our Furrsible family?{` `}
              </h2>
              <p className="text-lg tracking-[0.34776px] mb-9">
                Sign up to our waitlist and be the first to experience a new era
                of pet care. Plus, you could win a hamper of treats for your
                furry friend!
              </p>
              <Link
                to="https://forms.gle/iVs3pJ8tSvxUgzoq8"
                className="md:inline-flex flex items-center justify-center gap-x-2 border border-[#FECDD6] bg-[#FFF1F3] shadow-sm py-3 px-10 rounded-full text-rose-700"
              >
                <span>Join Waitlist</span>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.04004H15M15 8.04004L8 1.04004M15 8.04004L8 15.04"
                    stroke="#C01048"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#00373E] text-white py-16">
        <div className="lg:8/12 md:w-9/12 w-11/12 mx-auto">
          <div className="md:flex justify-between items-center border-b border-white border-opacity-[0.1] pb-5">
            <Image src={logo} alt="Logo" className="max-w-auto inline-block" />
            <p className="my-6 md:hidden">Your Ultimate Pet Care Solution</p>
            <nav className="">
              <ul className="flex md:flex-row flex-col gap-y-5 gap-x-4 text-sm">
                <li>
                  <Link
                    to="https://www.instagram.com/furr.sible/"
                    className="nav-text"
                  >
                    Instagram
                  </Link>
                </li>
                {/* <li>
                  <Link to="https://facebook.com" className="nav-text">
                    Facebook
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="https://twitter.com/furrsible?s=21&t=QUVIDSEhrbtvlzvffUIvUw"
                    className="nav-text"
                  >
                    Twitter
                  </Link>
                </li>
                {/* <li>
                  <Link to="https://linkedin.com" className="nav-text">
                    Linkedin
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
          <p className="text-white text-opacity-50 md:pt-11 pt-9">
            © Furrsible {year}
          </p>
        </div>
      </footer>
    </>
  );
}
