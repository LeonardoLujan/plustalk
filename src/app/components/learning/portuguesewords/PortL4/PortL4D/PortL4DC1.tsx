import {portugueselesson4D} from 'src/app/components/learning/portuguesewords/PortL4/PortL4Lessons/PortL4D.tsx'

export function PortL4DC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson4D[0].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson4D[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson4D[0].ephrase}</div>


            )}
        </div>
    );
}