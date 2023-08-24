import { useCallback } from "react";
import { useRouter } from "next/router";

const HomepageDesktop = () => {
  const router = useRouter();

  const onNavLogoClick = useCallback(() => {
    window.open(
      "https://www.fiverr.com/samuelenoque/build-a-nextjs-app-and-deploy"
    );
  }, []);

  const onButtonTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='nFTInfoContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonText1Click = useCallback(() => {
    router.push("/latest-news");
  }, [router]);

  const onButtonContainer1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start text-left text-[32px] text-text font-caption-work-sans">
      <div className="self-stretch bg-gray-200 flex flex-row py-5 px-[50px] items-center justify-between text-center font-taprom">
        <div
          className="flex flex-row items-center justify-start cursor-pointer"
          onClick={onNavLogoClick}
        >
          <div className="relative w-[87px] h-[61px]">
            <div className="absolute top-[0px] left-[0px] w-[87px] h-[61px]">
              <div className="absolute top-[8px] left-[1px] leading-[140%]">
                toMarsToday
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[10px] text-base font-caption-work-sans">
          <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px]">
            <img
              className="relative w-5 h-5 hidden"
              alt=""
              src="/rocketlaunch.svg"
            />
            <div
              className="relative leading-[140%] font-semibold cursor-pointer"
              onClick={onButtonTextClick}
            >
              Mission Overview
            </div>
          </div>
          <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px]">
            <img
              className="relative w-5 h-5 hidden"
              alt=""
              src="/rocketlaunch.svg"
            />
            <div
              className="relative leading-[140%] font-semibold cursor-pointer"
              onClick={onButtonText1Click}
            >
              Latest News
            </div>
          </div>
          <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px]">
            <img
              className="relative w-5 h-5 hidden"
              alt=""
              src="/rocketlaunch.svg"
            />
            <div className="relative leading-[140%] font-semibold">
              Explore Mars
            </div>
          </div>
          <div className="rounded-xl bg-call-to-action h-[60px] hidden flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px]">
            <img className="relative w-5 h-5" alt="" src="/user.svg" />
            <div className="relative leading-[140%] font-semibold">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-20 px-[195px] items-center justify-center bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-base">
        <div className="self-stretch w-[1280px] flex flex-col items-center justify-start">
          <div className="self-stretch [background:linear-gradient(180deg,_rgba(255,_139,_89,_0),_#ff9f59)] flex flex-row pt-[360px] px-[195px] pb-[60px] items-end justify-center">
            <div className="w-[1050px] flex flex-row items-end justify-center">
              <div className="flex-1 flex flex-col items-start justify-start gap-[30px]">
                <div className="rounded-xl bg-gray-100 flex flex-row py-2.5 px-5 items-center justify-start">
                  <div className="relative leading-[140%]">Tickets to Mars</div>
                </div>
                <div className="self-stretch relative text-32xl leading-[110%] capitalize font-semibold">
                  Come to mars
                </div>
                <div className="rounded-xl bg-text h-[60px] flex flex-row py-[22px] px-[50px] box-border items-center justify-center text-center text-background">
                  <div className="relative leading-[140%] font-semibold">
                    prices
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-darkslategray [backdrop-filter:blur(10px)] w-[295px] flex flex-col p-[30px] box-border items-start justify-end gap-[10px] text-xs font-h5-space-mono">
                <div className="self-stretch relative leading-[110%]">
                  Auction ends in:
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-19xl">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <b className="self-stretch relative leading-[120%] capitalize">
                      1
                    </b>
                    <div className="self-stretch flex-1 relative text-xs leading-[110%]">
                      Hours
                    </div>
                  </div>
                  <b className="relative text-9xl leading-[140%] capitalize">
                    :
                  </b>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <b className="self-stretch relative leading-[120%] capitalize">
                      02
                    </b>
                    <div className="self-stretch flex-1 relative text-xs leading-[110%]">
                      Minutes
                    </div>
                  </div>
                  <b className="relative text-9xl leading-[140%] capitalize">
                    :
                  </b>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <b className="self-stretch relative leading-[120%] capitalize">
                      00
                    </b>
                    <div className="self-stretch flex-1 relative text-xs leading-[110%]">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black overflow-hidden flex flex-col py-20 px-0 items-center justify-start text-xl">
        <div className="self-stretch flex flex-col items-center justify-start bg-[url(/nft-highlight@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div
            className="self-stretch [background:linear-gradient(180deg,_rgba(89,_106,_255,_0),_#3c43ff)] flex flex-row pt-[360px] px-[195px] pb-[60px] items-end justify-center"
            data-scroll-to="nFTInfoContainer"
          >
            <div className="w-[1050px] flex flex-row items-end justify-center">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[110%] capitalize font-semibold">
                  <p className="m-0 text-32xl">The mission</p>
                  <p className="m-0 text-32xl">&nbsp;</p>
                  <p className="m-0">
                    Mars City, Mars - In an astonishing testament to human
                    ingenuity and perseverance, the once desolate Martian
                    landscape has undergone a breathtaking transformation, now
                    boasting a flourishing metropolis that serves as a beacon of
                    hope for humanity's future in space.
                  </p>
                  <p className="m-0">
                    Since the establishment of the first human colony on Mars,
                    scientists, engineers, and explorers from Earth have
                    tirelessly worked together to overcome the numerous
                    challenges of living on the Red Planet. Today, we witness
                    the realization of their extraordinary efforts, as Mars City
                    stands as a testament to mankind's indomitable spirit.
                  </p>
                  <p className="m-0">
                    Envisioned as a self-sustaining civilization, Mars City now
                    teems with life, exhibiting a remarkable fusion of
                    cutting-edge technology and awe-inspiring architecture. Upon
                    arriving at the city's spaceport, visitors are greeted by
                    the awe-inspiring sight of towering structures, their sleek
                    silhouettes harmonizing with the alien landscape.
                  </p>
                  <p className="m-0">
                    The heart of Mars City beats within its bustling central
                    district, a hive of activity where scientists, engineers,
                    and settlers converge. Here, advanced laboratories hum with
                    the rhythmic pulse of groundbreaking research, as pioneering
                    minds delve into the mysteries of Martian geology,
                    astrobiology, and atmospheric chemistry.
                  </p>
                  <p className="m-0">
                    The city's exquisite urban planning ensures a seamless
                    fusion of functionality and aesthetics. Self-sufficient
                    domes, reminiscent of colossal crystal formations, dot the
                    Martian horizon, housing diverse ecosystems and providing
                    comfortable habitats for the city's residents. These
                    architectural marvels incorporate advanced technologies such
                    as atmospheric processors, harnessing the planet's resources
                    to sustain the ever-growing population.
                  </p>
                  <p className="m-0">
                    Intricate networks of underground tunnels connect the
                    various districts of Mars City, forming a labyrinthine
                    transportation system that efficiently transports goods and
                    people throughout the metropolis. Powered by cutting-edge
                    renewable energy sources, the city's infrastructure
                    seamlessly integrates with the surrounding environment,
                    minimizing the impact on Mars' delicate ecosystem.
                  </p>
                  <p className="m-0">
                    Mars City's inhabitants enjoy a vibrant cultural tapestry,
                    woven from the diverse backgrounds of its settlers. The city
                    pulsates with artistic expression, hosting galactic
                    symphonies, avant-garde exhibitions, and theatrical
                    performances that capture the essence of human creativity
                    transcending planetary boundaries.
                  </p>
                  <p className="m-0">
                    The Martian society is not limited to its surface. In a
                    marvel of engineering, sprawling subterranean colonies
                    burrow deep into Mars' crust, expanding the city's livable
                    area and housing a substantial portion of its population.
                    These subterranean wonders feature magnificent underground
                    parks, schools, and residential areas, all bathed in
                    artificial daylight that mimics the warmth of Earth's sun.
                  </p>
                  <p className="m-0">
                    However, the journey towards a fully-fledged Martian
                    civilization is far from over. Scientists are dedicated to
                    unlocking Mars' secrets, searching for evidence of past or
                    present life and refining their methods of sustainable
                    resource extraction. Ambitious plans for terraforming the
                    planet's atmosphere have already been set in motion, with
                    scientists envisioning a future where the rusty-red expanse
                    is transformed into a lush oasis.
                  </p>
                  <p className="m-0">
                    As Earth gazes skyward, marveling at the achievements of its
                    interplanetary pioneers, the Martian civilization serves as
                    an inspiring testament to humanity's boundless ambition.
                    With each passing day, Mars City stands as a shining example
                    of what can be accomplished when we dare to venture into the
                    unknown, leaving an indelible mark on the history of our
                    species.
                  </p>
                  <p className="m-0">
                    Disclaimer: This news article is a work of fiction,
                    utilizing elements of science fiction to create an immersive
                    storytelling experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-darkgray flex flex-col py-20 px-[195px] items-center justify-start gap-[60px] text-19xl">
        <div className="w-[1050px] flex flex-row items-end justify-start">
          <div className="w-[703px] flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[120%] capitalize font-semibold">
                Last Tickets
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-3xl">
              <div className="flex-1 relative leading-[160%] capitalize">
                you can choose where to sit inside the spaceship
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[30px] text-center text-3xl">
          <div className="w-[1050px] flex flex-row items-start justify-start gap-[30px]">
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[194.77px] object-cover"
                    alt=""
                    src="/asset-12-2@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  sam Smith
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  1
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  john junior
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  2
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  junior perez
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  3
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  joan ruarez
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  4
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1050px] flex flex-row items-start justify-start gap-[30px]">
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  John suarez
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  5
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Lenon D. Daniel
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  6
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  empty
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  7
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  empty
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  8
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1050px] flex flex-row items-start justify-start gap-[30px]">
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  empty
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  9
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  empty
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  10
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  empty
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  11
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px]">
              <div className="flex flex-col items-end justify-start z-[0]">
                <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
                  <img
                    className="relative w-[120px] h-[195px] object-cover"
                    alt=""
                    src="/asset-12-21@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  empty
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-h5-space-mono text-text text-left">
                    34.53 ETH
                  </div>
                </div>
              </div>
              <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-h5-space-mono">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-background-secondary flex flex-col py-10 px-[195px] items-center justify-start gap-[30px] text-3xl font-h5-space-mono">
        <div className="flex flex-row items-start justify-between">
          <div className="w-[327.41px] flex flex-col py-0 pr-[84px] pl-0 box-border items-start justify-start text-base text-lightgray font-caption-work-sans">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[140%] inline-block w-[238px]">
                Red Planet Explorations
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[140%] inline-block w-[238px] h-[18px] shrink-0">
                  Join our community
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 flex flex-col items-start justify-start gap-[25px]">
            <b className="relative leading-[160%] capitalize">Explore</b>
            <div className="flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-caption-work-sans">
              <div className="relative leading-[140%]">Marketplace</div>
              <div className="relative leading-[140%]">Rankings</div>
              <div className="relative leading-[140%]">Connect a wallet</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <b className="relative leading-[160%] capitalize">Join our mail</b>
            <div className="flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-caption-work-sans">
              <div className="relative leading-[140%] inline-block w-[330px]">{`Get exclusive promotions & updates straight to your inbox.`}</div>
              <div className="rounded-xl bg-text w-[420px] h-[60px] flex flex-row py-4 pr-0 pl-5 box-border items-center justify-start gap-[12px] text-background">
                <div className="flex-1 relative leading-[140%]">
                  Enter your email here
                </div>
                <div
                  className="rounded-xl bg-darkslateblue h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-end gap-[12px] cursor-pointer text-center text-text"
                  onClick={onButtonContainer1Click}
                >
                  <img
                    className="relative w-5 h-5 hidden"
                    alt=""
                    src="/envelopesimple.svg"
                  />
                  <div className="relative leading-[140%] font-semibold">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1049.41px] flex flex-col items-start justify-start gap-[20px] text-xs text-lightgray font-caption-work-sans">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-caption-label-text" />
          <div className="self-stretch relative leading-[110%]">
            Ⓒ Red Planet Explorations
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageDesktop;
