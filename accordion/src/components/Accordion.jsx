import data from '../data';
import AccordionItem from './AccordionItem';

export default function Accordion() {
    return (
        <div className='accordion'>
            {data.map((el, i) => (
                <AccordionItem
                    key={el.title}
                    num={i}
                    title={el.title}
                    text={el.text}
                />
            ))}
        </div>
    );
}
