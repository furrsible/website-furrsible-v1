import { Header, Image } from '../common/components';

import heroCat from '../common/images/hero/cat.png';
import heroDog from '../common/images/hero/dog.png';

import keepTabsImg from '../common/images/features/petting-a-cat.png.jpg';
import petProviders from '../common/images/features/checking-a-cat.jpg';
import petItems from '../common/images/features/pet-items.jpg';
import petSitting from '../common/images/features/holding-a-bunny.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <main className="2xl:w-[1200px] lg:w-9/12 md:w-10/12 md:mx-auto xs:mx-10 mx-5">
        {/* Hero */}
        <section
          className="rounded-3xl md:min-h-[500px] flex items-center relative mb-24"
          style={{
            background: `linear-gradient(90deg, #FFEFBA 0%, #FFFFFF 100%)`,
          }}
        >
          <Image
            src={heroCat}
            alt="cat looking up"
            className="absolute bottom-0 right-0 md:w-auto w-20 z-0 rounded-br-3xl"
          />
          <Image
            src={heroDog}
            alt="dog raising up left paw"
            className="absolute bottom-0 left-0 md:w-auto w-20 rounded-bl-3xl"
          />
          <div className="xl:w-9/12 md:w-11/12 mx-auto text-center text-[#191B20] xl:py-0 lg:py-5 md:px-0 md:py-0 py-8 px-5">
            <h1 className="lg:text-[71px] lg:leading-[90px] md:text-6xl text-4xl font-bold  mb-7">
              The perfect place for pets and their people!
            </h1>
            <h2 className="font-medium lg:text-2xl md:text-xl text-base md:mx-24 mb-6">
              At Furrsible, we understand that your pets are more than just
              animals - they&apos;re part of your family.
            </h2>
            <button className="bg-[#11190C] text-[#DAEF15] px-6 py-4 rounded-full text-base font-semibold">
              Join our Waitlist
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="mb-24">
          <div className="sm:w-9/12 lg:w-10/12 xl:w-9/12 sm:mx-auto mx-2 text-center my-14">
            <h2 className="lg:text-6xl md:text-4xl text-3xl lg:leading-[72px] font-semibold mb-8">
              Tired of scouring the internet for different pet-related services?
            </h2>
            <h4 className="lg:text-xl md:text-lg text-base lg:leading-[30px] font-normal md:w-7/12 lg:w-9/12 xl:w-7/12 mx-auto">
              We&apos;ve got you covered with a variety of features that cater
              to all your pet&apos;s needs.
            </h4>
          </div>

          <div className="my-24">
            <article className="grid md:grid-cols-2 gap-5 bg-[#0A1718] rounded-3xl my-20">
              <Image
                src={keepTabsImg}
                alt="someone petting a cat"
                className="xl:h-[477px] xl:w-[500px] xl:object-fill h-full object-contain md:rounded-l-3xl md:rounded-t-3xl md:rounded-r-none rounded-b-3xl md:order-first order-last"
              />

              <div className="md:self-center md:place-self-start place-self-center w-10/12">
                <h5 className="lg:text-4xl md:text-3xl text-2xl lg:leading-[44px] font-semibold mb-6">
                  Keep tabs on your pet&apos;s well-being
                </h5>
                <p className="text-[#818C96] lg:text-lg text-base font-normal">
                  Create a personalized profile for your pet where you can add
                  their name, breed, age, and other important details. Keep
                  track of their health records, vet appointments, medication
                  schedules, and more.
                </p>
              </div>
            </article>

            <article className="grid md:grid-cols-2 gap-5 bg-[#0A1718] rounded-3xl my-20">
              <div className="md:self-center place-self-center w-10/12">
                <h5 className="lg:text-4xl md:text-3xl text-2xl lg:leading-[44px] font-semibold mb-6">
                  Find Local Pet Care Providers
                </h5>
                <p className="text-[#818C96] lg:text-lg text-base font-normal">
                  Find and book a wide variety of pet-related services,
                  including grooming, training, and veterinary care, all in one
                  place.
                </p>
              </div>

              <Image
                src={petProviders}
                alt="vet holding a cat and a thermometer"
                className="xl:h-[477px] xl:w-[500px] xl:object-fill h-full object-contain md:rounded-r-3xl md:rounded-t-3xl md:rounded-l-none rounded-b-3xl place-self-end order-last"
              />
            </article>

            <article className="grid md:grid-cols-2 gap-5 bg-[#0A1718] rounded-3xl my-20">
              <Image
                src={petItems}
                alt="Pet items on a blue background"
                className="xl:h-[477px] xl:w-[500px] xl:object-fill h-full object-contain md:rounded-l-3xl md:rounded-t-3xl md:rounded-r-none rounded-b-3xl md:order-first order-last"
              />

              <div className="md:self-center md:place-self-start place-self-center w-10/12">
                <h5 className="lg:text-4xl md:text-3xl text-2xl lg:leading-[44px] font-semibold mb-6">
                  Shop for your pet with ease
                </h5>
                <p className="text-[#818C96] lg:text-lg text-base font-normal">
                  Browse a wide selection of pet products from trusted brands,
                  all in one place.
                  <br />
                  <br />
                  From food to toys to grooming supplies, we&apos;ve got you
                  covered.
                </p>
              </div>
            </article>

            <article className="grid md:grid-cols-2 gap-5 bg-[#0A1718] rounded-3xl my-20">
              <div className="md:self-center place-self-center w-10/12">
                <h5 className="lg:text-4xl md:text-3xl text-2xl lg:leading-[44px] font-semibold mb-6">
                  Find pet sitting and boarding services
                </h5>
                <p className="text-[#818C96] lg:text-lg text-base font-normal">
                  Going on vacation or need to leave town for a few days?
                  Furrsible can help you find pet sitting and boarding services
                  near you.
                  <br /> <br />
                  You can browse profiles and reviews to find a trusted and
                  reliable pet sitter or boarder.
                </p>
              </div>

              <Image
                src={petSitting}
                alt="Someone carrying a bunny"
                className="xl:h-[477px] xl:w-[500px] xl:object-fill h-full object-contain md:rounded-r-3xl md:rounded-t-3xl md:rounded-l-none rounded-b-3xl place-self-end order-last"
              />
            </article>
          </div>
        </section>

        {/* and lot more */}
        <section className="my-24 text-center">
          <h3 className="italic font-black text-[64px] leading-[70px] text-[#0A1718]">
            and Lots More...
          </h3>
        </section>

        {/* CTA */}
        <section className="my-52 w-8/12 mx-auto">
          <div className="grid md:grid-cols-2">
            <></>
            <div className="order-first md:order-last">
              <p className="font-semibold text-xl text-[#818C96]">
                What are you waiting for?
              </p>
              <h5 className="text-5xl leading-[60px] font-semibold">
                Sign up for our waitlist to be the first to know when Furrsible
                launches!
              </h5>
              <button className="bg-[#DAEF15] px-5 py-3 rounded-full text-[#11190C] font-semibold my-4">
                Join our Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
