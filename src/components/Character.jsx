const Character = ({ character }) => {
  return (
    <div className='card w-auto bg-slate-50 hover:bg-slate-50/80 dark:bg-slate-800 shadow-xl mb-8 dark:hover:bg-slate-700 hover:-translate-y-2 transition'>
      <figure>
        <img className='w-full h-full object-cover' src={character.image} alt={character.name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-indigo-600 dark:text-indigo-500 text-3xl'>{character.name}</h2>
        <div className='text-xl'>
          <p
            className='flex items-center text-gray-600 dark:text-gray-300'
          >
            Status:
            {character.status === 'Alive'
              ? <span className='bg-green-500 w-4 h-4 rounded-full mx-1 inline-block' />
              : <span className='bg-red-500 w-4 h-4 rounded-full mx-1 inline-block' />}
            {character.status}
          </p>
          <p className='text-gray-600 dark:text-gray-300'>Specie: {character.species}</p>
          <p className='text-gray-600 dark:text-gray-300'>Origin: {character.origin.name}</p>
          <p className='text-gray-600 dark:text-gray-300'>Gender: {character.gender}</p>
        </div>
      </div>
    </div>
  )
}

export default Character
