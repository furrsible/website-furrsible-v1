import React, { useEffect, useRef, useState } from 'react';
import { Header, Image } from '../common/components';

// Images
import logo from '../common/images/logo.svg';
import close from '../common/images/close.svg';
import heroCat from '../common/images/hero/cat.png';
import heroDog from '../common/images/hero/dog.png';
import bigDog from '../common/images/big-dog.jpg';
import smallDog from '../common/images/small-dog.jpg';
import cat from '../common/images/cat.jpg';
import parrot from '../common/images/parrot.jpg';
import keepTabsImg from '../common/images/features/petting-a-cat.png.jpg';
import petProviders from '../common/images/features/checking-a-cat.jpg';
import petItems from '../common/images/features/pet-items.jpg';
import petSitting from '../common/images/features/holding-a-bunny.jpg';

export default function Home() {
  const showModal = useRef<HTMLButtonElement>(null);
  const secButton = useRef<HTMLButtonElement>(null);
  const hideModal = useRef<HTMLButtonElement>(null);
  const registerModal = useRef<HTMLDialogElement>(null);
  const doneModal = useRef<HTMLDialogElement>(null);
  const [formValues, setFormValues] = useState({
    email: ``,
    userType: `Pet Owner`,
  });
  const [emailError, setEmailError] = useState(``);
  const [animatedClass, setAnimatedClass] = useState(`animate__zoomIn`);
  const [animatedDialog, setAnimatedDialog] = useState(`animate__zoomIn`);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, email: event.target.value }));
    if (!isValidEmail(event.target.value)) {
      setEmailError(`Please enter a valid email address`);
    } else {
      setEmailError(``);
    }
  };

  const setHideModal = () => {
    const _modal = registerModal?.current;
    setAnimatedClass(`animate__zoomOut`);
    setTimeout(() => {
      _modal?.close();
    }, 300);
  };

  const handleShowModal = () => {
    const _modal = registerModal?.current;
    const _hideModal = hideModal?.current;
    setAnimatedClass(`animate__zoomIn`);
    _modal?.showModal();
    _hideModal?.focus();
  };

  const handleRegistered = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isValidEmail(formValues.email)) {
      setEmailError(`Please enter a valid email address`);
    } else {
      const _modal = doneModal.current;
      setHideModal();
      setTimeout(() => {
        _modal?.showModal();
      }, 500);
    }
  };

  useEffect(() => {
    const _showModal = showModal?.current;
    const _hideModal = hideModal?.current;
    const _secButton = secButton.current;
    const _modal = registerModal?.current;

    _showModal?.addEventListener(`click`, () => {
      handleShowModal();
    });

    _showModal?.addEventListener(`keypress`, (e) => {
      if (e.code === `Enter`) {
        handleShowModal();
      }
    });

    _secButton?.addEventListener(`click`, () => {
      handleShowModal();
    });

    _secButton?.addEventListener(`keypress`, (e) => {
      if (e.code === `Enter`) {
        handleShowModal();
      }
    });

    _hideModal?.addEventListener(`click`, () => {
      setHideModal();
    });
    _modal?.scroll({
      top: 0,
      behavior: `smooth`,
    });
  }, []);

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
            <button
              ref={showModal}
              className="bg-[#11190C] text-[#DAEF15] border-2 border-[#DAEF15] px-6 py-4 rounded-full text-base font-semibold transition-colors duration-1000 hover:bg-[#DAEF15] hover:text-[#11190C] hover:border-[#11190C]"
            >
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
        <section className="md:my-24 my-14 text-center">
          <h3 className="italic font-black text-[64px] leading-[70px] text-[#0A1718]">
            and Lots More...
          </h3>
        </section>

        {/* CTA */}
        <section className="md:my-52 my-20 lg:w-9/12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex md:gap-x-8 gap-x-4 w-full">
              <div className="flex flex-col md:gap-y-8 gap-y-4 mt-10">
                <Image src={parrot} alt="parrot" className="rounded-3xl" />
                <Image src={bigDog} alt="big dog" className="rounded-3xl" />
              </div>
              <div className="flex flex-col md:gap-y-8 gap-y-4">
                <Image src={cat} alt="cat" className="rounded-3xl" />
                <Image src={smallDog} alt="small dog" className="rounded-3xl" />
              </div>
            </div>
            <div className="order-first md:order-last place-self-center">
              <p className="font-semibold md:text-xl text-base text-[#818C96]">
                What are you waiting for?
              </p>
              <h5 className="md:text-5xl md:leading-[60px] text-4xl leading-[44px] font-semibold my-4">
                Sign up for our waitlist to be the first to know when Furrsible
                launches!
              </h5>
              <button
                ref={secButton}
                className="bg-[#DAEF15] text-[#11190C] border-[#11190C] px-5 py-3 rounded-full font-semibold my-4 transition-colors duration-700 hover:bg-opacity-75 hover:text-[#DAEF15] hover:border-[#DAEF15]"
                onClick={handleRegistered}
              >
                Join our Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0A1718]">
        <div className="2xl:w-[1200px] lg:w-9/12 md:w-10/12 md:mx-auto mx-5 xs:mx-10 py-7">
          <div className="flex justify-between mb-10">
            <Image
              src={logo}
              alt="Logo"
              className="max-w-auto inline-block w-[55px]"
            />
            <div className="flex justify-between gap-x-7 text-xs text-[#CFC9BC]">
              <a href="instagram.com" target="_blank">
                Instagram
              </a>
              <a href="twitter.com" target="_blank">
                Twitter
              </a>
            </div>
          </div>
          <div className="text-[#CFC9BC] text-xs">© Furrsible 2023</div>
        </div>
      </footer>

      <dialog
        ref={registerModal}
        className={`min-w-full h-screen max-h-screen overflow-hidden my-0 bg-[#091314] text-white animate__animated animate__faster ${animatedClass}`}
      >
        <div className="lg:w-3/12 md:w-8/12 w-full mx-auto h-full overflow-y-auto">
          <header className="w-full flex justify-center items-center py-2">
            <Image src={logo} alt="Logo" className="inline-block" />
          </header>

          <button
            ref={hideModal}
            onClick={setHideModal}
            className="absolute right-5 top-5"
          >
            <Image src={close} alt="close" />
          </button>

          <div className="flex justify-center items-center my-20">
            <div>
              <h2 className="font-bold text-4xl leading-[-2%] mb-8">
                Join Our Waitlist
              </h2>
              <p className="md:text-lg text-base md:leading-7 leading-6">
                Submit your contact information below for early access to
                Furrsible.
              </p>
              <form className="my-8" onSubmit={handleRegistered}>
                <select
                  className="bg-[#DFE3E7] py-4 px-4 block mr-0 w-full rounded-xl placeholder:text-[#75808A] text-[#75808A] mb-9 border-2 border-[#DFE3E7] focus:outline-none  focus:border-teal-400 focus:ring-teal-400"
                  required
                  value={formValues.userType}
                  onChange={(e) => {
                    setFormValues((prev) => ({
                      ...prev,
                      userType: e.target.value,
                    }));
                  }}
                >
                  <option value="Pet Owner">Pet Owner</option>
                  <option value="Pet Service provider">
                    Pet Service provider
                  </option>
                </select>
                <div className="mb-9 relative input-field">
                  <input
                    type="email"
                    className="bg-[#DFE3E7] py-4 px-4 block mr-0 w-full rounded-xl placeholder:text-transparent text-[#75808A] border-2 border-[#DFE3E7] focus:outline-none  focus:border-teal-400 focus:ring-teal-400"
                    value={formValues.email}
                    onChange={handleEmailChange}
                    placeholder="Email Address"
                    required
                    id="email"
                    autoFocus
                  />
                  <label htmlFor="email" className="text-[#75808A]">
                    Email Address
                  </label>
                  {emailError && (
                    <p className=" text-red-500 pt-3 text-xs font-light px-3">
                      {emailError}
                    </p>
                  )}
                </div>

                <input
                  type="submit"
                  className="bg-[#DAEF15] px-6 py-4 block mr-0 w-full text-[#11190C] mb-6 rounded-full font-semibold cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </dialog>

      <dialog
        ref={doneModal}
        className={`lg:w-[531px] mx-auto lg:my-auto lg:rounded-3xl w-full lg:h-[450px] h-screen overflow-hidden my-0 bg-[#091314] text-white done animate__animated animate__faster ${animatedDialog}`}
      >
        <div className="text-right mb-8">
          <button
            ref={hideModal}
            tabIndex={0}
            onClick={() => {
              const _modal = doneModal?.current;
              setAnimatedDialog(`animate__zoomOut`);
              setTimeout(() => {
                _modal?.close();
              }, 300);
            }}
          >
            <Image src={close} alt="close" />
          </button>
        </div>
        <div className="lg:w-9/12 md:w-8/12 w-full mx-auto overflow-y-auto flex flex-col items-center justify-center">
          <header className="w-full flex justify-center items-center py-2">
            <Image src={logo} alt="Logo" className="inline-block" />
          </header>

          <div className="flex flex-col justify-center items-center my-8 text-center">
            <div className="mb-6">
              <h2 className="font-bold text-2xl leading-8 mb-2">Thank you!</h2>
              <p className="text-lg leading-7 text-[#CFC9BC]">
                You&apos;ll get a notification in your email when we launch. See
                you then!
              </p>
            </div>
            <button
              onClick={() => {
                const _modal = doneModal?.current;
                setAnimatedDialog(`animate__zoomOut`);
                setTimeout(() => {
                  _modal?.close();
                }, 300);
              }}
              className="bg-[#DAEF15] px-12 py-4 mr-0 text-[#11190C] mb-6 rounded-full font-semibold cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
