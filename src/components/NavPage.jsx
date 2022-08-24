const NavPage = ({ page, setPage }) => {
  return (
    <div className='flex justify-center py-6'>
      <div className='btn-group'>
        <button
          className='btn btn-primary'
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          {'<'}
        </button>
        <button className='btn btn-primary btn-active'>
          Page {page}
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setPage(page + 1)}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default NavPage
