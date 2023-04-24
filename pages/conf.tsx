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
export default function Conf (props) {
  const papers = props.papers;
  const conferences = props.conferences;
  let [isOpen, setIsOpen] = React.useState(true)
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
    <Container title="Conferences">
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
         Conferences
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`The workshops, conferences, and scientific courses that were attended are listed here along with certificates, organised according to the dates on which they were held.`}
        </p>
        <div className="w-full max-w-3x1 space-y-1 mb-6">
        <Accordion allowToggle>
         {conferences.map( (conference)  => 
         <>
               <AccordionItem key={conference.id}>
               <AccordionButton>
                   <div className="flex w-full mt-2 justify-between rounded-lg border border-gray-200 dark:border-zinc-800 hover:bg-gradient-to-r hover:from-rose-100 hover:via-pink-200 hover:to-orange-100 dark:hover:bg-gradient-to-r dark:hover:from-purple-500 dark:hover:via-fuchsia-500 dark:hover:to-pink-500 px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-neutral-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                     <b>{conference.id}. {conference.title}</b>
                     <AccordionIcon fontSize='20px' />
                   </div>
                </AccordionButton>
                   <AccordionPanel className="w-full px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-400 border rounded-lg border-gray-200 border-l-gray-700 dark:border-l-gray-300 dark:border-gray-800">
                   <div className="mt-4 mx-4">
                    <ul className="list-[square]">
                    {conference.best_paper && <li><b className="text-green-500 dark:text-[#1bd760]">Best Paper Presentation Awarded 🏆</b></li>}
                     <li><b>Organised on: {conference.date}</b></li>
                     <li><b>Organised by: {conference.organiser}</b></li>
                    </ul>
                   </div>
                   <div className="flex flex-row mx-4 mt-2 ">
                    {conference.certificate_link &&  <Link href={`${conference.certificate_link}`} className="text-indigo-600 rounded-lg dark:text-[#1bd760] hover:text-fuchsia-400  hover:underline font-bold"> <div className="flex bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-lg justify-between items-center"><span className="mr-1">Certificate</span><Download size={15} /></div></Link>
                    }
                    <div>{conference.slides &&  <div className="flex bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-lg text-indigo-600 dark:text-[#1bd760] hover:text-fuchsia-400  hover:underline">
                    <b><Link href={`${conference.slides}`}>Slides</Link></b>
                    </div>}</div>
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