import { AccordionItem } from './item'
import style from './style.module.css'

export type Item = {
    id: number;
    title: string;
    content: React.ReactNode;
}

type Props = {
    items: Item[],
}

export const  Accordion = ({items = []}: Props) => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                {items.map((item) => (
                    <AccordionItem {...item} />
                ))}
            </div>
        </div>
    )
}