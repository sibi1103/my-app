'use client'
import { Button } from '@/components/ui/button';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const user = {
  name: 'sibi',
  email: 'sibisid90@gmail.com',
  imageUrl:
    'data:image/jpeg;base64,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',
}
const navigation = [
  { name: 'Account', href: '/account', current: true },
  { name: 'Teams', href: '/teams', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Review', href: '/review', current: false },
  { name: 'About Us', href: '/about_us', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/Profile-settings' },
  { name: 'Sign out', href: '/api/auth/signout' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmqWSl42BOs_WYBvP-Vec6-NxeTsg_fJBPg&s"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </Button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </MenuButton>
                        </div>
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <MenuItem key={item.name}>
                                {({ focus }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      focus ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}
