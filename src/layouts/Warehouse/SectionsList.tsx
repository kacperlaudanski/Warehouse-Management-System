import SectionListElement from "./SectionListElement"
import { warehouseSections } from "../../data/warehouse-sections"
export default function SectionsList(){
    return (
        <ul className="w-full h-full flex flex-col">
            {warehouseSections.map((section, index) => {
                return (
                  <SectionListElement 
                    key={index}
                    name={section.name}
                    isOccupied={section.isOccupied}
                    fillPercentage={section.fillPercentage}
                    activeSection={section.isActive}
                  />
                )
            })}
        </ul>
    )
}