import SectionTemplate from "../components/SectionTemplate";
import React, { useState } from "react";
import PHM from "./phm";
import Neo from "./neo";
import Peds from "./peds";
import { sections as neoSections } from "./neo";
import { sections as phmSections } from "./phm";
import { sections as pedsSections } from "./peds";

const Pediatrics = () => {
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
    const neoCount = neoSections.length;      // number of sections in neo.js
    const phmCount = phmSections.length;   // number of sections in phm.js
    const pedsCount = pedsSections.length;     // number of sections in peds.js
    return (
        <><SectionTemplate title="Obstetrics and Gynecology">



        </SectionTemplate>
        <Neo
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            startIndex={0}
        />
        <PHM
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            startIndex={neoCount}
        />
        <Peds
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            startIndex={neoCount + phmCount}
        />
    </>
    );
};

export default Pediatrics;