import React from 'react'

const Search = () => {
    return (
        <>
            <div className='pt-14'>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-x-amber-600 focus:ring-amber-600 "
                        placeholder="Lush green grass, blue sky, and a beautiful lake."
                        defaultValue={''}
                      />
                    </div>

                    <div className='flex justify-between mt-2'>
                        <p className="text-sm md:text-base text-slate-100">
                            Describe the photo you want the AI to generate.
                        </p>
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        >
                            Generate
                        </button>
                    </div>

                  </div>

        </>
    )
}

export default Search