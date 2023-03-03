import React from 'react'

const SearchedItemTemplate = ({data}) => {
    function createMarkup(htmlRemover) {
        return {__html: htmlRemover};
      }
  return (
    <div className='flex flex-col max-w-[700px]'>
        <div className='group cursor-pointer'
            onClick={()=>window.open(data.link)}>

            <div className='text-sm truncate text-gray-500'>
                {data.formattedUrl}
            </div>
            <div className='group-hover:underline text-xl text-indigo-700 pt-1'>
                {data.title}
            </div>
        </div>
        <div className="text-sm text-gray-700 leading-6 pt-1"  dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)} />
    </div>

  )
}

export default SearchedItemTemplate
