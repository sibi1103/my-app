
import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export default function ReviewPage() {
  return (
    <Card
      key="1"
      className="w-[500px] mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
        <div className="p-8 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img alt="Profile picture" className="rounded-full" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1hBEAqhqlFHmlNEvlIGmTICQ9710urA5uA&s" width="50" />
              <div className="ml-4">
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                    Cristiano Ronaldo
                </div>
                <div className="text-gray-400 dark:text-gray-300">@CR7</div>
              </div>
            </div>
            <TwitterIcon className="h-6 w-6 text-blue-500 fill-current" />
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
          Solid Defense: Despite their attacking prowess, Real Madrid maintains a strong defensive setup. 
          They focus on organization, with defenders and midfielders working together to close down spaces and intercept passes.
          </p>
          <div className="flex mt-6 justify-between items-center">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300">
              <div className="flex items-center">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1 text-red-500">45 M</span>
              </div>
              <div className="flex items-center">
                <MessageCircleIcon className="h-6 w-6 text-green-500" />
                <span className="ml-1 text-green-500">20 M</span>
              </div>
              <div className="flex items-center">
                <RepeatIcon className="h-6 w-6 text-blue-500" />
                <span className="ml-1 text-blue-500">15M</span>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-300">7:22 AM · Aug 22, 2023</div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
        </div>

        <div className="mt-3">
        <div className="md:flex-shrink-0">
          <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
        <div className="p-8 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img alt="Profile picture" className="rounded-full" height="50" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8BKO-DXdMv0bcwB8pLQDLm5-OvfCyNiECIfBe1MtmLa7ebUBO" width="50" />
              <div className="ml-4">
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                    Zinedine Zidane
                </div>
                <div className="text-gray-400 dark:text-gray-300">Zidane</div>
              </div>
            </div>
            <TwitterIcon className="h-6 w-6 text-blue-500 fill-current" />
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
          The midfield is the heartbeat of Real Madrid's gameplay. 
          Players like Luka Modrić, Toni Kroos, and Camavinga have been instrumental in controlling the game, 
          breaking up opposition play, and linking defense with attack.
          </p>
          <div className="flex mt-6 justify-between items-center">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300">
              <div className="flex items-center">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1 text-red-500">16 M</span>
              </div>
              <div className="flex items-center">
                <MessageCircleIcon className="h-6 w-6 text-green-500" />
                <span className="ml-1 text-green-500">10 M</span>
              </div>
              <div className="flex items-center">
                <RepeatIcon className="h-6 w-6 text-blue-500" />
                <span className="ml-1 text-blue-500">5M</span>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-300">7:22 AM · Aug 22, 2023</div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
        </div>

        <div className="mt-3">
        <div className="md:flex-shrink-0">
          <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
        <div className="p-8 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img alt="Profile picture" className="rounded-full" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDF-XIaYDAhrlAge-Pu4o11rA5b5lu3pdvQ&s" width="50" />
              <div className="ml-4">
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                Xavier Hernández
                </div>
                <div className="text-gray-400 dark:text-gray-300">Xavi</div>
              </div>
            </div>
            <TwitterIcon className="h-6 w-6 text-blue-500 fill-current" />
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
          When you don't kill Real Madrid, Real Madrid kill you," 
          "We didn't score at least one goal... They were better than us, and this is football.
          The most important thing for Barça and Barça’s fans is to be above Real Madrid”These guys do not care about winning trophies, only beating Real Madrid
          </p>
          <div className="flex mt-6 justify-between items-center">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300">
              <div className="flex items-center">
                <HeartIcon className="h-6 w-6 text-red-500" />
                <span className="ml-1 text-red-500">16 M</span>
              </div>
              <div className="flex items-center">
                <MessageCircleIcon className="h-6 w-6 text-green-500" />
                <span className="ml-1 text-green-500">10 M</span>
              </div>
              <div className="flex items-center">
                <RepeatIcon className="h-6 w-6 text-blue-500" />
                <span className="ml-1 text-blue-500">5M</span>
              </div>
            </div>
            <div className="text-gray-400 dark:text-gray-300">7:22 AM · Aug 22, 2023</div>
          </div>
        </div>
      </div>
        </Card>  
    )
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function RepeatIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

