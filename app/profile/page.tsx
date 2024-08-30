import { Button } from "@headlessui/react"
export default function ProfilePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-lg shadow-lg w-64">
        <div className="h-24 bg-yellow-300 rounded-t-lg" />
        <img
          src="https://assets.laliga.com/squad/2023/t186/man50/2048x2048/man50_t186_2023_1_002_000.jpg"
          height="100"
          width="100"
          className="rounded-full -mt-12 border-4 border-white mx-auto"
          alt="User avatar"
        />
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">Carlo Ancelotti</h2>
          <p className="text-gray-500">Italian football manager</p>
        </div>
        <div className="flex justify-around my-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg">140M</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">30</h3>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <Button className="w-full bg-yellow-200 hover:bg-yellow-400 text-black rounded-lg"> Follow </Button>
        </div>
      </div>
    </div>
  )
} 