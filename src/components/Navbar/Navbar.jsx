import {Drawer,Button,Typography,IconButton} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {Card, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";
import {ShoppingBagIcon, UserCircleIcon,Cog6ToothIcon,InboxIcon, ArrowRightIcon,} from "@heroicons/react/24/solid";
import React from "react";

const Navbar = () => {
    const [openRight, setOpenRight] = React.useState(false);
    const [open, setOpen] = React.useState(0);
    
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return(
        <div>
            <React.Fragment >
         <div className="flex flex-wrap gap-4 ">
            <Button onClick={openDrawerRight} className=" text-gray-950"> <Bars3Icon className="h-7 mx-6 text-gray-50 hidden sm:block cursor-pointer"aria-hidden="true"></Bars3Icon> </Button>
        </div>
        <Drawer 
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className="p-4 z-40">

            <div className="mb-6 flex items-center justify-between ">
            <Card className="fixed top-4 rigth-4 h-[calc(100vh-2rem)] w-full max-w-[20rem]  ">
                <div className="mb-2 p-2">
                    <Typography variant="h5" color="blue-gray"> Menu </Typography>
                </div>
            <List>
                <Accordion
                open={open === 2}
                icon={
                    <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`py-1 mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}/>
                }>
                <ListItem className="flex p-0 justify-around items-center" selected={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 ">
                    <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="flex mr-auto font-normal">
                        Produtos
                    </Typography>
                    </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                    <List className="p-0">
                    <ListItem >
                        <ListItemPrefix>
                        <ArrowRightIcon className="h-3 w-5" />
                        </ListItemPrefix>
                        Skincare
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                        <ArrowRightIcon className="h-3 w-5" />
                        </ListItemPrefix>
                        Aromas
                    </ListItem>
                    </List>
                </AccordionBody>
                </Accordion>

                <ListItem>
                <ListItemPrefix>
                    <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Blog
                </ListItem>

                <ListItem>
                <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Sobre nós
                </ListItem>

                <ListItem>
                <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Conta
                </ListItem>

            </List>
            </Card>         
            <Typography variant="h5" color="" className=" text-gray-950"> </Typography>
            <IconButton
                variant="text"
                color=""
                onClick={closeDrawerRight}>
                <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>

            </div>
        </Drawer>
        </React.Fragment>
        </div>
    )
}
export default  Navbar;