const people = [
    {
      name: 'Vinicius Junior',
      role: 'Left Winger ',
      imageUrl:
        'https://assets.laliga.com/squad/2023/t186/p246333/2048x2048/p246333_t186_2023_1_002_000.jpg',
    },
    {
        name: 'Rodrygo',
        role: 'Right Winger',
        imageUrl:
          'https://assets.laliga.com/squad/2023/t186/p440077/2048x2225/p440077_t186_2023_1_001_000.png',
      },
      {
        name: 'Jude Bellingham',
        role: 'Attacking Midfielder',
        imageUrl:
          'https://assets.laliga.com/squad/2023/t186/p244855/2048x2048/p244855_t186_2023_1_003_000.png',
      },
      {
        name: 'Eduardo Camavinga',
        role: 'Midfielder',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVjSWjHmazioT5ALwUliNDnAuT2qArUb81A&s',
      },
      {
        name: 'Federico Valverde',
        role: ' Midfielder',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZurXTTGScK1LLf5jm1Rjt_dtJ9abDgcVSg&s',
      },
      {
        name: 'Luka Modric',
        role: 'Central Midfield',
        imageUrl:
          'https://assets.laliga.com/squad/2023/t186/p37055/2048x2225/p37055_t186_2023_1_001_000.png',
      },
      {
        name: 'Aurélien Tchouaméni',
        role: ' Midfielder',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLumO38jcmulaFPssK9hM8UJw567yyPHtPjA&s',
      },
      {
        name: 'Antonio Rüdiger',
        role: 'Centre-Back',
        imageUrl:
          'https://assets.laliga.com/squad/2023/t186/p102380/512x512/p102380_t186_2023_1_002_000.jpg',
      },
  ]
  
  export default function TeamPage() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Core Players</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            The future players of Real Madrid, particularly those who are emerging from the club's renowned youth academy (La Fábrica) or being scouted and signed from other clubs, are generating significant interest and excitement among fans, analysts, and the football community worldwide.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }


  