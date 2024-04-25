"use client"

/**
 * Component to mark an article as verified or not verified
 * Further work: Add interaction to change the value
 * 
 * @param id the id of the article
 * @param verified if the article is verified
 * 
*/

const Verified = ({ id, verified }: { id?: number, verified: boolean }) => {

    const toggle = async () => { }
    const readonly = id === undefined

    return (
        <span
            onClick={readonly ? toggle : () => { }}
            className={`
                ${readonly ? '' : 'cursor-pointer'}
                ${!readonly && verified ? 'hover:bg-orange-200 hover:text-orange-800' : ''}
                ${!readonly && !verified ? 'hover:bg-green-200 hover:text-green-800' : ''}
                ${verified ? 'text-green-800' : 'text-orange-800'}
                ${verified ? 'bg-green-200' : 'bg-orange-200'}
                px-2 py-1 ml-5 text-sm rounded-xl `}> {verified ? "" : "Not "}
            Verified
        </span>
    )
}

export default Verified