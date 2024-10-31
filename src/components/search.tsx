import SearchBreadcrumbs from './search-breadcrumbs'
import HeroSearch from './hero-search'

const Search = () => {
  return (
    <div className='bg-[#fafafb]'>
      <SearchBreadcrumbs/>
      <div className='pb-[70px]'>
        <HeroSearch className='bg-white rounded-lg shadow-lg xl:ml-[135px] md:ml-2 lg:ml-10 max-sm:ml-10 pt-5 xl:pl-20 lg:pl-10 md:pl-2  pb-8  xl:w-[1000px] lg:w-[950px] md:w-[750px] max-sm:w-[335px] max-sm:pl-3'/>
      </div>
    </div>
  )
}

export default Search