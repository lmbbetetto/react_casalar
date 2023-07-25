import { Item } from ".."
import style from './style.module.css'


export const AccordionItem = ({title, content}: Item) => {
    return (
        <div className={style.container}>
            <p>Item</p>
        </div>
    )
}