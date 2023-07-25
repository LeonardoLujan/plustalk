import {portugueselesson3B} from 'src/app/components/learning/portuguesewords/PortL3/PortL3Lessons/PortL3B.tsx'

export function PortL3BC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson3B[1].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson3B[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson3B[1].ephrase}</div>


            )}
        </div>
    );
}