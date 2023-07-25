import {portugueselesson1A} from 'src/app/components/learning/portuguesewords/PortL1/PortL1Lessons/PortL1A.tsx'

export function PortL1AC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson1A[2].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson1A[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson1A[2].ephrase}</div>


            )}
        </div>
    );
}