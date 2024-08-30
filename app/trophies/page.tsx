const products = [
    {
      id: 1,
      name: 'UEFA Champions League titles',
      href: '#',
      Trophies: '15',
      imageSrc: 'https://media.nbclosangeles.com/2022/08/getty-real-madrid-champions-league.jpg?quality=85&strip=all&resize=1200%2C675',
    },
    {
      id: 2,
      name: 'La Liga titles',
      href: '#',
      Trophies: '36',
      imageSrc: 'https://static.theprint.in/wp-content/uploads/2022/05/FRm3r72XEAEtNBL2022050107364320220501080303.jpg',
    },
    {
      id: 3,
      name: 'FIFA Club World championships',
      href: '#',
      Trophies: '8',
      imageSrc: 'https://i.guim.co.uk/img/media/e9b7575d9e95d8daa33885c08a0654a65e2fad8c/0_74_3631_2179/master/3631.jpg?width=1200&quality=85&auto=format&fit=max&s=cf72067bac84ecd7aebac0f8b5926549',
    },
    {
      id: 4,
      name: 'UEFA Super Cups',
      href: '#',
      Trophies: '5',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCWd8EVYDjxioIImsLRXUf4_9APeHMYrjIQ&s',
    },
    // More products...
  ]
  
  export default function Trophies() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    // alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.Trophies}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  