import {portugueselesson4C} from 'src/app/components/learning/portuguesewords/PortL4/PortL4Lessons/PortL4C.tsx'

export function PortL4CC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson4C[3].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson4C[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson4C[3].ephrase}</div>


            )}
        </div>
    );
}