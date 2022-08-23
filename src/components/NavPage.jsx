const NavPage = ({ page, setPage }) => {
  return (
    <div className='flex justify-center py-6'>
      <div className='btn-group grid grid-cols-2 gap-1'>
        <button
          className='btn btn-primary'
          onClick={() => setPage(page === 0 ? 1 : page - 1)}
        >
          PREVIOUS PAGE
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default NavPage
