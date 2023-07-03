import {BsChevronCompactDown} from"react-icons/bs";
import {BsChevronCompactUp} from"react-icons/bs";
import {Collapse} from "react-collapse";


export default function AccordionItem({open, question, response, toggle}) {
    return(
        <div className="pt-[10px]">
            <div className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
                onClick={toggle}
            >
                <p className="text-[22px] font-semibold">{question}</p>
                <div className="text-[30px]">
                    {open? BsChevronCompactUp:<BsChevronCompactDown/>}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="bg-white px-[50px] pb-[20px]">
                    {response}
                </div>
            </Collapse>

        </div>
    )
}
