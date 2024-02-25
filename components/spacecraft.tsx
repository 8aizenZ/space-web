"use client";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Spacecraft({
  title,
  description,
  content,
  image,
}: {
  title: string;
  description: string;
  content: ReactNode;
  image: StaticImport;
}) {
  const [show, setShow] = useState(false);
  return (
    <CardContainer className="inter-var h-full">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl h-full p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="relative w-full mt-4">
          {show && <div className="h-60 absolute z-20">{content}</div>}
          <Image
            src={image}
            className={cn(
              "h-60 max-w-full object-cover rounded-xl group-hover/card:shadow-xl",
              show && "brightness-50"
            )}
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center mt-8">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Подробнее →</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>
                    
                  </DialogDescription>
                </DialogHeader>
                  {content}
              </DialogContent>
            </Dialog>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
