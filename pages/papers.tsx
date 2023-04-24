import Container from "components/Container";
import { Disclosure, Transition } from '@headlessui/react'
import  ChevronUpIcon  from '@heroicons/react/solid/ChevronUpIcon'
import { useState } from 'react'
import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { Modal, Image, Text, Link as NextuiLink } from "@nextui-org/react";
import Link from "next/link";
import { Download } from "react-feather";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
export default function Papers (props) {
  const papers = props.papers;
  const conferences = props.conferences;
  let [isOpen, setIsOpen] = useState(true)
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
   <Container title="Published Articles">
   <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Articles
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are {papers.length} articles that have been published and are free to read, download, or use (proper citation). If you have any feedback, comments, or errata, kindly feel free to <Link className="underline text-[#0000CC] font-semibold border-1 border-gray-200 dark:border-gray-800 py-0 px-0 rounded-lg dark:text-[#1bd760]" href="mailto:contact@heykapil.in">get in touch.</Link>
        </p>
        <div className="w-full max-w-3x1 space-y-1 mb-6">
        <Accordion allowToggle>
         {papers.map( (paper)  => 
         <>
               <AccordionItem key={paper.id}>
               <AccordionButton>
                   <div className="flex w-full mt-2 justify-between rounded-lg border border-gray-200 dark:border-zinc-800 hover:bg-gradient-to-r hover:from-rose-100 hover:via-pink-200 hover:to-orange-100 dark:hover:bg-gradient-to-r dark:hover:from-purple-500 dark:hover:via-fuchsia-500 dark:hover:to-pink-500 px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-neutral-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <b>{paper.id}. {paper.title}</b>
                     <AccordionIcon fontSize='20px' />
                   </div>
                </AccordionButton>
                   <AccordionPanel className="w-full px-4 pb-4 text-sm border rounded-lg border-gray-200 border-l-gray-700 dark:border-l-gray-300 dark:border-gray-800 text-neutral-600 dark:text-neutral-400">
                   <div className="mt-4 mx-4">
                    <ul className="list-[square]">
                     { paper.authors ?  
                    <><li><b>Nita H. Shah, <span className="text-[#0000CC] dark:text-stone-300 hover:underline">Kapil Chaudhary</span>, {paper.authors}</b></li></> :
                     <><li><b>Nita H. Shah, <span className="text-[#0000CC] dark:text-stone-300 hover:underline">Kapil Chaudhary</span></b></li></> 
                     }
                     { paper.journal && <li><b><Link target="_blank" rel="noopener noreferrer" className="text-[#0000CC] dark:text-[#1bd760] hover:text-fuchsia-400  hover:underline" href={`${paper.journal_link}`}>{paper.journal}</Link></b></li>}
                     { paper.indexing &&  <li><b>Indexing: {paper.indexing}</b></li>}
                     { paper.doi === "Not assigned as of now" ? null :  <li><b>DOI: <Link target="_blank" rel="noopener noreferrer" className="text-[#0000CC] dark:text-[#1bd760] hover:text-fuchsia-400  hover:underline" href={`https://dx.doi.org/${paper.doi}`}>{paper.doi}</Link></b></li>}
                     { paper.issn &&  <li><b>{paper.issn}</b></li>}
                    </ul>
                   </div>
                   <div className="flex flex-row items-center space-x-4 mx-4 mt-2">
                    { paper.abstract &&  <div className="flex bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-lg">
                      <button onClick={handler} className="text-[#0000CC] dark:text-[#1bd760] hover:text-fuchsia-400  hover:underline"><b><Link href={`/research/paper${paper.id}-abstract`}>Abstract</Link></b></button>
                    </div>}
                    <Link href={`${paper.link}`} className="text-[#0000CC] rounded-lg dark:text-[#1bd760] hover:text-fuchsia-400  hover:underline font-bold"> <div className="flex bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-lg justify-between items-center"><span className="mr-1">Download</span><Download size={15} /></div></Link>
                    <div></div>
                  </div>
                  </AccordionPanel>
             </AccordionItem>
             </>
             )}
             </Accordion>
         </div>
     </div>
    </Container>
    </>
  )
}

import { promises as fs } from 'fs';
import path from 'path'
import { Button } from "@nextui-org/react";
export async function getStaticProps() {
  const jsonDirectory = path.join(process.cwd(), 'lib');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/paper.json', 'utf8');
  const objectData = JSON.parse(fileContents);

  return {
    props: objectData
  }
}