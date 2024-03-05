import data from '../data';
import AccordionItem from './AccordionItem';
import { useState } from 'react';

export default function Accordion() {
    const [currOpen, setCurrOpen] = useState(null);
    return (
        <div className='accordion'>
            {data.map((el, i) => (
                <AccordionItem
                    key={el.title}
                    num={i}
                    title={el.title}
                    currOpen={currOpen}
                    onOpen={setCurrOpen}
                >
                    {el.text}
                </AccordionItem>
            ))}
        </div>
    );
}
