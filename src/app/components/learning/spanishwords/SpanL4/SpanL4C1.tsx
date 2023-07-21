
import {spanishlesson4} from '../SpanishLessons/SpanLesson4.tsx';


export function SpanL4C1({isActive, onShow, unShow}){
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson4[0].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson4[0].ephrase}</div>


            )}
        </div>
    );
}