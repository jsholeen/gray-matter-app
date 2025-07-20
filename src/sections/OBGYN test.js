import SectionTemplate from "../components/SectionTemplate";
import Ob from "./ob";
import Labor from "./Labor";
import Gyn from "./gyn";
import React, {useState} from "react";

const ObGyn = () => {
    // openIndex is the global index for all dropdowns
    const [openIndex, setOpenIndex] = useState(null);

    // Calculate the number of sections in each file
    // You need to export the sections array from each file
    // For example: export const sections = [...]
    // Then import them here:
    // import { sections as obSections } from "./ob";
    // import { sections as laborSections } from "./Labor";
    // import { sections as gynSections } from "./gyn";

    // For demonstration, let's assume:
    const obCount = 6;      // number of sections in ob.js
    const laborCount = 6;   // number of sections in Labor.js
    const gynCount = 6;     // number of sections in gyn.js
    return (
        <><SectionTemplate title="Obstetrics and Gynecology">



        </SectionTemplate>
        <Labor
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            startIndex={0}
        />
        <Ob
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            startIndex={laborCount}
        />
        <Gyn
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            startIndex={laborCount + obCount}
        />
    </>
    );
};

export default ObGyn;