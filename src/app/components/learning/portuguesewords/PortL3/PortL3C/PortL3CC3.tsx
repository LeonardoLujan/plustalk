import {portugueselesson3C} from 'src/app/components/learning/portuguesewords/PortL3/PortL3Lessons/PortL3C.tsx'

export function PortL3CC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson3C[2].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson3C[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson3C[2].ephrase}</div>


            )}
        </div>
    );
}