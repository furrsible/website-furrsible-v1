import { Header, Image } from '../common/components';
import heroCat from '../common/images/hero/cat.png';
import heroDog from '../common/images/hero/dog.png';

export default function Home() {
  return (
    <>
      <Header />
      <main className="4k:max-w[100px] lg:w-9/12 md:w-10/12 md:mx-auto xs:mx-10 mx-5">
        {/* Hero */}
        <section
          className="rounded-[24px] md:min-h-[500px] flex items-center relative"
          style={{
            background: `linear-gradient(90deg, #FFEFBA 0%, #FFFFFF 100%)`,
          }}
        >
          <Image
            src={heroCat}
            alt="cat looking up"
            className="absolute bottom-0 right-0 md:w-auto w-20 z-0 isolate"
          />
          <Image
            src={heroDog}
            alt="dog raising up left paw"
            className="absolute bottom-0 left-0 md:w-auto w-20"
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
      </main>
    </>
  );
}
